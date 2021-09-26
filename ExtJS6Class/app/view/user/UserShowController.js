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
      timeout: 600000,
      success:function(res){
        var obj = Ext.JSON.decode(res.responseText); // 디코드 이슈로 어쩔수 없이 오브젝트 형식으로 변환한 경우 success 를 문자로 판별해야함.
        //debugger
        if(obj.success == "true"){ // 오브젝트 형식으로 가져온 경우 string으로 조회
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
  },
  calledByOther:function(params){
    var searchSubjectId = this.lookupReference('userId');
    searchSubjectId.setValue(params.userId);
    this.onSearch();
  }
});