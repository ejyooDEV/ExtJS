Ext.define('EunjiClassic.view.main.WindowController',{
    extend: 'Ext.app.ViewController',

    alias : 'controller.projectWindow',

    onFormAfterrender: function(component,eOpts) {
        component.getValues().status = "Ongoing"; // 안됨 ㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠ
    },
    onAddClick : function(btn){
        var form    = btn.up('window').down('form');
        var formValues = form.getValues();
        var store   = this.getViewModel().getStore('gridstore');
        var windowFlag = btn.up('window').mode;
        
        if(windowFlag == 'read'){ // 수정
            var record = btn.up('window').record;
            record.set(form.getValues());
            
            store.save({
                success: function(response){
                    Ext.Msg.alert('Success', "입력한 데이터가 저장되었습니다.");
                },
                failure: function(response){
                    Ext.Msg.alert('Failed', "데이터 저장이 실패하였습니다.");
                }
            });
        }else if(windowFlag == 'create'){ // 생성
            //debugger;
            store.add(form.getValues());
            
            store.save({
                //params:formValues, // form Data를 직접 params에 넣어줄 수 있음 : QueryString
                success: function(response){
                    Ext.Msg.alert('Success', "입력한 데이터가 저장되었습니다.");
                },
                failure: function(response){
                    Ext.Msg.alert('Failed', "데이터 저장이 실패하였습니다.");
                }
            });
        }else{
            Ext.Msg.alert('Failed', "정의되지 않은 작업입니다.");
        }
        btn.up('window').close();
        
    },

    onCloseClick : function(btn){
        var win     = btn.up('window');
        win.close();
    },

    onDeleteClick : function(btn){
        var store = this.getViewModel().getStore('gridstore');
        var record = btn.up('window').record;

        store.remove(record);
        store.save({
            success: function(response){
                Ext.Msg.alert('Success', "삭제되었습니다.");
            },
            failure: function(response){
                Ext.Msg.alert('Failed', "삭제가 실패하였습니다.");
            }
        })
    }
});