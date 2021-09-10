/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('EunjiClassic.Application', {
    extend: 'Ext.app.Application',

    name: 'EunjiClassic',

    views: [
        'EunjiClassic.view.main.Login',
        'EunjiClassic.view.main.Main'
    ],

    launch: function() {
        var loggedIn;

        loggedIn = localStorage.getItem("TutorialLoggedIn"); // LoginController localStorage

        Ext.widget(loggedIn ? 'app-main' : 'login');
    }

    // quickTips: false,
    // platformConfig: {
    //     desktop: {
    //         quickTips: true
    //     }
    // },

    // onAppUpdate: function () {
    //     Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
    //         function (choice) {
    //             if (choice === 'yes') {
    //                 window.location.reload();
    //             }
    //         }
    //     );
    // }
});
