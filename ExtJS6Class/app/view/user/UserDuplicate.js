Ext.define('ExtJS6Class.view.user.UserDuplicate',{
  extend:'Ext.window.Window',
  alias:'widget.userduplicate',
  requires:[
    'ExtJS6Class.view.user.UserDuplicateController'
  ],
  controller:'userduplicate',
  title:'사용자 중복조회',
  bodyPadding:'5 5 5 5',
  closable:true,
  width:400,
  height:200,
  items:[{
    xtype:'fieldset',
    layout:'hbox',
    padding:'5 5 5 5',
    items:[{
      xtype:'textfield',
      name:'userId',
      fieldLabel:'사용자ID',
      labelAlign:'right',
      reference:'userId',
    },{
      xtype:'tbspacer',
      flex:1
    },{
      xtype:'button',
      text:'중복조회',
      handler:'onSearch',
    }],
  },{
    xtype:'button',
    text:'사용자ID 반환',
    handler:'onReturn'
  }],
});