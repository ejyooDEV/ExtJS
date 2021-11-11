Ext.define('EunjiClassic.view.login.CreateAccountController',{
  extend: 'Ext.app.ViewController',
  alias: 'controller.create-account',


  onRegister: function() {
    var me = this,
        errorCmp = me.lookup('formRegisterFailure'),
        fields,
        form = me.getView().down('form'); //'Ext.form.Basic'을 자동으로 연결해주는 Ext.form.Panel
        //form = me.lookup('formCreateAccount').getForm(), //'Ext.form.Basic' ==> .getRecord()를 할 수 없음. DOCS에서도 Ext.form.Panel사용을 권장함.
        errors = [],
        data = {
            errors: errors
        };
        
    if (form.isValid()) { // 폼의 유효성 검사를 할 수 있음. 단 View 에서 allowBlank 가 false에서 적용가능.
        // form.getRecord() // 이것은 Model을 사용하여 가져온 경우에 사용할 수 있음.
        var formValues = form.getValues(); // 모델에 넣은 폼데이터가 아닌 폼 자체의 values를 가져올 때 사용.
        Ext.Ajax.request({
            url: 'https://localhost:5001/user/createUser',
            method: 'POST',
            jsonData: { // method: 'POST'일 땐 jsonData를 보통 사용함.
                userInfo: formValues
            },
            success: function(response){
                var stringData = response.responseText;
                var obj = JSON.parse(stringData);

                if(obj.result) {
                    Ext.Msg.alert('Registration Successful', 'You have successfully registered!', function(){
                        me.getView().destroy();
                        Ext.widget('login');
                    });
                } else {
                    Ext.Msg.alert('Registration Failed', '회원가입이 실패하였습니다.!');
                }  
            },
            failure: function(){
                Ext.Msg.alert('Registration Failed', '회원가입이 실패하였습니다.!');
            }
        });
    }
    else {
        Ext.Msg.alert('Registration Failure', 'Please check for form errors and retry.');
        fields = form.getFields();

        fields.each(function(field) {
            var error;

            if (!field.validate() && (error = field.getErrors())) {
                errors.push({
                    errors: error,
                    name: field.getFieldLabel()
                });
            }
        });
    }

    if (errorCmp) {
        errorCmp.setData(data);
    }
  },

  onLogIn: function(){
    this.getView().destroy(); // view 얻은 뒤 파괴
    Ext.widget('login'); // 로그인 수행 후 앱 표시
  }
});