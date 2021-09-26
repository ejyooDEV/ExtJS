Ext.define('ExtJS6Class.view.user.UserReg',{
  extend:'Ext.form.Panel',
  alias:'widget.userreg',
  requires:[
    'ExtJS6Class.view.user.UserRegController',
    'ExtJS6Class.view.user.UserDuplicate'
  ],
  controller:'userreg',
  closable:true,
  bodyPadding:'5 5 5 5',
  title:'사용자 등록',
  url:"../ServerPage/RegUser.jsp",
  items:[{
    xtype:'fieldset',
    title:'입력하세요',
    layout:{
      type:'table',
      columns:2
    },
    items:[{
      xtype:'textfield',
      fieldLabel:'사용자ID',
      labelAlign:'right',
      allowBlank:false,
      name:'userId',//서버에서 String email = request.getParameter("email"); 가능
      reference:'userId'
    },{
      xtype:'button',
      text:'중복확인',
      handler:'onShowDuplicate'
    },{
      xtype:'textfield',
      fieldLabel:'닉네임',
      labelAlign:'right',
      allowBlank:false,
      name:'nickName',
      colspan:2
    },{
      xtype:'textfield',
      fieldLabel:'패스워드',
      labelAlign:'right',
      allowBlank:false,
      name:'password',
      colspan:2
    },{
      xtype:'textfield',
      fieldLabel:'이메일',
      labelAlign:'right',
      allowBlank:false,
      name:'email',
      colspan:2
    }],
  }],
  buttons:[{
    text:'Reset',
    handler:'onReset'
  },{
    text:'Submit',
    formBind:true,
    disabled:true,
    handler:'onSubmit'
  }]
});