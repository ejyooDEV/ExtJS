Ext.define('EunjiClassic.model.TreeStoreList', {
    extend: 'EunjiClassic.model.Base',
    
    fields:['id','name','leaf','parentId'],
    //idProperty: 'id',
    //identifier: 'sequential',
    // idProperty와 identifier은 스토어 새로고침 시 아이디가 초기화되는 문제가 있음. 
});
