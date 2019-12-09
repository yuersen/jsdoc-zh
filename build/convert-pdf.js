const path = require('path')
const Converter = require('./convert')

class PDFConverter extends Converter {
	constructor() {
		super()
	}

	/**
	 * rewrite revise method to remove all link
	 */
	revise(text) {
		// modify all link to html file
		return text.replace(
			/<a[^>]*(href=['"]([^"]*)['"][^>]*)>(.*?)<\/a>/gim,
			(match, capture) => {
				return match.replace(capture, '')
			}
		)
	}

	process() {
		this.getFiles('src/**/*.md').then(filepaths => {
			Promise.all(
				filepaths.map(filepath => {
					return this.readFile(filepath)
				})
			).then(contents => {
				const reg = /order:\s*(\d+)(?:\n+|$)/
				contents = contents.sort((current, next) => {
					return parseInt(reg.exec(current)[1]) - parseInt(reg.exec(next)[1])
				})
				const content = contents.join('\n\n')
				this.writeFile(
					this.presolve(`pdf/index.html`),
					this.pack(
						Object.assign(this.extract(content), {
							body: this.md2html(content)
						})
					)
				)
			})
		})
	}
}

const converter = new PDFConverter()
converter.process()