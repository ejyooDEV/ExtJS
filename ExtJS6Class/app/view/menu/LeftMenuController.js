Ext.define('ExtJS6Class.view.menu.LeftMenuController',{
  extend: 'Ext.app.ViewController',
  alias: 'controller.leftmenu',
  onMenuClick:function(obj,selObj){
    Ext.Msg.alert("선택",selObj.data.url);
  }
});