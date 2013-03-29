/**
 * Base.js
 * @description define all the base and utility in this file for the application
 * @author: chhetrisushil
 * @date: 3/27/13
 * @time: 2:16 PM
 */

/**
 * @namespace APP
 * @description creating namespace for the application
 * **Note: It's a must to perform a check for the APP object in every individual files
 */
var APP = {};

// Add a flag to control the debugging on application level
APP.debug = true;

/**
 * @namespace Base
 * @description contains the base classes and methods
 */
var Base = {};

/**
 * @class Base.Util {Singleton}
 * @description contains all the utility methods
 */

Base.Util = {
    debug: true,
    log: function () {
        var console, debug;
        debug = (typeof this.debug === 'undefined') ? Base.Util.debug : this.debug;
        console = window.console;
        APP.debug && debug && console && console.log && console.log.apply && console.log.apply(console, [(this.name || 'APP'), arguments])
    }
};

/**
 * @class Base class for views
 */
Base.View = JSgoodies.Class.extend({
    debug: true,
    name: 'Base.View',

    init: function () {
        this.log('initializing base view');
    },
    log: Base.Util.log
});

/**
 * @class Base class for models
 */
Base.Model = JSgoodies.ObservableClass.extend({
    debug: true,
    name: 'Base.Model',

    init: function () {
        this.log('initializing base model');
    },
    log: Base.Util.log
});

/**
 * @class Base class for controllers
 */
Base.Controller = JSgoodies.Class.extend({
    debug: true,
    name: 'Base.Controller',

    init: function () {
        this.log('initializing base controller');
    },
    log: Base.Util.log
});