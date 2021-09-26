Ext.define('ExtJS6Class.controller.MemberController',{
  extend: 'Ext.app.Controller',
  config:{
    refs:{
      mainBar: 'main tabpanel[name=mainbar]'
    }
  },
  setMainBar:function(url, menuName){
    var mainBar = this.getMainBar();
    var findTitle = false;
    for(i=0; i<mainBar.items.items.length;i++){
      if(menuName == mainBar.getTabBar(i).items.items[i].title){
        mainBar.getLayout().setActiveItem(i);
        findTitle = true;
        break;
      }
    }
    if(findTitle == false){ // 열린것이 없거나 찾지 못했을 때
      var panel = Ext.create(url,{
        autoShow:true,
        autoDestory:true
      });
      mainBar.add(panel);
      mainBar.getLayout().setActiveItem(panel);
    }
  },
  movePage:function(url,menuName,params){
    var mainBar = this.getMainBar();
    var findTitle = false;
    var panel;
    for(i=0; i<mainBar.items.items.length;i++){
      if(menuName == mainBar.getTabBar(i).items.items[i].title){
        mainBar.getLayout().setActiveItem(i);
        panel = mainBar.getLayout().getActiveItem();
        findTitle = true;
        break;
      }
    }
    if(findTitle == false){
      panel = Ext.create(url,{
        autoShow:true,
      });
      mainBar.add(panel);
      mainBar.getLayout().setActiveItem(panel);
    }
    panel.getController().calledByOther(params);
  }
});