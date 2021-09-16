Ext.define('EunjiClassic.view.main.GridController',{
    extend: 'Ext.app.ViewController',

    alias: 'controller.projectgrid',

    onInformationIconClick: function(grid, rowIndex, colIndex){
        var record             = grid.getStore().getAt(rowIndex);
        var title           = record.getData().title;

        var createProjectWindow = Ext.create("createProject",{
            mode: "read",
            record: record
        });
        
        createProjectWindow.setTitle(title+" Project");
        createProjectWindow.down('form').loadRecord(record);
        createProjectWindow.show();
        // debugger;
    },

    createProjectBtnClick : function(btn){
        Ext.create("createProject",{
            mode: "create"
        }).show(); // window.js의 alias
    },

    onEditRow: function(editor, context, e){
        var _record = context.record;
        var _newValues

        if(context.field == 'startDate'){
            console.log("if문");
            _record.set('startDate',Ext.util.Format.date(context.value,'Y-m-d'));
        }
        _record.store.save();
    },

    getPeriodRender: function(value, cell, record, dataIndex, cellIndex, store, gridview){
        // debugger;
        var period = record.data.startDate + "~" + record.data.endDate;
        return period; // 변수는 크게 의미 없음
    }
});