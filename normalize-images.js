'use strict';

const jetpack = require('fs-jetpack');
const sharp = require('sharp');

class NormalizeImages {
	constructor(baseDir) {
		this.basePath = basePath;
	}
	normalize() {
		let images = jetpack.list(this.basePath);
		images.forEach(image => {
			sharp(`${this.basePath}/${image}`)
				.resize(600, 600)
				.toFile(`${basePath}/output-${image}`, (err, info) => {
					if (err) {
						console.warn(err);
					} else {
						console.log(info);
					}
				});
		})
	}
}

module.exports = NormalizeImages;