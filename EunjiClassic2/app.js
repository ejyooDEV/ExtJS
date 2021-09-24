/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'EunjiClassic2.Application',

    name: 'EunjiClassic2',

    requires: [
        // This will automatically load all classes in the EunjiClassic2 namespace
        // so that application classes do not need to require each other.
        'EunjiClassic2.*'
    ],

    // The name of the initial view to create.
    mainView: 'EunjiClassic2.view.main.Main'
});
