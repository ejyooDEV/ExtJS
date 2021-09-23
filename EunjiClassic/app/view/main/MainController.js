Ext.define('EunjiClassic.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onButtonAfterrender: function(segmentedbutton) { // segmentedbutton 로드 후 title 변경 및 grid store filter 적용
        //store.clearFilter();
        var vm = this.getViewModel();
        var store = vm.getStore('gridstore');
        // title
        var firstButtonText = segmentedbutton.items.items[0].config.text;
        this.getViewModel().set('projectType',firstButtonText);
        store.load({
            params: {
                status: firstButtonText
            },
            scope: this
        });
        // grid change
        //this.getViewModel().getStore('gridstore').filter('status',firstButtonText);
    },

    onButtonChange: function(segmentedbutton, button, isPressed, eOpts )  { // 버튼 클릭 시 title 변경
        var vm = this.getViewModel(); 

        var store = vm.getStore('gridstore');
        var buttonText = button.getText();
        store.clearFilter(); // id 중첩으로 인하여 해당 작업 필요(정확치는 않음)
        
        vm.set('projectType',buttonText);// title change
        //store.filter('status',buttonText);
        store.load({
            params: {
                status: buttonText
            },
            //callback: function(records, operation, success) { },
            scope: this
        });
    },

    onClickButton: function(btn){ // 로그인 아이콘 클릭 시 로그인 페이지 출력
        localStorage.removeItem('TutorialLoggedIn');
        this.getView().destroy();
        Ext.widget('login');
    },

    ExtWidgetTest: function(btn){ // 트리 윈도우 표시
        var createProjectWindow = Ext.create("treewindow");
        createProjectWindow.show();
    }

});
