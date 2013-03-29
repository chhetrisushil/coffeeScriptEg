/**
 * @filename: TodoListModel.js
 * @author: chhetrisushil
 * @date: 3/27/13
 * @time: 2:40 PM
 */
(function (window, document, $, APP, Base, undefined) {
    var ITodoList = new JSgoodies.Interface('ITodoList', ['add', 'update', 'delete']);
    APP.TodoListModel = Base.Model.extend({
        debug: true,
        name: 'APP.TodoListModel',
        config: null,

        init: function (config) {
            this._super();
            // As we know objects are notorious and are copy by reference clone the config object so that it becomes instance config
            this.config = $.extend(true, {}, config);
            this.log('initializing Model', this.config);
        },
        add: function () {

        },
        update: function () {
            this.fireObserver('updateComplete');
        },
        delete: function () {

        }
    }).implement(ITodoList);
})(this, this.document, jQuery, (this.APP || (this.APP = {})), (this.Base || (this.Base = {})));
