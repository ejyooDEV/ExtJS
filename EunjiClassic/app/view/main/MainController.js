Ext.define('EunjiClassic.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onButtonAfterrender: function(component) {
        var firstButtonText = component.items.items[0].config.text;
        this.getViewModel().set('projectType',firstButtonText);
    },

    onButtonChange: function(component, button, isPressed, eOpts )  {
        var buttonText = button.getText();
        this.getViewModel().set('projectType',buttonText);
    },

    onClickButton: function(btn){
        // debugger;
        localStorage.removeItem('TutorialLoggedIn');
        this.getView().destroy();
        Ext.widget('login');
    },

    ExtWidgetTest: function(btn){
        var createProjectWindow = Ext.create("treewindow");
        createProjectWindow.show();
    } 
});
