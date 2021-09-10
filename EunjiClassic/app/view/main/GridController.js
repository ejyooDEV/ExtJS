Ext.define('EunjiClassic.view.main.GridController',{
    extend: 'Ext.app.ViewController',

    alias: 'controller.projectgrid',

    onItemSelected: function(grid, record, index){
        var store = this.getViewModel().get('gridstore');
        store.remove(record);
    },

    createProjectBtnClick : function(btn){
        Ext.create("createProject").show(); // window.js의 alias
    },
});