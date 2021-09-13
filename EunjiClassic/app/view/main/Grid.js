/**
 * This view is an example list of people.
 */
Ext.define('EunjiClassic.view.main.Grid', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainprojectlistgrid',

    controller: 'projectgrid',
    // requires: [
    //     'EunjiClassic.store.ProjectList' // store define data
    // ],
    
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
        { text: 'Title',  align : 'center', flex : 2, dataIndex: 'title' },
        { text: 'StartDate',  align : 'center', width: 90, dataIndex: 'startDate' },
        { text: 'EndDate',  style : 'text-align:center', width: 90, dataIndex: 'endDate' },
        { text: 'Status',  style : 'text-align:center', flex : 1, dataIndex: 'status' },
        { text: 'Description',  style : 'text-align:center', flex : 1, dataIndex: 'description' },
        { text: 'MenuTemplate',  style : 'text-align:center', flex : 1, dataIndex: 'menuTemplate' },
        { text: 'Manager',  style : 'text-align:center', flex : 1, dataIndex: 'manager' },
        { text: 'Period',  style : 'text-align:center', flex : 1, dataIndex: 'period' },
        { text: 'Issue',  style : 'text-align:center', flex : 1, dataIndex: 'issue' },
    ],

    bbar : {
        xtype : 'pagingtoolbar',
        displayInfo: true
    },

    listeners: {
        select: 'onItemSelected'
    },
    columnLines: true,
    // scrollable: true,
    // autoScroll: true
});
