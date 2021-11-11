Ext.define('EunjiClassic.view.second.tree.TreeMainModel',{
  extend:'Ext.app.ViewModel',
  alias: 'viewmodel.treemain',

  data:{item:null},

  stores:{
    leftstore:{
      type:'treestorelist',
      proxy:{
        extraParams:{
          mode:'left'
        }
      }
    },
    rightstore:{
      type:'treestorelist',
      proxy:{
        extraParams:{
          mode:'right'
        }
      }
    }
  }
});