/**
 * Controller for the application
 * @author: chhetrisushil
 * @date: 3/27/13
 * @time: 2:10 PM
 */
(function (window, document, $, APP, Base, undefined) {
    // Package scope Interface
    var ITodoList = new JSgoodies.Interface('ITodoList', ['add', 'update', 'delete']);

    APP.TodoListController = JSgoodies.Class({
        debug: true,
        name: 'APP.TodoListController',
        config: null,

        init: function (config) {
            var _self = this;
            this.log('initialing the application');
            this.config = $.extend(true, {}, config);
            this.config.collection.addObserver('updateComplete', function (collection) {
                console.log('observer to be called after completion of update', collection.models);
                _self.config.view.render(collection.models);
            });
        },
        add: function () {

        },
        update: function () {
            this.config.collection.update();
        },
        delete: function () {

        }
    })._extends(Base.Controller)._implements(ITodoList);
})(this, this.document, jQuery, (this.APP || (this.APP = {})), (this.Base || (this.Base = {})));