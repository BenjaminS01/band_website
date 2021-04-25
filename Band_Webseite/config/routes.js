const PagesController = require('../controllers/pagesController');
const ApiUsersController = require('../controllers/api/usersController.js');

let routes = {
    'pages' : {
        controller: PagesController,
        actions: [
            {path: '/', action: 'index', method: 'get' },
            {path: '/aufnahmen', action: 'aufnahmen', method: 'get' },
            {path: '/bilder', action: 'bilder', method: 'get' },
            {path: '/home', action: 'home', method: 'get' }
        ]
    },

    'api/users' : {
        controller: ApiUsersController,
        actions: [
          {path: '/api/users', action: 'index', method: 'get'},
          {path: '/api/signin', action: 'signin', method: 'post'},
          {path: '/api/signup', action: 'signup', method: 'post'},
          {path: '/api/users/:id', action: 'show', method: 'get'}   
        ]
      },
};


module.exports = routes;

