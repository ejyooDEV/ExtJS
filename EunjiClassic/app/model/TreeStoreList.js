Ext.define('EunjiClassic.model.TreeStoreList', {
    extend: 'EunjiClassic.model.Base',
    
    fields:['name','leaf','parentId'],
    clientIdProperty: 'clientId',
    idProperty: 'id',
    identifier: 'negative',
    // idProperty와 identifier은 스토어 새로고침 시 아이디가 초기화되는 문제가 있음. 
});
