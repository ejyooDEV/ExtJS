Ext.define('EunjiClassic.view.main.ContentController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.content',

    /**
     * MainContent 내 segmentedbutton 버튼이 로드될 시 bindData 변경 및 store 로드
     * @param {} segmentedbutton 
     */
    onButtonAfterrender: function (segmentedbutton) {
        var vm = this.getViewModel();
        var store = vm.getStore('gridstore');
        // title
        var firstButtonText = segmentedbutton.items.items[0].config.text;
        vm.set('projectType', firstButtonText);
        store.load({
            params: {
                status: firstButtonText
            },
            scope: this
        });

        // 스토어 필터링
        //this.getViewModel().getStore('gridstore').filter('status',firstButtonText); // 스토어 자체에서 필터를 적용할 수 있음.
        //store.clearFilter();
    },

    /**
     * MainContent 내 segmentedbutton 버튼 클릭 시 vm title 변경 및 및 store 로드
     * @param {*} segmentedbutton 
     * @param {*} button 버튼 ele
     * @param {*} isPressed 눌린상태 boolean
     * @param {*} eOpts 
     */
    onButtonChange: function (segmentedbutton, button, isPressed, eOpts) { // 버튼 클릭 시 title 변경
        var vm = this.getViewModel();

        var store = vm.getStore('gridstore');
        var buttonText = button.getText();

        vm.set('projectType', buttonText);// title change
        store.load({
            params: {
                page: 1,
                status: buttonText
            },
            //callback: function(records, operation, success) { },
            scope: this
        });
    },

    /**
     * 그리드 내 셀 클릭 시 현재 화면에 content 영역을 지우고 새로운 화면으로 이동하도록 설정
     */
     onMainProjectListCellClick: function (grid, td, cellIndex, record, tr, rowIndex, e, eOpts) {
        var appMain = this.getView().up('app-main');
        
        //this.getView().down('projectGridList').removeAll(); //projectGridList내 아이템만 지울 때
        appMain.remove(this.getView()); // mainview에서 해당 프로젝트 아이템이 속한 영역을 삭제할 때(부모에서 자식요소 삭제)

        appMain.add({ xtype: 'project-main', region: 'center', record_id: record.data.id, status: record.data.status});
        
        //Ext.getApplication().redirectTo('project/'+record.id); // url만 변경해줌
        //this.clearMainView().setMainView('EunjiClassic.view.page.'+record.id);
    },

    
});