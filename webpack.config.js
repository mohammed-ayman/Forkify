/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

modules.exports = {
    entry: './src/js/index.js',
    outpath:{
        path: path.resolve(__dirname,'dist/js'),
        filename: 'bundle.js'
    },
    mode: 'development'
};
