Ext.define('EunjiClassic.store.TreeStoreList',{
    extend:'Ext.data.TreeStore', 
    alias:'store.treestorelist',

    model: 'EunjiClassic.model.TreeStoreList',
    autoload:false,
    proxy:{
        type:'ajax',
        actionMethod:{
            create:'POST',
            read: 'GET',
            update: 'POST',
            destory: 'POST'
        },
        api:{
            create:"https://localhost:5001/projectTreeList/createTreeNode",
            read: "https://localhost:5001/projectTreeList/readAllTreeNode",
            update: "https://localhost:5001/projectTreeList/updateTreeNode",
            destroy: "https://localhost:5001/projectTreeList/destroyTreeNode",
        },
        //url:'./resources/data/LeftMenu.json',
        // reader:{
        //     type:'json',
        // },
        writer:{
            //type: 'json',
            clientIdProperty: 'clientId'
        },
        timeout: 60* 1000 * 60,

        
    },  
    
});