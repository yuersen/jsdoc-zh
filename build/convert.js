const marked = require('marked')
const glob = require('glob')
const fs = require('fs')
const path = require('path')
const ejs = require('ejs')

module.exports = class Converter {
	constructor() {
		this.templateHTMLText = this.getTemplateText('template/index.html')
		this.templateCSSText = this.getTemplateText('template/index.css')
	}

	/**
	 * resolve the path
	 * @param  {string} filepath - file path
	 * @return {string}
	 */
	presolve(filepath) {
		return path.resolve(process.cwd(), filepath)
	}

	/**
	 * get template text
	 * @param  {string} filepath - the path of template
	 * @return {string}
	 */
	getTemplateText(filepath) {
		return fs.readFileSync(this.presolve(filepath), 'utf8')
	}

	/**
	 * revise the link in markdown's html fragment
	 * @param {string} text - html fragment
	 */
	revise(text) {
		// modify all link to html file
		return text.replace(
			/<a[^>]*href=['"]([^"]*)['"][^>]*>(.*?)<\/a>/gim,
			(match, capture) => {
				return match.replace(/.md/gi, '.html')
			}
		)
	}

	/**
	 * extract information from MD files
	 * @param {string} mdText - Markdown file content
	 * @returns {object}
	 */
	extract(mdText) {
		const matched = (/<!--([\s\S]*?)-->/.exec(mdText) || [])[1]
		const info = {}

		if (matched) {
			matched.split(/\n/).forEach(item => {
				if (item.trim()) {
					const [key, value] = item.split(':')
					info[key.trim()] = value.trim()
				}
			})
		}
		return info
	}

	/**
	 * read file
	 * @param  {string} filepath - the path of file
	 * @return {Promise}
	 */
	readFile(filepath) {
		return new Promise((resolve, reject) => {
			fs.readFile(
				this.presolve(filepath),
				{ encoding: 'utf8' },
				(err, content) => {
					if (err) {
						return reject(err)
					}
					return resolve(content)
				}
			)
		})
	}

	/**
	 * write file
	 * @param  {string} filepath - the path of file
	 * @param  {string} content  - content to be written
	 * @return {Promise}
	 */
	writeFile(filepath, content) {
		return new Promise((resolve, reject) => {
			fs.writeFile(this.presolve(filepath), content, 'utf8', err => {
				if (err) {
					return reject(err)
				}
				return resolve(filepath)
			})
		})
	}

	/**
	 * pack all html fragment and data
	 * @param  {object} data - packed data
	 * @return {string}
	 */
	pack(data) {
		return ejs.render(
			this.templateHTMLText,
			Object.assign(data, {
				css: this.templateCSSText
			})
		)
	}

	/**
	 * markdown to html
	 * @param  {string} mdText - markdown content
	 * @return {string}
	 */
	md2html(mdText) {
		return this.revise(marked(mdText))
	}

	/**
	 * get file
	 * @param  {string} filepath - the path of markdown file
	 * @return {string}
	 */
	getFiles(filepath) {
		return new Promise((resolve, reject) => {
			glob(filepath, (err, files) => {
				if (err) {
					return reject(err)
				}
				resolve(files)
			})
		})
	}

	/**
	 * process
	 */
	process() {}
}