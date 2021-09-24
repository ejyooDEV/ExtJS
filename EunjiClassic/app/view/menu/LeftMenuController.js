Ext.define('EunjiClassic.view.main.LeftMenuController',{
  extend: 'Ext.app.ViewController',
  alias: 'controller.leftmenu',
  onMenuClick: function(obj,selObj){
    Ext.Msg.alert("선택", selObj.data.url);
  }
});