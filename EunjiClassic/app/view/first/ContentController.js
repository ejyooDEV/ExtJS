Ext.define('EunjiClassic.view.main.ContentController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.content',

    init:function(){ // vm bindData 사용하여 store 로드
        var vm      = this.getViewModel();
        var store   = vm.getStore('gridstore');
        // title
        var initProjectType = vm.get('projectType');
        store.load({
            params: {
                status: initProjectType
            },
        });
    },

    onButtonChange: function (segmentedbutton, button, isPressed, eOpts) { // 버튼 클릭 시 header 변경
        var vm = this.getViewModel();
        var store = vm.getStore('gridstore');
        var btnValue = button.getValue();
        vm.set('projectType', btnValue);
        store.load({
            params: {
                page: 1,
                status: btnValue
            },
        });
    },

    /**
     * 그리드 내 셀 클릭 시 현재 화면에 content 영역을 지우고 새로운 화면으로 이동하도록 설정
     */
    onMainProjectListCellClick: function (grid, td, cellIndex, record, tr, rowIndex, e, eOpts) {
        var appMain = this.getView().up('app-main');
        var view = this.getView();
        if(appMain){
            appMain.remove(view); // mainview에서 해당 프로젝트 아이템이 속한 영역을 삭제할 때(부모에서 자식요소 삭제)
            //특정 xtype의 아이템만 지울 때 : // view.down('projectGridList').removeAll();
            
            appMain.add({
                xtype: 'project-main', 
                region: 'center', 
                record_id: record.data.id, 
                status: record.data.status
            });
            
            Ext.getApplication().redirectTo('project/'+record.id); // url만 변경해줌
            //this.clearMainView().setMainView('EunjiClassic.view.page.'+record.id);
        }else{
            alert('error');
        }
        
    },

    
});