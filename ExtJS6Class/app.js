/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'ExtJS6Class.Application',

    name: 'ExtJS6Class',

    requires: [
        // This will automatically load all classes in the ExtJS6Class namespace
        // so that application classes do not need to require each other.
        'ExtJS6Class.*'
    ],

    // The name of the initial view to create.
    mainView: 'ExtJS6Class.view.main.classTest.ClassSingleton'
});
