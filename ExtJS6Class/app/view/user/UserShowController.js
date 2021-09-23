Ext.define('ExtJS6Class.view.user.UserShowController',{
  extend:'Ext.app.ViewController',
  alias:'controller.usershow',
  onSearch:function(obj,selObj){
    var me = this;
    var userId = this.lookupReference('userId').getValue();
    Ext.Ajax.request({
      url:'../ServerPage/ShowUser.jsp',
      params:{
        userId:userId
      },
      success:function(res){
        var obj = Ext.JSON.decode(res.responseTest);
        if(obj.success == true){
          me.lookupReference('nickName').setValue(obj.data.nickName);
          me.lookupReference('email').setValue(obj.data.email);
          Ext.Msg.alert("확인","조회완료!!");
        }else{
          Ext.Msg.alert("오류",obj.msg);
        }
      },
      fail:function(res){
        Ext.Msg.alert("오류","시스템 장애입니다.");
      }
    });
  }
});