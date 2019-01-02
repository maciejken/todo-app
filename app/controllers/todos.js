const todoService = require('../services').todos;

module.exports = {
  createTodo: async (req, res, next) => {
    let newTodo = await todoService.createTodo(req, res);
    res.status(200).json(newTodo);
  },

  deleteTodo: async (req, res, next) => {
    let xtodo = await todoService.deleteTodo(req, res);
    res.status(200).json(xtodo);
  },

  updateTodo: async (req, res, next) => {
    let updatedTodo = await todoService.updateTodo(req, res);
    res.status(200).json(updatedTodo);
  },

  getAllTodos: async (req, res, next) => {
    let allTodos = await todoService.getAllTodos(req, res);
    res.status(200).json(allTodos);
  },


};
