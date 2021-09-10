/**
 * This view is an example list of people.
 */
Ext.define('EunjiClassic.view.main.Grid', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainprojectlistgrid',

    controller: 'projectgrid',
    requires: [
        'EunjiClassic.store.ProjectList' // store define data
    ],
    
    bind: {
        store: '{gridstore}', // MainModel.js 내 bind data
        title:'{projectType} Project', // MainModel.js 내 bind data
    },

    header : {
        itemPosition : 1,
        items : [{
            xtype : 'button',
            text : 'Create Project',
            handler : 'createProjectBtnClick'
        }]
    },
    
    columns: [
        { text: 'title',  align : 'center', flex : 3, dataIndex: 'title' },
        { text: 'Manager',  align : 'center', flex : 3, dataIndex: 'manager' },
        { text: 'Period',  style : 'text-align:center', flex : 3, dataIndex: 'period' },
        { text: 'Issue',  style : 'text-align:center', flex : 3, dataIndex: 'issue' },
    ],

    bbar : {
        xtype : 'pagingtoolbar',
        displayInfo: true
    },

    listeners: {
        select: 'onItemSelected'
    }
});
