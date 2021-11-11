/**
 * 작업 필요 사항
 * 1. actioncolumn 삭제 아이콘을 만들어서 사용자 권한에 따라 삭제 아이콘 활성화 비활성화 처리
 * 2. 프로젝트 이동 아이콘을 만들어서 getClass를 사용하여 아이콘 변경 처리 수행
 * 3. 그리드 셀 에디팅 코드 적용
 * 4. 사용하지 않는 컬럼 hideable로 숨김처리
 * 5. 코드 첫 로드 시 비활성화 할 컬럼 hidden처리(bind)
 */
Ext.define('EunjiClassic.view.grid.ProjectGrid', {
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
            iconCls: 'fas fa-info-circle',
            tooltip: 'information',
            handler: 'onInformationIconClick',
            
            bind:{
                disabled: '{cellDisabled}'
            }
        },
        {
            text: 'Title', align: 'left', flex: 2, dataIndex: 'title',
            editor: {
                xtype: 'textfield',
                allowBlank: false,
                completeOnEnter: false
            }
        },
        {
            text: 'StartDate', align: 'center', flex: 1, dataIndex: 'startDate', format: 'Y-m-d',
            xtype:'datecolumn',
            editor: {
                xtype: 'datefield',
                format: 'Y-m-d'
            }
        },
        {
            text: 'Period',
            align: 'center',
            flex: 1,
            dataIndex: 'period',
            renderer: 'getPeriodRender'
        },
        {
            text: 'Status', align: 'center', flex: 1, dataIndex: 'status',
            editor: {
                xtype: 'combobox',
                allowBlank: false,
                completeOnEnter: false,
                store: ['Ongoing', 'Planning', 'Postponed', 'Finished']
            }
        },
        {
            text: 'Description', align: 'left', flex: 1, dataIndex: 'description',
            editor: {
                xtype: 'textareafield',
                allowBlank: false,
                completeOnEnter: false
            }
        },
        { text: 'MenuTemplate', style: 'text-align:center', flex: 1, dataIndex: 'menuTemplate', hidden: true},
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
