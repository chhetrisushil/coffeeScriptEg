/**
 * Controller for the application
 * @author: chhetrisushil
 * @date: 3/27/13
 * @time: 2:10 PM
 */
(function (window, document, $, APP, Base, undefined) {
    // Package scope Interface
    var ITodoList = new JSgoodies.Interface('ITodoList', ['add', 'update', 'delete']);

    APP.TodoListController = Base.Controller.extend({
        debug: true,
        name: 'APP.TodoListController',
        config: null,

        init: function (config) {
            this.log('initialing the application');
            this.config = $.extend(true, {}, config);
            this.config.model.addObserver('updateComplete', function () {
                console.log('observer to be called after completion of update');
            });
        },
        add: function () {

        },
        update: function () {
            this.config.model.update();
        },
        delete: function () {

        }
    }).implement(ITodoList);
})(this, this.document, jQuery, (this.APP || (this.APP = {})), (this.Base || (this.Base = {})));