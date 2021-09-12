Ext.define('EunjiClassic.view.main.LeftMenu',{
  extend: 'Ext.tree.TreePanel',
  alias: 'widget.leftmenu',
  xtype: 'leftmenu',
  requires: ['EunjiClassic.view.main.LeftMenuController'],
  controller: 'leftmenu',
  width: 200,
  title: '메뉴입니다.',
  rootVisible: false,
  displayField: 'name',
  useArrows: true,

  store: {
    type: 'tree',
    fields: ['name','url'],

    proxy: {
      type: 'ajax',
      url: './resources/data/LeftMenu.json',
      reader: {
        type: 'json',
      }
    },
    autoload: true,
  },

  listeners: {
    itemclick: 'onMenuClick'
  }
});