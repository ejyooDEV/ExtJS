Ext.define('EunjiClassic.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onButtonAfterrender: function(component) { // 처음 메인 로드 시 title 적용
        var firstButtonText = component.items.items[0].config.text;
        this.getViewModel().set('projectType',firstButtonText);
    },

    gridAfterRender: function(component){// 그리드 로드 시 적용
        console.log("gridAfterRender 진입");
    },

    onButtonChange: function(component, button, isPressed, eOpts )  { // 버튼 클릭 시 title 변경
        var buttonText = button.getText();
        this.getViewModel().set('projectType',buttonText);
    },

    onClickButton: function(btn){ // 로그인 아이콘 클릭 시 로그인 페이지 출력
        // debugger;
        localStorage.removeItem('TutorialLoggedIn');
        this.getView().destroy();
        Ext.widget('login');
    },

    ExtWidgetTest: function(btn){ // 트리 윈도우 표시
        var createProjectWindow = Ext.create("treewindow"
        );
        createProjectWindow.show();
    } 
});
