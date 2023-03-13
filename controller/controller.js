const productSchema = require("../model/product");
const contactSchema = require("../model/contacts");
const orderSchema = require("../model/orders");
const assemblySchema = require("../model/assembly");
const inventorySchema = require("../model/inventory");
const expensesSchema = require("../model/expenses");
const recipeSchema = require("../model/recipe");
const ingredientSchema = require("../model/ingredient");
//Products
exports.newProduct = async (req, res) => {
  let product = new productSchema(req.body);
  try {
    await product.save((fail, pass) => {
      if (fail) {
        res.status(500).send(fail);
      } else {
        res.status(200).json({ message: "Product Created" });
      }
    });
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.getProduct = async (req, res) => {
  try {
    const product = await productSchema.find();
    res.status(200).json(product);
  } catch (err) {
    res.status(500).send(err);
  }
};
exports.getProductById = async (req, res) => {
  try {
    const product = await productSchema.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).send(err);
  }
};
exports.deleteProduct = async (req, res) => {
  try {
    const product = await productSchema.findByIdAndRemove(req.params.id);
    if (product !== null) {
      res.status(200).json({ message: "Product Deleted Successfully" });
    } else {
      res.status(200).json({ message: "Product Not Deleted Successfully" });
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.editProduct = async (req, res) => {
  try {
    const product = await productSchema.findById(req.params.id);
    if (!product) {
      res.status(200).json({ message: "Product Not Found" });
    }
    Object.assign(product, req.body);
    await product.save();
    res.status(200).json({ message: "Product Updated Successfully" });
  } catch (err) {
    res.status(500).send(err);
  }
};

//Contaxts

exports.newContact = async (req, res) => {
  let contact = new contactSchema(req.body);
  try {
    await contact.save((fail, pass) => {
      if (fail) {
        res.status(500).send(fail);
      } else {
        res.status(200).json({ message: "Contact Created!!" });
      }
    });
  } catch (err) {
    res.status(500).send(er);
  }
};

exports.getContacts = async (req, res) => {
  try {
    let contact = await contactSchema.find();
    res.status(200).json(contact);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.deleteContact = async (req, res) => {
  let contact = await contactSchema.findByIdAndDelete(req.params.id);
  try {
    if (contact !== null) {
      res.status(200).send({ message: "contact deleted sucessfully!!!" });
    } else {
      res.status(500).send({ message: "Contact not deleted!!" });
    }
  } catch (err) {
    res.status(500).send(err);
  }
};
exports.editContact = async (req, res) => {
  let contact = await contactSchema.findById(req.params.id);
  try {
    if (!contact) {
      res.status(200).json({ message: "Contact Not Found" });
    }
    Object.assign(contact, req.body);
    await contact.save();
    res.status(200).json({ message: "Contact Updated Successfully" });
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.getContactsById = async (req, res) => {
  try {
    let contact = await contactSchema.findById(req.params.id);
    res.status(200).json(contact);
  } catch (err) {
    res.status(500).send(err);
  }
};

//chocolate order

exports.newChocolateOrder = async (req, res) => {
  let order = new orderSchema(req.body);
  try {
    await order.save((fail, pass) => {
      if (fail) {
        res.status(500).send(fail);
      } else {
        res.status(200).json({ msg: "Order Created !!!" });
      }
    });
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.getChocolateOrder = async (req, res) => {
  try {
    let order = await orderSchema.find().populate("ContactName");
    res.status(200).json(order);
  } catch (err) {
    res.status(500).send(err);
  }
};
exports.deleteChocolateOrder = async (req, res) => {
  let order = await orderSchema.findByIdAndDelete(req.params.id);
  try {
    if (order !== null) {
      res.status(200).send({ message: "order deleted sucessfully!!!" });
    } else {
      res.status(500).send({ message: "order not deleted!!" });
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.getChocolateOrderById = async (req, res) => {
  try {
    let order = await orderSchema
      .findById(req.params.id)
      .populate("ContactName");
    res.status(200).json(order);
  } catch (err) {
    res.status(500).send(err);
  }
};
exports.editChocolateOrderById = async (req, res) => {
  let order = await orderSchema.findById(req.params.id);
  try {
    if (!order) {
      res.status(500).json({ msg: "Order Not Found!!!" });
    }
    Object.assign(order, req.body);
    await order.save();
    res.status(200).json({ msg: "Order Updated Successfully" });
  } catch (err) {
    res.status(500).send(err);
  }
};

//assembly
exports.addAssembly = async (req, res) => {
  let assembly = new assemblySchema(req.body);
  try {
    await assembly.save((fail, pass) => {
      if (fail) {
        res.status(500).send(fail);
      } else {
        res.status(200).json(pass);
      }
    });
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.getAssembly = async (req, res) => {
  try {
    let assembly = await assemblySchema.find();
    res.status(200).json(assembly);
  } catch (err) {
    res.status(500).send(err);
  }
};
exports.editAssemblyById = async (req, res) => {
  let assembly = await assemblySchema.findById(req.body._id);
  try {
    if (!assembly) {
      res.status(500).json({ msg: "Assembly Not Found!!!" });
    }
    Object.assign(assembly, req.body);
    await assembly.save();
    res.status(200).json({ msg: "Assembly Updated Successfully" });
  } catch (err) {
    res.status(500).send(err);
  }
};
exports.deleteAssemblyById = async (req, res) => {
  try {
    let assembly = await assemblySchema.findByIdAndRemove(req.body._id);
    if (assembly !== null) {
      res.status(200).send({ message: "Assembly deleted sucessfully!!!" });
    } else {
      res.status(500).send({ message: "Assembly not deleted!!" });
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

//inventory
exports.addInventory = async (req, res) => {
  console.log(`in add inventory`)
  
  let checkInventory = await inventorySchema.findById(req.body._id);
  if (checkInventory) {
    try {
      console.log(`inventory before update`,checkInventory)
      Object.keys(req.body).map((item)=>{
        if(item === "quantity"){
          checkInventory[item] = +checkInventory[item] + +req.body[item]
        }else {
          checkInventory[item] = req.body[item]
        }
      })
      console.log(`inventory after update`,checkInventory)
      await checkInventory.save();
      return res.status(200).json({ msg: "Inventory Updated Successfully", obj:checkInventory });
    } catch (err) {
      return res.status(500).send(err);
    }
  } else {
    let inventory = new inventorySchema(req.body);
    try {
      await inventory.save((fail, pass) => {
        if (fail) {
          return res.status(500).send(fail);
        } else {
          return res.status(200).json(pass);
        }
      });
    } catch (err) {
      return res.status(500).send(err);
    }
  }
};

exports.getInventory = async (req, res) => {
  try {
    let inventory = await inventorySchema.find().sort('-updatedAt');
    res.status(200).json(inventory);
  } catch (err) {
    res.status(500).send(err);
  }
};
exports.editInventoryById = async (req, res) => {
  let inventory = await inventorySchema.findById(req.body._id);
  try {
    if (!inventory) {
      return res.status(500).json({ msg: "Inventory Not Found!!!" });
    }
    Object.keys(req.body).map((item)=>inventory[item]=req.body[item])
    // Object.assign(inventory, req.body);
    await inventory.save();
    res.status(200).json({ msg: "Inventory Updated Successfully" , obj :inventory });
  } catch (err) {
    res.status(500).send(err);
  }
};
exports.deleteInventoryById = async (req, res) => {
  try {
    let inventory = await inventorySchema.findByIdAndRemove(req.body._id);
    if (inventory !== null) {
      res.status(200).send({ message: "inventory deleted sucessfully!!!" });
    } else {
      res.status(500).send({ message: "inventory not deleted!!" });
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

//expenses
exports.addExpenses = async (req, res) => {
  let expenses = new expensesSchema(req.body);
  try {
    await expenses.save((fail, pass) => {
      if (fail) {
        res.status(500).send(fail);
      } else {
        res.status(200).json({ msg: "Expenses Created !!!" });
      }
    });
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.getExpenses = async (req, res) => {
  try {
    let expenses = await expensesSchema.find();
    res.status(200).json(expenses);
  } catch (err) {
    res.status(500).send(err);
  }
};
exports.editExpensesById = async (req, res) => {
  let expenses = await expensesSchema.findById(req.body._id);
  try {
    if (!expenses) {
      res.status(500).json({ msg: "Expenses Not Found!!!" });
    }
    Object.assign(expenses, req.body);
    await expenses.save();
    res.status(200).json({ msg: "Expenses Updated Successfully" });
  } catch (err) {
    res.status(500).send(err);
  }
};
exports.deleteExpensesById = async (req, res) => {
  try {
    let expenses = await expensesSchema.findByIdAndRemove(req.body._id);
    if (expenses !== null) {
      res.status(200).send({ message: "Expenses deleted sucessfully!!!" });
    } else {
      res.status(500).send({ message: "Expenses not deleted!!" });
    }
  } catch (err) {
    res.status(500).send(err);
  }
};
//recipe
exports.addRecipe = async (req, res) => {
  let recipe = new recipeSchema(req.body);
  try {
    await recipe.save((fail, pass) => {
      if (fail) {
        res.status(500).send(fail);
      } else {
        res.status(200).json({ msg: "Recipe Created !!!" });
      }
    });
  } catch (err) {
    res.status(500).send(err);
  }
};
exports.getRecipe = async (req, res) => {
  try {
    let recipe = await recipeSchema.find();
    res.status(200).json(recipe);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.deleteRecipeById = async (req, res) => {
  try {
    let recipe = await recipeSchema.findByIdAndRemove(req.body._id);
    if (recipe !== null) {
      res.status(200).send({ message: "Recipe deleted sucessfully!!!" });
    } else {
      res.status(500).send({ message: "Recipe not deleted!!" });
    }
  } catch (err) {
    res.status(500).send(err);
  }
};
exports.getRecipeById = async (req, res) => {
  try {
    let recipe = await recipeSchema.findById(req.params.id);
    res.status(200).json(recipe);
  } catch (err) {
    res.status(500).send(err);
  }
};
//Ingredient

exports.addIngredient = async (req, res) => {
  let ingredient = new ingredientSchema(req.body);
  try {
    await ingredient.save((fail, pass) => {
      if (fail) {
        res.status(500).send(fail);
      } else {
        res.status(200).json({ msg: "ingredient Created !!!" });
      }
    });
  } catch (err) {
    res.status(500).send(err);
  }
};
exports.getIngredient = async (req, res) => {
  try {
    let ingredient = await ingredientSchema.find();
    res.status(200).json(ingredient);
  } catch (err) {
    res.status(500).send(err);
  }
};
