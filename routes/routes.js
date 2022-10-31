"use-strict"
module.exports=function (app) {
    var abc=require('../controller/controller')
    app.route('/newProduct').post(abc.newProduct);
    app.route('/getProducts').get(abc.getProduct);
    app.route('/getProduct/:id').get(abc.getProductById);
    app.route('/deleteProduct/:id').delete(abc.deleteProduct);
    app.route('/updateProduct/:id').put(abc.editProduct);
    app.route('/newContact').post(abc.newContact);
    app.route('/getContacts').get(abc.getContacts);
    app.route('/getContactById/:id').get(abc.getContactsById);
    app.route('/deleteontact/:id').delete(abc.deleteContact);
    app.route('/updateContact/:id').put(abc.editContact);
    app.route('/newChocolateOrder').post(abc.newChocolateOrder);
    app.route('/getChocolateOrder').get(abc.getChocolateOrder);
    app.route('/deleteChocolateOrder/:id').delete(abc.deleteChocolateOrder);
    app.route('/getChocolateOrderById/:id').get(abc.getChocolateOrderById);
    app.route('/editChocolateOrderById/:id').put(abc.editChocolateOrderById);
    app.route('addAssembly').post(abc.addAssembly);
    app.route('getAssembly').get(abc.getAssembly);

};