Ext.define('EunjiClassic.view.grid.GridController',{
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
        var _record = context.record;
        var store   = this.getViewModel().getStore('gridstore');

        if(context.field == 'startDate'){
            console.log("if문");
            _record.set('startDate',Ext.util.Format.date(context.value,'Y-m-d'));
        }
        _record.store.save();
        store.reload();
    },

    getPeriodRender: function(value, cell, record, dataIndex, cellIndex, store, gridview){ // period 수정
        var recordData = record.data;
        var period = Ext.util.Format.date(recordData.startDate,'Y-m-d') + "~" + Ext.util.Format.date(recordData.endDate,'Y-m-d');
        return period; // 변수는 크게 의미 없음
    },

    // Ext.getApplication().redirectTo 일때 routes 사용
    // routes : {
    //     'project/:id':'onProject'
    // },
    
    // onProject : function(recordId){
    //     //EunjiClassic.view.page.ProjectList-1
    //     debugger;
    //     console.log('ttt'+recordId);
    // }

    
    // refreshButton:function(pagingtoolbar,page){
    //     debugger;
    // }

    // onButtonChange: function(segmentedbutton, button, isPressed, eOpts )  { // 버튼 클릭 시 title 변경
    //     alert("User toggled the '" + button.getText() + "' button: " +
    //         (isPressed ? 'on' : 'off')); 
});