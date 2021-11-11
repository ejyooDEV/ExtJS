Ext.define('EunjiClassic.view.window.Window', {
    extend: 'Ext.window.Window',
    alias: 'createProject',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'EunjiClassic.view.window.WindowController'
    ],

    controller: 'projectWindow',
    viewModel: {
        data: {
            mode:"create",
        },
        formulas: {
            windowStatus: function(get){
                return get('mode') == "create";
            }
        }
    },
    width: 800,
    title: 'New Project',
    draggable: true,
    modal: true,
    items: [
        {
            xtype: 'form',
            height:450,
            defaults:{
                margin: '12 50 12 50',
                anchor: '100%',
                allowBlank:false,
                msgTarget: 'under', // 메시지 위치
                blankText: 'This field is required' // allowBlank 지키지 않았을 때.
                //invalidText: '"{0}" bad. "{1}" good.' // {0} : 작성 문장, {1} : 필요한 형식 표시
                //invalidCls: cssID // x-form-invalid-field CSS class added to its HTML element.
                //vtype: typename // Ext.form.field.VTypes 사용하여 유효성 검증
            },
            items: [
                {
                    xtype: 'textfield',
                    name: 'title',
                    fieldLabel: 'Title',
                }, {
                    xtype: 'datefield',
                    name: 'startDate',
                    fieldLabel: 'StartDate',
                    submitFormat: 'Y-m-d',
                    format: 'Y-m-d',
                    value: new Date()  // defaults to today
                }, {
                    xtype: 'datefield',
                    name: 'endDate',
                    fieldLabel: 'EndDate',
                    format: 'Y-m-d',
                    value: new Date()  // defaults to today
                }, {
                    xtype: 'combobox',
                    store: ['Ongoing', 'Planning', 'Postponed', 'Finished'],
                    name: 'status',
                    value: 'Ongoing',
                    editable: false,
                    fieldLabel: 'Status'
                }, {
                    xtype: 'textareafield',
                    grow: true,
                    name: 'description',
                    fieldLabel: 'Description',
                }, {
                    xtype: 'combobox',
                    store: ['SILKROAD Template', 'DOOSAN'],
                    displayField: 'MenuTemplate',
                    name: 'menuTemplate',
                    value: 'SILKROAD Template',
                    editable: false,
                    fieldLabel: 'MenuTemplate'
                }, 
            ]
        }],
        buttons:[{
            text:'OK',
            handler:'onAddClick',
            formBind:true
        },{
            text:'Close',
            handler:'onCloseClick',
        },{
            text:'Delete',
            handler:'onDeleteClick',
            formBind:true,
            bind: {
                hidden: '{windowStatus}'
            }
        }]

});
