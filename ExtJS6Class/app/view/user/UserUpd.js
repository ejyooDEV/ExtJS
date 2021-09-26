Ext.define('ExtJS6Class.view.user.UserUpd',{
  extend: 'Ext.form.Panel',
  alias:'widget.userupd',
  requires:['ExtJS6Class.view.user.UserUpdController'],
  controller:'userupd',
  title:'사용자 변경',
  autoDestroy:true,
  closable:true,
  bodyPadding:'5 5 5 5',
  items:[{
    xtype:'fieldset',
    title:'입력하세요',
    padding:'5 5 5 5',
    layout:'hbox',
    items:[{
      xtype:'textfield',
      fieldLabel:'사용자 ID',
      labelAlign:'right',
      bind:'{userId}'
    },{
      xtype:'tbspacer',
      flex:1
    },{
      xtype:'button',
      text:'조회',
      handler:'onSearch'
    }],
  },{
    xtype:'fieldset',
    items:[{
      xtype:'textfield',
      fieldLabel:'닉네임',
      labelAlign:'right',
      allowBlank:false,
      bind:'{nickName}'
    },{
      xtype:'textfield',
      fieldLabel:'패스워드',
      labelAlign:'right',
      allowBlank:false,
      bind:'{password}'
    },{
      xtype:'textfield',
      fieldLabel:'이메일',
      labelAlign:'right',
      allowBlank:false,
      bind:'{email}'
    }],
  }],
  buttons:[{
    text:'변경',
    formBind:true,
    disabled:true,
    handler:'onUpdate'
  }]
});