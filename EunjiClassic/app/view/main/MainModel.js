Ext.define('EunjiClassic.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        name: 'EunjiClassic',

        loremIpsum: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',

        projectType: 'Ongoing', // 초기 TITLE 세팅 용
        Ongoing: [
            { title:'ongoing1', startDate: '2021-09-13', endDate: '2021-09-14', status: "Ongoing", description: "DescriptionData", menuTemplate: "SILKROAD Template", manager: "managerData", period: "periodData", issue: "issueData" },
            { title:'ongoing2', startDate: '2021-09-13', endDate: '2021-09-14', status: "Ongoing", description: "DescriptionData", menuTemplate: "SILKROAD Template", manager: "managerData", period: "periodData", issue: "issueData" },
            { title:'ongoing3', startDate: '2021-09-13', endDate: '2021-09-14', status: "Ongoing", description: "DescriptionData", menuTemplate: "SILKROAD Template", manager: "managerData", period: "periodData", issue: "issueData" },
        ],
        Planning: [
            { title:'planning1', startDate: '2021-09-13', endDate: '2021-09-14', status: "Planning", description: "DescriptionData", menuTemplate: "SILKROAD Template", manager: "managerData", period: "periodData", issue: "issueData" },
            { title:'planning1', startDate: '2021-09-13', endDate: '2021-09-14', status: "Planning", description: "DescriptionData", menuTemplate: "SILKROAD Template", manager: "managerData", period: "periodData", issue: "issueData" },
            { title:'planning1', startDate: '2021-09-13', endDate: '2021-09-14', status: "Planning", description: "DescriptionData", menuTemplate: "SILKROAD Template", manager: "managerData", period: "periodData", issue: "issueData" },

        ],
        Postponed: [
            { title:'postponed1', startDate: '2021-09-13', endDate: '2021-09-14', status: "Postponed", description: "DescriptionData", menuTemplate: "SILKROAD Template", manager: "managerData", period: "periodData", issue: "issueData" },
            { title:'postponed2', startDate: '2021-09-13', endDate: '2021-09-14', status: "Postponed", description: "DescriptionData", menuTemplate: "SILKROAD Template", manager: "managerData", period: "periodData", issue: "issueData" },
            { title:'postponed3', startDate: '2021-09-13', endDate: '2021-09-14', status: "Postponed", description: "DescriptionData", menuTemplate: "SILKROAD Template", manager: "managerData", period: "periodData", issue: "issueData" },
        ],
        Finished: [
            { title:'finished1', startDate: '2021-09-13', endDate: '2021-09-14', status: "Finished", description: "DescriptionData", menuTemplate: "SILKROAD Template", manager: "managerData", period: "periodData", issue: "issueData" },
            { title:'finished2', startDate: '2021-09-13', endDate: '2021-09-14', status: "Finished", description: "DescriptionData", menuTemplate: "SILKROAD Template", manager: "managerData", period: "periodData", issue: "issueData" },
            { title:'finished3', startDate: '2021-09-13', endDate: '2021-09-14', status: "Finished", description: "DescriptionData", menuTemplate: "SILKROAD Template", manager: "managerData", period: "periodData", issue: "issueData" },
        ]
    
    },

    stores: {
        gridstore: {
            // type:'project' //store : ProjectList.js 의 alias 
        }
    }
});
