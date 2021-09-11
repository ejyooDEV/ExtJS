Ext.define('EunjiClassic.view.main.GridController',{
    extend: 'Ext.app.ViewController',

    alias: 'controller.projectgrid',

    onItemSelected: function(grid, record, index){
        // debugger;
        var store = this.getViewModel().get('gridstore');
        console.log(grid);
        console.log(record);

        var title = record.getData().title;
        var createProjectWindow = Ext.create("createProject")
        createProjectWindow.down('textfield').setValue(title);
        createProjectWindow.show();
        var flag = "modify";
        

        // store.remove(record);
    },

    createProjectBtnClick : function(btn){
        Ext.create("createProject").show(); // window.js의 alias
    },
});