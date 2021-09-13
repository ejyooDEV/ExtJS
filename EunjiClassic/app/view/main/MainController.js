Ext.define('EunjiClassic.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onButtonAfterrender: function(component) {
        var data = this.getViewModel().get('Ongoing');
        this.getViewModel().getStore('gridstore').add(data);
    },

    onButtonChange: function(component, button, isPressed, eOpts )  {
        // debugger;
        var btn = button.getText();
        var data = this.getViewModel().get(btn);
        var _projectType = this.getViewModel().get('projectType');        
        var _gridstore = this.getViewModel().getStore('gridstore');

        this.getViewModel().set(_projectType,_gridstore.getRange());

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
