Ext.define('EunjiClassic.view.main.GridController',{
    extend: 'Ext.app.ViewController',

    alias: 'controller.projectgrid',

    onItemSelected: function(grid, record, index){
        // debugger;
        var title           = record.getData().title;
        var startDate       = record.getData().startDate;
        var endDate         = record.getData().endDate;
        var recordStatus    = record.getData().status;
        console.log(recordStatus);
        var description     = record.getData().description;
        var menuTemplate    = record.getData().menuTemplate;

        // var store = this.getViewModel().get('gridstore');
        var createProjectWindow = Ext.create("createProject",{
            mode: "read",
            record: record
        });

        createProjectWindow.setTitle(title+" Project");
        createProjectWindow.down('textfield[name=title]').setValue(title);
        createProjectWindow.down('datefield[name=startDate]').setValue(startDate);
        createProjectWindow.down('datefield[name=endDate]').setValue(endDate);
        createProjectWindow.down('combobox[name=status]').setValue(recordStatus);
        createProjectWindow.down('combobox[name=menuTemplate]').setValue(menuTemplate);
        createProjectWindow.down('textareafield[name=description]').setValue(description);
        createProjectWindow.show();
    },

    createProjectBtnClick : function(btn){
        // debugger;
        Ext.create("createProject",{
            mode: "create"
        }).show(); // window.js의 alias
    },
});