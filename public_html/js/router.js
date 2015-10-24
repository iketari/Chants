define([
    'backbone',
    'views/game',
    'views/login',
    'views/main',
    'views/scoreboard',
    'views/auth',
    'views/viewmanager'
], function(
    Backbone,
    gameView,
    loginView,
    mainView,
    scoreboardView,
    authView,
    ViewManager
){

    var views = [mainView, scoreboardView, gameView, loginView, authView];
                 
    var viewManager = new ViewManager(views);
    
    var Router = Backbone.Router.extend({

        routes: {
            'scoreboard': 'scoreboardAction',
            'game': 'gameAction',
            'login': 'loginAction',
            'auth' : 'authAction',
            'signout' : 'signoutAction',
            '*default': 'defaultActions'
        },

        defaultActions: function () {
            mainView.show();
        },

        scoreboardAction: function () {
            scoreboardView.show();
        },

        gameAction: function () {
            gameView.show();
        },
            
        loginAction: function () {
            loginView.show();
        },
        
        authAction: function() {
            authView.show();
        },

        signoutAction: function() {
            authView.show();
        }
    });

    return new Router();
});
