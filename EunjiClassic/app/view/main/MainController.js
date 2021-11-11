Ext.define('EunjiClassic.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    // onQuickTipManager: function(me){
    //     Ext.tip.QuickTipManager.init();
    //     Ext.tip.QuickTipManager.register({
    //         target: me.getId(), // Target button's ID
    //         //My Tooltip',  // QuickTip Header
    //         text  : 'Go to home.' // Tip content
    //     });
    // },
    // onDestoryQuickTipManager: function(me) {
    //     Ext.tip.QuickTipManager.unregister(me.getId());
    // },
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
     * 홈으로 이동
     */
    onPageChangeHome: function(btn){
        // 가져온 뷰의 아이디가 app-main인지 아닌지
        var appMain = this.getView();
        var subView = this.getView().down('project-main');

        if(subView){
            appMain.remove(subView);
            appMain.add({ xtype: 'content', region: 'center'});
        }else{
            return;
        }

        Ext.getApplication().redirectTo('home');
    },

    onButtonClick: function(btn) {
        var me = this;
        if(btn.getText() == "Logout"){
            Ext.MessageBox.confirm('Confirmation', '로그아웃 하시겠습니까?', confirmFunction);

            function confirmFunction (btn){
                if (btn == 'yes')
                    me.onClickButton();
            }
        }else{
            Ext.toast({
                html: btn.getText(),
                title: 'My Title',
                width: 200,
                align: 't'
            });
        }
    },

});
