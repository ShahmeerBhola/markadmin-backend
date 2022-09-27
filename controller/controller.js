const productSchema=require('../model/product')


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