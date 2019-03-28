'use strict';

const jetpack = require('fs-jetpack');
const sharp = require('sharp');

/**
 * NormalizeImages
 * 
 */
class BatchResize {
	/**
	 * Setup function, called with `new`
	 * @param  {[type]} basePath     [the base directory path, where all the images are]
	 * @param  {Number} width        [the desired output width of the images]
	 * @param  {Number} height       [the desired output height of the images]
	 * @param  {String} outputPrefix [what the images should be prefixed with (if nothing, will overwrite)]
	 */
	constructor(basePath, width = 600, height = 600, outputPrefix = '') {
		this.basePath = basePath;
		this.width = width;
		this.height = height;
		this.outputPrefix = outputPrefix;
	}
	/**
	 * Resize the images, meaning just make them all the same size
	 */
	resize() {
		let images = jetpack.list(this.basePath).filter(file => {
			// If the sum of these is greater than -4 at least one of them wasn't -1,
			// which means we have an image of type jpg jpeg png or gif
			return (file.indexOf('.jpg') + file.indexOf('.png') + file.indexOf('.gif') + file.indexOf('.jpeg') > -4);
		});
		// Loop through the images and use Sharp to resize them
		images.forEach(image => {
			sharp(`${this.basePath}/${image}`)
				.resize(this.width, this.height)
				.toFile(`${this.basePath}/${this.outputPrefix}${image}`, (err, info) => {
					if (err) {
						console.warn(err);
					} else {
						console.log(info);
					}
				});
		});
	}
}

module.exports = BatchResize;