Ext.define('EunjiClassic.view.main.GridController',{
    extend: 'Ext.app.ViewController',

    alias: 'controller.projectgrid',
    // onItemdbClick: function(grid, record, element, rowIndex, e, eOpts){
    //     // debugger;
    //     var title           = record.getData().title;
    //     var startDate       = record.getData().startDate;
    //     var endDate         = record.getData().endDate;
    //     var recordStatus    = record.getData().status;
    //     var description     = record.getData().description;
    //     var menuTemplate    = record.getData().menuTemplate;

    //     var createProjectWindow = Ext.create("createProject",{
    //         mode: "read",
    //         record: record
    //     });

    //     createProjectWindow.setTitle(title+" Project");
    //     createProjectWindow.down('textfield[name=title]').setValue(title);
    //     createProjectWindow.down('datefield[name=startDate]').setValue(startDate);
    //     createProjectWindow.down('datefield[name=endDate]').setValue(endDate);
    //     createProjectWindow.down('combobox[name=status]').setValue(recordStatus);
    //     createProjectWindow.down('combobox[name=menuTemplate]').setValue(menuTemplate);
    //     createProjectWindow.down('textareafield[name=description]').setValue(description);
    //     createProjectWindow.show();
    // },

    onInformationIconClick: function(grid, rowIndex, colIndex){
        var rec             = grid.getStore().getAt(rowIndex);
        var title           = rec.getData().title;
        var startDate       = rec.getData().startDate;
        var endDate         = rec.getData().endDate;
        var recordStatus    = rec.getData().status;
        var description     = rec.getData().description;
        var menuTemplate    = rec.getData().menuTemplate;

        var createProjectWindow = Ext.create("createProject",{
            mode: "read",
            record: rec
        });

        createProjectWindow.setTitle(title+" Project");
        createProjectWindow.down('textfield[name=title]').setValue(title);
        createProjectWindow.down('datefield[name=startDate]').setValue(startDate);
        createProjectWindow.down('datefield[name=endDate]').setValue(endDate);
        createProjectWindow.down('combobox[name=status]').setValue(recordStatus);
        createProjectWindow.down('combobox[name=menuTemplate]').setValue(menuTemplate);
        createProjectWindow.down('textareafield[name=description]').setValue(description);
        createProjectWindow.show();

        alert("Information " + rec.get('title'));
    },

    createProjectBtnClick : function(btn){
        // debugger;
        Ext.create("createProject",{
            mode: "create"
        }).show(); // window.js의 alias
    },

    onEditRow: function(editor, context, e){
        var _projectType = this.getViewModel().get('projectType');
        var _colIdx = context.colIdx;

        var modelData = this.getViewModel().get(_projectType)[_colIdx-1];
        console.log(modelData);
        
        console.log("contextNewValueTitle : " + context.newValues.title);
        console.log("modelDataTitle(Before) : " + modelData.title);
        modelData.title = context.newValues.title;
        console.log("modelDataTitle(After) : " + modelData.title);
    }
});