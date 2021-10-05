Ext.define('EunjiClassic.store.TreeStoreList',{
    extend:'Ext.data.TreeStore', 
    alias:'store.treestorelist',
    
    fields:['name','url'],
    proxy:{
        type:'ajax',
        url:'./resources/data/LeftMenu.json',
        reader:{
            type:'json',
            rootProperty:'children'
        }
    },
    autoload:true
});