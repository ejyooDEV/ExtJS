Ext.define('EunjiClassic.view.second.ProjectMainModel',{
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.project-main',

    data: {
        segmentedButtonStatus:'dashboard',
        item:[]
    },

    // stores:{
    //     leftstore:{
    //         type:'treestorelist',
    //         proxy:{
    //             extraParams:{
    //                 mode: 'left'
    //             }
    //         }
    //     },
    //     rightstore:{
    //         type:'treestorelist',
    //         proxy:{
    //             extraParams:{
    //                 mode: 'right'
    //             }
    //         }
    //     }
    // }
});