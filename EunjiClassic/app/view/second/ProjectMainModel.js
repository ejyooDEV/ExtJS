Ext.define('EunjiClassic.view.second.ProjectMainModel',{
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.project-main',

    data: {item: null},

    stores:{
        leftstore:{
            type:'treestorelist',
        },
        rightstore:{
            type:'treestorelist'
        }
    }
});