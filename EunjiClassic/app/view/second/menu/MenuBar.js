/**
 * This example shows how to give your tab bar a custom look and feel typical of
 * app navigation.
 */
 Ext.define('EunjiClassic.view.second.menu.MenuBar', {
  extend: 'Ext.Panel',
  xtype: 'second-menutoolbar',
  tbar: [{
      xtype:'splitbutton',
      text: 'Menu Button',
      iconCls: 'add16',
      menu: [{text: 'Menu Button 1'}]
  },'-',{
      xtype:'splitbutton',
      text: 'Cut',
      iconCls: 'add16',
      menu: [{text: 'Cut Menu Item'}]
  },{
      text: 'Copy',
      iconCls: 'add16'
  },{
      text: 'Paste',
      iconCls: 'add16',
      menu: [{text: 'Paste Menu Item'}]
  },'-',{
      text: 'Format',
      iconCls: 'add16'
  }]
});