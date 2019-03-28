'use strict';

const BatchResize = require('./../batch-resize');

let resize = new BatchResize('/Users/seanmscanlan/Documents/.saved_trash', 1200, 1200, 'output-');
resize.resize();