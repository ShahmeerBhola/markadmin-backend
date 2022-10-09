const productSchema=require('../model/product')
const contactSchema=require('../model/contacts')
const orderSchema=require('../model/orders')
//Products
exports.newProduct=async(req,res)=>{
    let product=new productSchema(req.body)
    try{
        await product.save((fail,pass)=>{
            if(fail){
                res.status(500).send(fail)
            }
            else{
                res.status(200).json({message:"Product Created"})
            }
        })
    }
    catch(err){
        res.status(500).send(err)
    }
}

exports.getProduct=async(req,res)=>{
    try{
      const product= await productSchema.find()
       res.status(200).json(product);
    }
    catch(err){
        res.status(500).send(err)
    }
}
exports.getProductById=async(req,res)=>{
    try{
      const product= await productSchema.findById(req.params.id)
       res.status(200).json(product);
    }
    catch(err){
        res.status(500).send(err)
    }
}
exports.deleteProduct=async(req,res)=>{
    try{
       const product= await productSchema.findByIdAndRemove(req.params.id)
       if(product!==null){
           res.status(200).json({message:"Product Deleted Successfully"})
       }
       else{
        res.status(200).json({message:"Product Not Deleted Successfully"})
       }
    }
    catch(err){
        res.status(500).send(err)
    }
}

exports.editProduct=async(req,res)=>{
    try{
       const product= await productSchema.findById(req.params.id)
       if(!product){
        res.status(200).json({message:"Product Not Found"})
       }
       Object.assign(product,req.body)
       await product.save();
       res.status(200).json({message:"Product Updated Successfully"})
    }
    catch(err){
        res.status(500).send(err)
    }
}

//Contaxts

exports.newContact=async(req,res)=>{
    let contact=new contactSchema(req.body)
    try{
        await contact.save((fail,pass)=>{
            if(fail){
                res.status(500).send(fail)
            }
            else{
                res.status(200).json({message:"Contact Created!!"})
            }
        })
        
    }
    catch(err){
        res.status(500).send(er)
    }
}

exports.getContacts=async(req,res)=>{
    try{
        let contact=await contactSchema.find();
        res.status(200).json(contact)
    }
    catch(err){
        res.status(500).send(err)
    }
}

exports.deleteContact=async(req,res)=>{
    let contact=await contactSchema.findByIdAndDelete(req.params.id)
    try{
        if(contact!==null){

            res.status(200).send({message:"contact deleted sucessfully!!!"})
        }
        else{
            res.status(500).send({message:"Contact not deleted!!"})
        }
        
    }
    catch(err){
        res.status(500).send(err)
    }
}
exports.editContact=async(req,res)=>{
    let contact= await contactSchema.findById(req.params.id)
    try{
        if(!contact){
            res.status(200).json({message:"Contact Not Found"})
           }
           Object.assign(contact,req.body)
           await contact.save();
           res.status(200).json({message:"Contact Updated Successfully"})

    }
    catch(err){
        res.status(500).send(err)
    }
}

exports.getContactsById=async(req,res)=>{
    try{
        let contact=await contactSchema.findById(req.params.id)
        res.status(200).json(contact);

    }
    catch(err){
        res.status(500).send(err)
    }
}

//chocolate order

exports.newChocolateOrder=async(req,res)=>{
    let order= new orderSchema(req.body);
    try{
        await order.save((fail,pass)=>{
            if(fail){
                res.status(500).send(fail)
            }
            else{
                res.status(200).json({msg:"Order Created !!!"})
            }
        })
    }
    catch(err){
        res.status(500).send(err)
    }
}