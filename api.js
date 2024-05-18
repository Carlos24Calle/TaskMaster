const express = require("express");

 
  const userdetailApi = require("./routes/UsersDetails");
  const taskApi = require("./routes/Tasks");
  const categoryApi = require("./routes/Category");
  const usersApi = require("./routes/Users");
  const authApi = require("./routes/Auth"); 


const routers = (app) => {
  const baseRoute = express.Router();
  app.use(express.static("public"));
  app.use("/api/v1", baseRoute);


  baseRoute.use("/users", usersApi);
  baseRoute.use("/userdetail", userdetailApi);
  baseRoute.use("/task", taskApi);
  baseRoute.use("/category", categoryApi)
  baseRoute.use("/auth", authApi);
}

  module.exports = routers
