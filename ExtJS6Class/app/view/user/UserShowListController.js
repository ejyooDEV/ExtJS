Ext.define('ExtJS6Class.view.user.UserShowListController',{
  extend:'Ext.app.ViewController',
  alias:'controller.usershowlist',
  onSearch:function(obj,selObj){
    var me = this;
    var searchNickName = this.getViewModel().get('nickName');
    this.getViewModel().getStore('userInfo').load({
      params:{
        searchNickName:searchNickName
      },
      callback:me.onGetUserInfo,
      scope:me
    });
  },
  onGetUserInfo:function(records,operation,success){
    //debugger
    if(success == true){ // response의 success를 직접 가져온 경우 문자열이 아닌 bool형식으로 비교 가능하다.
      Ext.Msg.alert("성공","조회되었습니다.");
    }
    else{
      Ext.Msg.alert("오류",this.getViewModel().getStore('userInfo').getProxy().getReader().rawData.msg);
    }
  },
  onPageMoveUserShow:function(arg1, arg2, arg3, arg4, arg5, obj){
    var menucontroller = ExtJS6Class.app.getController("MemberController");
    menucontroller.movePage('ExtJS6Class.view.user.UserShow','사용자 조회',{userId:obj.data.userId});
  }
});