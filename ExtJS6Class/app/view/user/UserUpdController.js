Ext.define('ExtJS6Class.view.user.UserUpdController',{
  extend:'Ext.app.ViewController',
  alias:'controller.userupd',
  onSearch:function(){
    var me = this;
    var userId = this.getViewModel().get('userId');
    Ext.Ajax.request({
      url:'../ServerPage/ShowUser.jsp',
      params:{
        userId:userId
      },
      success:function(res){
        var obj = Ext.JSON.decode(res.responseText);
        if(obj.success == "true"){
          me.getViewModel().set('userId',obj.data.userId);
          me.getViewModel().set('nickName',obj.data.nickName);
          me.getViewModel().set('password',obj.data.password);
          me.getViewModel().set('email',obj.data.email);
          Ext.Msg.alert("확인","조회완료!!");
        }
        else{
          Ext.Msg.alert("오류",obj.msg);
        }
      },
      fail:function(res){
        Ext.Msg.alert("오류",res.data.err);
      }
    });
  },
  onUpdate:function(){
    var me = this;
    var userId = this.getViewModel().get('userId');
    var password = this.getViewModel().get('password');
    var nickName = this.getViewModel().get('nickName');
    var email = this.getViewModel().get('email');

    Ext.Ajax.request({
      url:'../ServerPage/UpdUser.jsp',
      params:{
        userId:userId,
        password:password,
        nickName:nickName,
        email:email
      },
      success:function(res){
        var obj = Ext.JSON.decode(res.responseText);
        if(obj.success == true){
          me.getViewModel().set('nickName','');
          me.getViewModel().set('password','');
          me.getViewModel().set('email','');
          Ext.Msg.alert("확인","변경하였습니다.");
        }
        else{
          Ext.Msg.alert("오류",obj.msg);
        }
      },
      fail:function(res){
        console.log('오류');
        Ext.Msg.alert("오류",res.data.err);
      }
    });
  }
});