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

});
