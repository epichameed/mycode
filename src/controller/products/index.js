import categoryModel from "../../model/product/category.js";
import categoryProductModel from "../../model/product/categoryProduct.js";
import productModel from "../../model/product/product.js";
import unitModel from "../../model/product/unit.js";
import { Sequelize } from "sequelize";

const ProductController = {
  create: async (req, res) => {
    const { name } = req.body;
    // const unit = await unitModel.create({ name: "u2" });
    // const product = await productModel.create({ name: "p3"});

    // const data = await productModel.findByPk(2, {
    //   include: [unitModel],
    //   logging: true,
    // });

    // const data = await unitModel.findByPk(2, {
    //   include: [productModel],
    //   logging: true,
    // });
    const product = await productModel.create({
      name,
    });
    res.json({
      message: "product created",
      data,
    });
  },
};

export default ProductController;
