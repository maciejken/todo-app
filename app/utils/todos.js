const Todo = require('../models').Todo;

module.exports = {
  createTodo: async name => {
    let todo = new Todo({
      name,
      done: false
    });

    try {
      return await todo.save();
    } catch (err) {
      throw new Error(err);
    }
    
  },

  updateTodo: async (_id, updatedTodo) => {
    try {
      return await Todo.findByIdAndUpdate(_id, {$set: updatedTodo});
    } catch (err) {
      throw new Error(err);
    }
  },

  deleteTodo: async _id => {
    try {
      return await Todo.findByIdAndDelete({_id});
    } catch (err) {
      throw new Error(err);
    }
  },

  getAllTodos: async () => {
    try {
      return await Todo.find({});
    } catch (err) {
      throw new Error(err);
    }
  }
};
