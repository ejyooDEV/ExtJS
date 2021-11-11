Ext.define('EunjiClassic.view.second.ProjectContent', {
  extend: 'Ext.panel.Panel',
  xtype: 'project-content',
  controller: 'project-content',
  layout:'border',
  items:[
    {
        xtype:'toolbar',
        region:'north',
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
                        html: '<b>Dashboard</b>',
                        value: 'dashboard',
                        pressed: true
                    },
                    {
                        html: '<b>Issue</b>',
                        value: 'issue'
                    },
                    {
                        html: '<b>Tree</b>',
                        value: 'treemain'
                    },
                ]
            },
        ]
    },
    {
      region:'center',
      xtype:'dashboard',
    }
  ]
});