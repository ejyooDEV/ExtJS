Ext.define('EunjiClassic.view.main.TreeWindow', {
    extend: 'Ext.window.Window',
    // xtype: 'treewindow',
    alias:'treewindow',

    width: 800,
    height: 500,
    title: 'Tree Test',
    draggable: true,
    items: [
        {
            xtype: 'leftmenu',
            width: 200,
            collapsible: true
            
        }]
});
