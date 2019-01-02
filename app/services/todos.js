const todoUtils = require('../utils').todos;

module.exports = {
  createTodo: async (req, res) => {
    return await todoUtils.createTodo(req.body.name);
  },

  deleteTodo: async (req, res) => {
    return await todoUtils.deleteTodo(req.params.id);
  },

  updateTodo: async (req, res) => {
    return await todoUtils.updateTodo(req.params.id, req.body);
  },

  getAllTodos: async (req, res) => {
    return await todoUtils.getAllTodos();
  }
};
