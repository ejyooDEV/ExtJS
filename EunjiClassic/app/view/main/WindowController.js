Ext.define('EunjiClassic.view.main.WindowController',{
    extend: 'Ext.app.ViewController',

    alias : 'controller.projectWindow',

    onAddClick : function(btn){
        // debugger
        var win     = btn.up('window');
        var form    = win.down('form');
        var store   = this.getViewModel().getStore('gridstore');
        var windowFlag = win.mode;
        // var recordStatus = win.record.getData().status;

        if(windowFlag == 'read'){
            win.record.set('title',form.getValues().title);
            win.record.set('startDate',form.getValues().startDate);
            win.record.set('endDate',form.getValues().endDate);
            win.record.set('status',form.getValues().status);
            win.record.set('description',form.getValues().description);
            win.record.set('menuTemplate',form.getValues().menuTemplate);
        }else if(windowFlag == 'create'){
            store.add(form.getValues());
        }else{
            console.log("정의되지 않은 windowFlag");
        }
        win.close();
    },

    onCloseClick : function(btn){
        win.close();
    }
});