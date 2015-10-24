define([
    'backbone',
    'tmpl/game',
    'utils/microphone',
    'views/base'
], function(
    Backbone,
    game,
    mic,
    BaseView
){
    var GameView = BaseView.extend({

        template: game,

        start: function(){
            mic.requireMicrophone().done(function(){
                console.log('.done()');
                this.update();
                
            }.bind(this)).fail(function(){
                console.log('.fail()');
            }); 
        },

        update: function() {
            rafID = requestAnimationFrame( this.update.bind(this) );
            mic.updatePitch();
        },

        rec: function() {
        },

        pause: function() {
        }
    });

    return new GameView({
        mainElement: '.b-game-page'
    });
});
