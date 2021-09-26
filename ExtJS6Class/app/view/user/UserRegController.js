Ext.define('ExtJS6Class.view.user.UserRegController',{
  extend:'Ext.app.ViewController',
  alias:'controller.userreg',
  onSubmit:function(){
    var form = this.getView().getForm();
    if(form.isValid()){//저장하기전에 유효성검사
      form.submit({
        //params: {json: '{"success": true}', delay: .5},
        success:function(form,action){
          console.log("성공");
          Ext.Msg.alert('Success',action.result.msg);
        },
        failure:function(form,action){
          //debugger;
          console.log("실패");
          Ext.Msg.alert('Failed',action.result.msg);
        }
      });
    }
  },
  onReset:function(){
    var form = this.getView().getForm().reset();
  },
  onShowDuplicate:function(){
    var pop = Ext.create('ExtJS6Class.view.user.UserDuplicate');
    pop.show();
    pop.getController().calledByOther(this);
  },
  callbackPopup:function(param){
    this.lookupReference('userId').setValue(param);
  }
});