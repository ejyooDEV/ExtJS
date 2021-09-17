Ext.define('EunjiClassic.view.main.GridController',{
    extend: 'Ext.app.ViewController',

    alias: 'controller.projectgrid',

    onInformationIconClick: function(grid, rowIndex, colIndex){ // 정보아이콘 클릭했을 때
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

    createProjectBtnClick : function(btn){ // createProject 클릭했을 때
        Ext.create("createProject",{
            mode: "create"
        }).show(); // window.js의 alias
    },

    onEditRow: function(editor, context, e){ // 더블클릭 시 수정
        debugger;
        var _record = context.record;

        if(context.field == 'startDate'){
            console.log("if문");
            _record.set('startDate',Ext.util.Format.date(context.value,'Y-m-d'));
        }
        _record.store.save();
    },

    getPeriodRender: function(value, cell, record, dataIndex, cellIndex, store, gridview){ // period 수정
        // debugger;
        var period = record.data.startDate + "~" + record.data.endDate;
        return period; // 변수는 크게 의미 없음
    }
});