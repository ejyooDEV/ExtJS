function dateFormat(date){
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    month = month >= 10 ? month : '0' + month;
    day = day >= 10 ? day : '0' + day;
    hour = hour >= 10 ? hour : '0' + hour;
    minute = minute >= 10 ? minute : '0' + minute;
    second = second >= 10 ? second : '0' + second;

    return date.getFullYear() + '-' + month + '-' + day; 
 }

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
        var _newValues = context.value; // json 객체

        // _record.set(_newValues);
        // _record.data.startDate = Ext.util.Format.date(_newValues,'Y-m-d');
        _record.save();
    },

    getPeriodRender: function(value, cell, record, dataIndex, cellIndex, store, gridview){
        // debugger;
        var period = record.data.startDate + "~" + record.data.endDate;
        return period; // 변수는 크게 의미 없음
    }
});