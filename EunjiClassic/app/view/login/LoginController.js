Ext.define('EunjiClassic.view.login.LoginController',{
    extend: 'Ext.app.ViewController',
    alias: 'controller.silkroadlogin',

    onLoginClick: function(){
        localStorage.setItem("TutorialLoggedIn", true); // 자격증명 확인

        this.getView().destroy(); // view 얻은 뒤 파괴

        Ext.widget('app-main'); // 로그인 수행 후 앱 표시
    }
});