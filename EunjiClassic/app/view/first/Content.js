Ext.define('EunjiClassic.view.main.Content', {
    extend: 'Ext.panel.Panel',
    xtype: 'content',
    controller: 'content',
    layout: 'border',
    items: [
        {
            xtype: 'toolbar',
            region: 'north',
            cls: 'ejyoo-toolbar-padding',
            items: [
                {
                    xtype: 'segmentedbutton',
                    listeners: {
                        toggle: 'onButtonChange',
                    },
                    cls:'ejyoo-segmentic-button-basic ejyoo-segmentic-button-over .ejyoo-segmentic-button-press',
                    items: [
                        {
                            html: '<b>Ongoing</b>',
                            value: 'Ongoing',
                            pressed: true
                        },
                        {
                            html: '<b>Planning</b>',
                            value: 'Planning'
                        },
                        {
                            html: '<b>Postponed</b>',
                            value: 'Postponed'
                        },
                        {
                            html: '<b>Finished</b>',
                            value: 'Finished'
                        }
                    ]
                },
            ]
        }, {
            xtype: 'mainprojectlistgrid',
            region: 'center',
            border: true,
            width:'30%',
            height:'70%',
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
            width:'30%'
        }, {
            xtype: 'panel',
            region: 'south',
            border: true,
            layout: 'border',
            height:'30%',
            items: [
                {
                    xtype: 'panel',
                    region: 'west',
                    border: true,
                    width:'70%',
                    title: 'board'
                }, {
                    xtype: 'panel',
                    region: 'center',
                    border: true,
                    width:'30%',
                    title: 'Notice',
                }
            ]
        }
    ]
});