"use-strict"
module.exports=function (app) {
    var abc=require('../controller/controller')
    app.route('/newProduct').post(abc.newProduct);
    app.route('/getProducts').get(abc.getProduct);
    app.route('/deleteProduct/:id').delete(abc.deleteProduct);
    app.route('/updateProduct/:id').put(abc.editProduct);

};