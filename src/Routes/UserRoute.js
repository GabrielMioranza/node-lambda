const UserControler = require ('../Controllers/UserController');
module.exports =(app) => {
    app.post('/user', UserControler.post);
    app.get('/user', UserControler.get);
    app.get('/user/:id', UserControler.getById);
}