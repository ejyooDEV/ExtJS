Ext.define('EunjiClassic.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        name: 'EunjiClassic',

        loremIpsum: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',

        projectType: 'Ongoing', // 초기 TITLE 세팅 용
        cellDisabled: false
    },

    stores: {
        gridstore: {
            // xtype: 'store',
            type: 'projectlist' //store : ProjectList.js 의 alias 
        }
    }
});
