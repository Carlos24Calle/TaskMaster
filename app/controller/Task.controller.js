const TaskModel = require("../../models/Tak.models");
const UserModel = require("../../models/User.models");
const UserDetailModel = require("../../models/UserDetail.models");
const CategorytModel = require("../../models/Category.models");

class Task {
  async getAll(req, res) {
    const { userId } = req.params
    const response = await TaskModel.findAll({
      where: { user_id: userId },

      attributes: [
        "id",
        "description",
        "expectation_date",
        "priority",
        "estado",
      ],
      include: [
        {
          model: CategorytModel,
          attributes: ["name_category"],
        },
        {
          model: UserModel,
          attributes: ["email"],
          include: {
            model: UserDetailModel,
            attributes: ["first_name", "last_name"],
          },
        },
      ],
    });
    res.status(200).json({
      response,
    });
  }

  async getById(req, res) {
    const { taskId } = req.params;
    const response = await TaskModel.findOne({
      where: { id: taskId },
    });
    res.status(200).json({
      response,
    });
  }

  async create(req, res) {
    const {
      id,
      description,
      expectation_date,
      priority,
      estado,
      category_id,
      user_id,
     
      
    } = req.body;

    try {
      const newTask = await TaskModel.create({
        id,
        description,
        expectation_date,
        priority,
        estado,
        category_id,
        user_id,
        
    
      });

      res.status(201).json({
        ok: true,
        status: 201,
        message: "Task created",
        data: newTask,
      });
    } catch (error) {
      console.error("Error creating task:", error);
      res.status(500).json({
        ok: false,
        status: 500,
        message: "Error creating task",
        error: error.message,
      });
    }
}
    async update(req,res){
        const { taskId } = req.params
        const dataTask = req.body
        const response = await TaskModel.update(dataTask, {
          where:{
              id: taskId
  
          }
  
        });
        res.status(200).json({
          ok: true,
          status: 200,
          message: "Task updated",
        
  
          })
  
        }
  
          async delete(req,res) {
              const {taskId}= req.params
              const response =await TaskModel.destroy({
                where:{
                  id:taskId
                }
              });
  
              res.status(200).json({
                  ok: true,
                  status: 201,
                  message: "Task delete"
                 
          })
  }
}
module.exports = Task;
