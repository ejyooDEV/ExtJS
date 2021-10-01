Ext.define('EunjiClassic.view.page.ProjectMainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.project-main',

    
    onProjectMain:function(){
        var me = this;
        var stringData = "";
        var jsonData = "";
        Ext.Ajax.request({
            url:"https://localhost:5001/projectList/getSampleData",
            method: 'GET', // ajax 통신 시 메소드 꼭 지정
            params:{
                Id: this.getView().id,
                Status: this.getView().status
            }, // 보통 Read는 GET 방식으로 처리함. 이렇게 사용하면 서버단에서 string ProjectId로 받을 수 있음.
            //jsonData: {
            //    ProjectId: 'ProjectId'
            //}, // POST방식으로 할 경우 서버단에서 Obj 형식으로 받아야함. (Model 또는 Dictionary Obj로)
            success:function(response){
                stringData = response.responseText; //string타입 출력
                jsonData = Ext.util.JSON.decode(stringData); // jsonObj로 변환

                var startDate = new Date(jsonData.startDate);
                var endDate = new Date(jsonData.endDate);
                me.getView().down('textfield[name=title]').setValue(jsonData.title);
                me.getView().down('datefield[name=startDate]').setValue(Ext.Date.format(startDate,'Y-m-d'));
                me.getView().down('datefield[name=endDate]').setValue(Ext.Date.format(endDate,'Y-m-d'));
                me.getView().down('combobox[name=status]').setValue(jsonData.status);
                me.getView().down('textfield[name=description]').setValue(jsonData.description);
                me.getView().down('combobox[name=menuTemplate]').setValue(jsonData.menuTemplate);
            },
            failure : function(){
                console.log('err');
            }
        });
    }
});