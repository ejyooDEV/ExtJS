Ext.define('ExtJS6Class.view.user.UserShow',{
  extend:'Ext.panel.Panel',
  alias:'widget.usershow',
  requires:[
    'ExtJS6Class.view.user.UserShowController'
  ],
  controller:'usershow',
  title:'사용자 조회',
  bodyPadding:'5 5 5 5',
  closable:true,
  items:[{
    xtype:'fieldset',
    layout:'hbox',
    padding:'5 5 5 5',
    items:[{
      xtype:'textfield',
      name:'userId',
      fieldLabel:'사용자 ID',
      labelAlign:'right',
      reference:'userId',
    },{
      xtype:'tbspacer',
      flex:1
    },{
      xtype:'button',
      text:'조회',
      handler:'onSearch',
    }],
  },{
    xtype:'fieldset',
    padding:'5 5 5 5',
    items:[{
      xtype:'textfield',
      fieldLabel:'닉네임',
      labelAlign:'right',
      reference:'nickName',
      name:'nickName'
    },{
      xtype:'textfield',
      fieldLabel:'이메일',
      labelAlign:'right',
      reference:'email',
      name:'email'
    }]
  }],
});