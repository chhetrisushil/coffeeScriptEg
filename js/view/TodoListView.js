/**
 * @filename: TodoListView.js
 * @author: chhetrisushil
 * @date: 3/27/13
 * @time: 2:41 PM
 */
(function (window, document, $, APP, Base ,undefined) {
    APP.TodoListView = Base.View.extend({
        debug: true,
        name: 'APP.TodoListView',

        init: function () {
            this.log('initializing view');
        }
    });
})(this, this.document, jQuery, (this.APP || (this.APP = {})), (this.Base || (this.Base = {})));