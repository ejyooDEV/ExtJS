Ext.define('EunjiClassic.view.second.tree.TreeMain',{
  extend:'Ext.panel.Panel',
  xtype:'treemain',

  controller:'treemain',
  viewModel: 'treemain',

  layout:'border',
  items:[
    {
      xtype:'tree-lefttree',
      region:'center',
      border: true,
      flex:1
    },
    {
      xtype:'tree-righttree',
      region:'east',
      border: true,
      flex:1
    }
  ]
});