
// import foodModel from "../models/foodModel.js";
// import fs from 'fs'

// const addFood = async(req,res)=>{
//   if (!req.file) {
//     return res.json({ success: false, message: "No file uploaded. Ensure the field name is 'image'." });
// }
//     let image_filename = `${req.file.filename}`;

//     const food = new foodModel({
//         name: req.body.name,
//         description: req.body.description,
//         price: req.body.price,
//         category: req.body.category,
//         image: image_filename
//         })
//         try{
//             await food.save();
//             res.json({success:true,message:"Food Added"})
//         }catch(error){
//            console.log(error)
//            res.json({success:false,message:"Error"})
//         }
// }
// const listFood =async(req,res)=>{
//   try {
//     const foods = await foodModel.find({});
//     res.json({success:true,data:foods})
//   } catch (error) {
//     console.log(error)
//     res.json({success:false,message:"Error"})
//   }
// }
// const removeFood = async (req, res) => {
//   try {
//       const food = await foodModel.findById(req.body.id);
//       fs.unlink(`uploads/${food.image}`, () => {});

//       await foodModel.findByIdAndDelete(req.body.id);
//       res.json({success:true,message:"Food Removed"})
//   } catch (error) {
//  console.log(error)
//     res.json({success:false,message:"Error"})
//  }
// }

// export {addFood,listFood,removeFood}
import foodModel from "../models/foodModel.js";
import fs from "fs";
import path from "path";

const addFood = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ success: false, message: "No file uploaded. Ensure the field name is 'image'." });
  }

  let image_filename = req.file.filename;
  

  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filename,
  });

  try {
    await food.save();
    res.json({ success: true, message: "food Added" });
  } catch (error) {
    console.error("Error adding food:", error);
    res.status(500).json({ success: false, message: "Error adding food item" });
  }
};

const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.json({ success: true, data: foods });
  } catch (error) {
    console.error("Error fetching food:", error);
    res.status(500).json({ success: false, message: "Error fetching food items" });
  }
};

const removeFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.body.id);

    if (!food) {
      return res.status(404).json({ success: false, message: "Food not found" });
    }

    const imagePath = path.join("uploads", food.image);

    fs.access(imagePath, fs.constants.F_OK, (err) => {
      if (!err) {
        fs.unlink(imagePath, (unlinkErr) => {
          if (unlinkErr) {
            console.error("Error deleting file:", unlinkErr);
          }
        });
      }
    });

    await foodModel.findByIdAndDelete(req.body.id);

    res.json({ success: true, message: "Food Removed" });
  } catch (error) {
    console.error("Error removing food:", error);
    res.json({ success: false, message: "Error removing food item" });
  }
};


export { addFood, listFood, removeFood };
