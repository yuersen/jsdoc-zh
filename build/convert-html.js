const path = require('path')
const Converter = require('./convert')

class HTMLConverter extends Converter {
	constructor() {
		super()
	}

	process() {
		this.getFiles('src/**/*.md').then(filepaths => {
			filepaths.forEach(filepath => {
				this.readFile(filepath).then(content => {
					this.writeFile(
						this.presolve(`html/${path.basename(filepath, '.md')}.html`),
						this.pack(
							Object.assign(this.extract(content), {
								body: this.md2html(content)
							})
						)
					)
				})
			})
		})
	}
}

const converter = new HTMLConverter()
converter.process()