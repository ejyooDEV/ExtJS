/**
 * This view is an example list of people.
 */
Ext.define('EunjiClassic.view.grid.Grid', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainprojectlistgrid',

    controller: 'projectgrid',

    bind: {
        store: '{gridstore}', // MainModel.js 내 bind data
        title: '{projectType} Project', // MainModel.js 내 bind data
    },

    header: {
        itemPosition: 1,
        items: [{
            xtype: 'button',
            text: 'Create Project',
            handler: 'createProjectBtnClick'
        }]
    },
    columns: [
        {
            xtype: 'actioncolumn',
            width: 25,
            items: [{
                iconCls: 'fas fa-info-circle',
                tooltip: 'information',
                handler: 'onInformationIconClick'
            }]
        },
        {
            text: 'Title', align: 'center', flex: 2, dataIndex: 'title',
            editor: {
                xtype: 'textfield',
                allowBlank: false,
                completeOnEnter: false
            }
        },
        {
            text: 'StartDate', align: 'center', flex: 2, dataIndex: 'startDate', format: 'Y-m-d',
            xtype:'datecolumn',
            editor: {
                xtype: 'datefield',
                format: 'Y-m-d'
            }
        },
        {
            text: 'Period',
            style: 'text-align:center',
            flex: 1,
            dataIndex: 'period',
            renderer: 'getPeriodRender'
        },
        {
            text: 'Status', style: 'text-align:center', flex: 1, dataIndex: 'status',
            editor: {
                xtype: 'combobox',
                allowBlank: false,
                completeOnEnter: false,
                store: ['Ongoing', 'Planning', 'Postponed', 'Finished']
            }
        },
        {
            text: 'Description', style: 'text-align:center', flex: 1, dataIndex: 'description',
            editor: {
                xtype: 'textareafield',
                allowBlank: false,
                completeOnEnter: false
            }
        },
        { text: 'MenuTemplate', style: 'text-align:center', flex: 1, dataIndex: 'menuTemplate', hidden: true },
        { text: 'Manager', style: 'text-align:center', flex: 1, dataIndex: 'manager', hidden: true },
        { text: 'Issue', style: 'text-align:center', flex: 1, dataIndex: 'issue', hidden: true },
    ],

    bbar: [
        '->',
        {
            xtype: 'pagingtoolbar',
            displayInfo: true,
            displayMsg: 'Displaying ProjectList {0} - {1} of {2}',
            emptyMsg: "No topics to display",
            bind: {
                store: '{gridstore}', // MainModel.js 내 bind data
            },

            // moveFirst: function(btn){
            //     this.getStore().currentPage = 1;
            // },
            // moveNext: function (btn) {
            //     debugger;
            //     this.getStore().currentPage++;
            //     store.reload();
            // },
            // movePrevious: function (btn) {
            //     this.getStore().currentPage--;
            // },
            // moveLast: function (btn) {
            // },
            // doRefresh: function (btn) {
            //     this.getStore().currentPage = 1;
            // }
            
            // listeners: {
            //     beforechange: 'refreshButton'
            // },
        },
        '->'
    ],

    
    columnLines: true,

    plugins: {
        ptype: 'cellediting',
        clicksToEdit: 2
    },
    selModel: 'cellmodel',
});
