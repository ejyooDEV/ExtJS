/**
 * This view is an example list of people.
 */
Ext.define('EunjiClassic2.view.grid.ProjectList', {
    extend: 'Ext.grid.Panel',
    xtype: 'projectlist',

    bind: {
        store: '{projectListGridStore}',
        title: '{projectType} Project',
    },

    title: 'ProjectList',

    

    columns: [
        { text: 'Name',  dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone', flex: 1 }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
