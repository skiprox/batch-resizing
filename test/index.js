'use strict';

const BatchResize = require('./../batch-resize');

let resize = new BatchResize('/Users/YOUR-USERNAME/Documents/images', 1200, 1200, 'output-');
resize.resize();