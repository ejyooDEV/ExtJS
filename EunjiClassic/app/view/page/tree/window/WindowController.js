Ext.define('EunjiClassic.view.page.tree.window.WindowController',{
    extend: 'Ext.app.ViewController',
    alias:'controller.nodewindow',

    onAddClick: function(btn){
        var form = btn.up('window').down('form');
        //console.log(form);

        debugger;
        //this.getViewModel().get('treestore').$className
        /**
         * Ext.create("createnode").show();
        var treeModel = this.getView().getSelectionModel();
        var node = treeModel.getLastSelected();
        node.appendChild({
            leaf:true,
            name: 'New Child'
        });
        node.expand();
        node.commit();
         * 
         */
    },
    onCloseClick:function(btn){
        var win = btn.up('window');
        win.close();
    }
});