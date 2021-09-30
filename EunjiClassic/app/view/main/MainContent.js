Ext.define('EunjiClassic.view.main.MainContent', {
    extend: 'Ext.panel.Panel',
    xtype: 'main-content',
    controller: 'main-content',
    layout: 'border',
    items: [
        {
            xtype: 'toolbar',
            region: 'north',
            items: [
                {

                    xtype: 'segmentedbutton',

                    listeners: {
                        toggle: 'onButtonChange',
                        afterrender: 'onButtonAfterrender'
                    },
                    items: [
                        {
                            text: 'Ongoing',
                            pressed: true
                        },
                        {
                            text: 'Planning'
                        },
                        {
                            text: 'Postponed'
                        },
                        {
                            text: 'Finished'
                        }
                    ]
                },
            ]
        }, {
            xtype: 'mainprojectlistgrid',
            region: 'center',
            border: true,
            flex: 4,
            listeners: {
                // rowdbclick: 'onItemdbClick',
                // edit: 'onEditRow',
                cellclick: 'onMainProjectListCellClick'
            }
        }, {
            xtype: 'panel',
            region: 'east',
            border: true,
            title: 'To-do List',
            flex: 2,
        }, {
            xtype: 'panel',
            region: 'south',
            border: true,
            layout: 'border',
            flex: 1,
            items: [
                {
                    xtype: 'panel',
                    region: 'west',
                    border: true,
                    flex: 2,
                    title: 'board'
                }, {
                    xtype: 'panel',
                    region: 'center',
                    border: true,
                    flex: 1,
                    title: 'Notice',
                }
            ]
        }
    ]
});