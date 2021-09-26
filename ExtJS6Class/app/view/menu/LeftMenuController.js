Ext.define('ExtJS6Class.view.menu.LeftMenuController',{
  extend: 'Ext.app.ViewController',
  alias: 'controller.leftmenu',
  onMenuClick:function(obj,selObj){
    var memberController = ExtJS6Class.app.getController('MemberController');
    memberController.setMainBar(selObj.data.url,selObj.data.name);
  }
});