/**
 * @filename: TodoListModel.js
 * @author: chhetrisushil
 * @date: 3/27/13
 * @time: 2:40 PM
 */
(function (window, document, $, APP, Base, undefined) {
    // Collection
    APP.TodoListCollection = JSgoodies.Class({
        models: null,
        model: null,
        data: null,
        config: {},

        init: function (config) {
            this.models = [];
            // As we know objects are notorious and are copy by reference clone the config object so that it becomes instance config
            $.extend(true, this.config, {}, config);
            this.model = this.config.model;
            this.data = this.config.data;
            this.convertDataToModel();
        },
        convertDataToModel: function () {
            for (var i = 0, len = this.data.length, item; i < len; i++) {
                item = this.data[i];
                if (Base.Util.isObject(item) && item.constructor === this.model) {
                    this.models.push(item);
                } else {
                    this.models.push(new this.model(item));
                }
            }
        },
        update: function (obj) {
            this.fireObserver('updateComplete', this);
        }
    })._extends(JSgoodies.ObservableClass);

    var ITodoList = new JSgoodies.Interface('ITodoList', ['set: [Object]', 'get: [String]', 'update: [Object]', 'delete: [String]']);
    APP.TodoListModel = JSgoodies.Class({
        debug: true,
        name: 'APP.TodoListModel',
        config: {
            defaults: {
                task: '',
                status: '',
                priority: '',
                tag: ''
            }
        },
        val: null,

        init: function (data) {
            this.log('initializing Model', this.config);
            this.set(data);

        },
        set: function (obj) {
            this.val = $.extend(true, {}, obj);
        },
        get: function (propName) {
            return this.val[propName];
        },
        update: function (obj) {
            this.fireObserver('updateComplete');
        },
        delete: function (str) {

        }
    })._extends(Base.Model)._implements(ITodoList);
})(this, this.document, jQuery, (this.APP || (this.APP = {})), (this.Base || (this.Base = {})));
