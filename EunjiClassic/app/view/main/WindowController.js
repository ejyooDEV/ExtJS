Ext.define('EunjiClassic.view.main.WindowController',{
    extend: 'Ext.app.ViewController',

    alias : 'controller.projectWindow',

    onAddClick : function(btn){
        var win     = btn.up('window');
        var form    = win.down('form');
        var store   = this.getViewModel().getStore('gridstore');

        store.add(form.getValues());
        btn.up('window').close();
    },

    onCloseClick : function(btn){
        btn.up('window').close();
    }
});