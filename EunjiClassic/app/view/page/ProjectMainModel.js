Ext.define('EunjiClassic.view.page.ProjectMainModel',{
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.project-main',

    data: {item: null},

    stores:{
        testtreestore:{
            type:'treestorelist'
        }
    }
});