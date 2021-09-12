Ext.define('EunjiClassic.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onButtonChange: function(component, button, isPressed, eOpts )  {
        // debugger;
        var btn = button.getText();
        var data = this.getViewModel().get(btn.toLowerCase());

        this.getViewModel().set('projectType',btn);
        this.getViewModel().getStore('gridstore').removeAll();
        this.getViewModel().getStore('gridstore').add(data);
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
