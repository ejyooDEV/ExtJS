Ext.define('EunjiClassic.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        name: 'EunjiClassic',

        loremIpsum: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',

        projectType: 'Ongoing',

        ongoing: [
            { title: 'ongoing', manager: "jeanluc.picard", period: "1111", issue: "Jean" },
            { title: 'ongoing', manager: "worf.moghsson",  period: "2222", issue: "Worf" },
            { title: 'ongoing', manager: "deanna.troi",    period: "3333", issue: "Deanna" },
            { title: 'ongoing', manager: "mr.data",        period: "4444", issue: "Data" },
        ],
        planning: [
            { title: 'planning', manager: "jeanluc.picard", period: "1111", issue: "Jean" },
            { title: 'planning', manager: "worf.moghsson",  period: "2222", issue: "Worf" },
            { title: 'planning', manager: "deanna.troi",    period: "3333", issue: "Deanna" },
            { title: 'planning', manager: "mr.data",        period: "4444", issue: "Data" },
        ],
        postponed: [
            { title: 'postponed', manager: "jeanluc.picard", period: "1111", issue: "Jean" },
            { title: 'postponed', manager: "worf.moghsson",  period: "2222", issue: "Worf" },
            { title: 'postponed', manager: "deanna.troi",    period: "3333", issue: "Deanna" },
            { title: 'postponed', manager: "mr.data",        period: "4444", issue: "Data" },
        ],
        finished: [
            { title: 'finished', manager: "jeanluc.picard", period: "1111", issue: "Jean" },
            { title: 'finished', manager: "worf.moghsson",  period: "2222", issue: "Worf" },
            { title: 'finished', manager: "deanna.troi",    period: "3333", issue: "Deanna" },
            { title: 'finished', manager: "mr.data",        period: "4444", issue: "Data" },
        ]
    
    },

    stores: {
        gridstore: {
            type:'project' //store : ProjectList.js 의 alias
        }
    }
});
