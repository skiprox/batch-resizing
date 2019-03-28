# Batch Resizing

> Resizes every image in a directory to be the same size

You might want this if you're trying to clean images in order to do some machine learning stuff on them, idk.

### To use

Install the package from npm,

```
npm install batch-resizing --save
```

Then you'll want to run like so:

```
const batchResizing = require('batch-resizing');
const resize = new batchResizing('directory-path', WIDTHpx, HEIGHTpx, 'output-prefix');
resize.resize();
```