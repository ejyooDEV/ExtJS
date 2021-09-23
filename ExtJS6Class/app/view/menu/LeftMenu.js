Ext.define('ExtJS6Class.view.menu.LeftMenu',{
  extend:'Ext.tree.TreePanel',
  alias:'widget.leftmenu',
  requires:['ExtJS6Class.view.menu.LeftMenuController'],
  controller:'leftmenu',
  width:200,
  title:'메뉴입니다.',
  rootVisible:false,
  displayField:'name',
  useArrows:true,
  store:{
    type:'tree',
    fields:['name','url'],
    proxy:{
      type:'ajax',
      url:'./resources/data/LeftMenu.json',
      reader:{
        type:'json',
        rootProperty: 'children'
      }
    },
    autoload:true,
  },
  root: {
    text: 'Root',
    id: 'data',
    expanded: true
  },
  folderSort: true,

  sorters: [{
      property: 'text',
      direction: 'ASC'
  }],
  listeners:{
    itemclick:'onMenuClick'
  }
});