const Todo = require('../models').Todo;

module.exports = {
  createTodo: async name => {
    let todo = new Todo({
      name,
      done: false
    });

    try {
      await todo.save();
      return await Todo.find({});
    } catch (err) {
      throw new Error(err);
    }
    
  },

  updateTodo: async (_id, updatedTodo) => {
    try {
      await Todo.findByIdAndUpdate(_id, {$set: updatedTodo});  
      return await Todo.find({});
    } catch (err) {
      throw new Error(err);
    }
  },

  deleteTodo: async _id => {
    try {
      await Todo.findByIdAndDelete({_id});
      return await Todo.find({});
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
