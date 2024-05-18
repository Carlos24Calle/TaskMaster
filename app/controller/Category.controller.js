const CategoryModel = require("../../models/Category.models");

class Category {
  async getAll(req, res) {
    const response = await CategoryModel.findAll();
    res.status(200).json({
      response,
    });
  }

  async getById(req, res) {
    const { categoryId } = req.params;
    const response = await ClientModel.findOne({ where: { id: categoryId } });

    res.status(200).json({
      response,
    });
}
    async create(req, res) {
        const dataCategory = req.body;
        const CategoryExisting = await CategoryModel.findOne({where: { name_category: dataCategory?.name_category }, });
        if (CategoryExisting === null) {
        
          const createCategory = await CategoryModel.create(dataCategory);
    
          res.status(201).json({
            ok: true,
            status: 201,
            message: "category created",
            response: 'create category',
          });
}
}

  async update(req,res){
      const { categoryId } = req.params
      const dataCategory = req.body
      const response = await CategoryModel.update(dataCategory, {
        where:{
            id: categoryId

        }

      });
      res.status(200).json({
        ok: true,
        status: 200,
        message: "Category updated",
      

        })

      }

        async delete(req,res) {
            const {categoryId}= req.params
            const response =await CategoryModel.destroy({
              where:{
                id:categoryId
              }
            });

            res.status(200).json({
                ok: true,
                status: 201,
                message: "Category delete"
               
        })
  }
}
module.exports = Category;
