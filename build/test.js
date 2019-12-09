const glob = require('glob')
const fs = require('fs')

// glob('src/**/*.md', (err, files) => {
// 	if (err) {
// 		throw err
// 	}
// 	files.forEach(file => {
// 		fs.readFile(file,  { encoding: 'utf8' }, (err, content) => {
// 			if (err) {
// 				throw err
// 			}
			
// 			const title = (/(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/.exec(content) || [])[2]
// 			if (title) {
// 				fs.writeFile(file, 
// 					'<!--\ntitle: ' + title + '\nauthor: yuer\n-->\n\n' + content, 
// 					'utf8', err => {
// 					if (err) {
// 						throw err
// 					}
// 				})
// 			} else {
// 				console.log('----------> file', file)
// 			}
// 		})
// 	})
// })
// 
glob('src/**/*.md', (err, files) => {
	if (err) {
		throw err
	}
	files.forEach((file, index) => {
		fs.readFile(file,  { encoding: 'utf8' }, (err, content) => {
			if (err) {
				throw err
			}
			
			const title = (/(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/.exec(content) || [])[2]
			if (title) {
				fs.writeFile(file, 
					'<!--\ntitle: ' + title + '\norder: ' + (300 + index + 1) + '\nauthor: yuer\n-->\n\n' + content, 
					'utf8', err => {
					if (err) {
						throw err
					}
				})
			} else {
				console.log('----------> file', file)
			}
		})
	})
})