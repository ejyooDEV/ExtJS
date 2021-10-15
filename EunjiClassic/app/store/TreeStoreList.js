Ext.define('EunjiClassic.store.TreeStoreList',{
    extend:'Ext.data.TreeStore', 
    alias:'store.treestorelist',

    model: 'EunjiClassic.model.TreeStoreList',
    autoload:true,
    proxy:{
        type:'ajax',
        actionMethod:{
            create:'POST',
            read: 'GET',
            update: 'POST',
            destory: 'POST'
        },
        api:{
            create:"https://localhost:5001/projectTreeList/setTreeNode",
            read: "https://localhost:5001/projectTreeList/getTreeNodeAll",
            update: "https://localhost:5001/projectTreeList/modifyTreeNode",
            destory: "https://localhost:5001/projectTreeList/removeTreeNode",
        },
        //url:'./resources/data/LeftMenu.json',
        // reader:{
        //     type:'json',
        // },
        writer:{
            //type: 'json',
            clientIdProperty: 'clientId'
        },
        timeout: 60* 1000 * 60
    },  
});