const path = require('path');
module.exports = {
    mode: 'development',
    entry: './ClientApp/src/index.js',
    output: {
        path: path.resolve(__dirname, '../ClientApp/src/compress'),
        filename: 'bundle.js'
    }
};
