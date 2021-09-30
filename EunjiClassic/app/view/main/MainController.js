Ext.define('EunjiClassic.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    /**
     * Login 버튼 클릭 시 로그인 페이지 출력
     * @param {} btn 
     */
    onClickButton: function (btn) {
        localStorage.removeItem('TutorialLoggedIn');
        this.getView().destroy();
        Ext.widget('login');
    },

    /**
     * 트리 윈도우 표시
     * @param {}} btn 
     */
    ExtWidgetTest: function (btn) {
        var createProjectWindow = Ext.create("treewindow");
        createProjectWindow.show();
    },

    /**
     * 그리드 내 셀 클릭 시 현재 화면에 content 영역을 지우고 새로운 화면으로 이동하도록 설정
     * @param {*} grid 
     * @param {*} td 
     * @param {*} cellIndex 
     * @param {*} record 
     * @param {*} tr 
     * @param {*} rowIndex 
     * @param {*} e 
     * @param {*} eOpts 
     */
    onMainProjectListCellClick: function (grid, td, cellIndex, record, tr, rowIndex, e, eOpts) {
        //this.getView().down('projectGridList').removeAll(); //projectGridList내 아이템만 지울 때
        this.getView().remove(this.getView().down('main-content')); // mainview에서 해당 프로젝트 아이템이 속한 영역을 삭제할 때(부모에서 자식요소 삭제)
        this.getView().add({ xtype: 'project-main', region: 'center' });

        //Ext.getApplication().redirectTo('project/'+record.id); // url만 변경해줌
        //this.clearMainView().setMainView('EunjiClassic.view.page.'+record.id);
    },

});
