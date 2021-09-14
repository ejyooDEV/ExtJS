Ext.define('EunjiClassic.view.main.WindowController',{
    extend: 'Ext.app.ViewController',

    alias : 'controller.projectWindow',

    onAddClick : function(btn){
        var win     = btn.up('window');
        var form    = win.down('form');
        var store   = this.getViewModel().getStore('gridstore');
        var windowFlag = win.mode;
        var record = win.record;
        if(windowFlag == 'read'){
            debugger;
            record.set(form.getValues());
            debugger;
            record.save();
        }else if(windowFlag == 'create'){
            store.add(form.getValues());
        }else{
            console.log("정의되지 않은 windowFlag");
        }
        win.close();
        
    },

    onCloseClick : function(btn){
        var win     = btn.up('window');
        win.close();
    }
});