/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'EunjiClassic.Application',

    name: 'EunjiClassic',
    
    requires: [
        // This will automatically load all classes in the EunjiClassic namespace
        // so that application classes do not need to require each other.
        'EunjiClassic.*'
    ],

    // The name of the initial view to create.
    // mainView: 'EunjiClassic.view.main.Main'
});
