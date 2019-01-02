const todoController = require('../controllers').todos;

module.exports = function (app) {

    app.post('/todos/create', todoController.createTodo);
    app.get('/todos/all', todoController.getAllTodos);
    app.delete('/todos/:id/delete', todoController.deleteTodo);
    app.put('/todos/:id/update', todoController.updateTodo);

    // catch 404 and forward to error handler
    app.use(function (req, res, next) {
        const err = new Error('Not Found');
        err.status = 404;
        next(err);
    });

    // error handler
    // no stacktraces leaked to user unless in development environment
    app.use(function (err, req, res, next) {
        res.status(err.status || 500).json({
            status: 'error',
            message: err.message,
            error: (process.env.NODE_ENV === 'development') ? err.stack : {}
        });
    });
};
