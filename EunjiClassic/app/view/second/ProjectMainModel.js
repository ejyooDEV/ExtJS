Ext.define('EunjiClassic.view.second.ProjectMainModel',{
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.project-main',

    data: {item: null},

    stores:{
        leftstore:{
            type:'treestorelist',
            proxy:{
                extraParams:{
                    mode: 'left'
                }
            }
        },
        rightstore:{
            type:'treestorelist',
            proxy:{
                extraParams:{
                    mode: 'right'
                }
            }
        }
    }
});