Ext.define('EunjiClassic.view.second.ProjectMainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.project-main',

    onProjectMain:function(){},
    
    init:function(){
        var me = this;
        var vm = this.getViewModel();

        Ext.Ajax.request({
            url:"https://localhost:5001/projectList/getSampleData",
            method: 'GET', // ajax 통신 시 메소드 꼭 지정
            params:{
                Id: this.getView().record_id,
                Status: this.getView().status
            }, // 보통 Read는 GET 방식으로 처리함. 이렇게 사용하면 서버단에서 string ProjectId로 받을 수 있음.
            //jsonData: {
            //    ProjectId: 'ProjectId'
            //}, // POST방식으로 할 경우 서버단에서 Obj 형식으로 받아야함. (Model 또는 Dictionary Obj로)
            success:function(response){
                var stringData = response.responseText; //string타입 출력
                var jsonData = Ext.decode(stringData); // jsonObj로 변환
                //Ext.decode('{"name":"aaaa"', true) // 디코드 방식은 주로 이 방법으로 사용함.
                var record = Ext.create('EunjiClassic.model.ProjectList', jsonData); // 모델과 함께 사용할 경우 해당 모델의 데이트 상태와 동일하게 레코드를 구성함.
                //jsonData : obj, record : class화

//                 var record = new EunjiClassic.model.ProjectList();//이런식으로 쓸 수 있지만, DateType은 이상하게 적용이 안됨.
//                 record.set(jsonData);

                vm.set('item',record);
//debugger
//                 var startDate = new Date(jsonData.startDate);
//                 var endDate = new Date(jsonData.endDate);
                
//                 me.getViewModel().set('items',jsonData);
                
                
                // me.getView().down('textfield[name=title]').setValue(jsonData.title);
                // me.getView().down('datefield[name=startDate]').setValue(Ext.Date.format(startDate,'Y-m-d'));
                // me.getView().down('datefield[name=endDate]').setValue(Ext.Date.format(endDate,'Y-m-d'));
                // me.getView().down('combobox[name=status]').setValue(jsonData.status);
                // me.getView().down('textfield[name=description]').setValue(jsonData.description);
                // me.getView().down('combobox[name=menuTemplate]').setValue(jsonData.menuTemplate);
            },
            failure : function(){
                console.log('err');
            }
        });
    }
    
});