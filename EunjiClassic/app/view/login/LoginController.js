Ext.define('EunjiClassic.view.login.LoginController',{
    extend: 'Ext.app.ViewController',
    alias: 'controller.silkroadlogin',

    // 로그인 버튼 클릭 시 로그인 처리
    onLoginClick: function(){
        var me = this,
            errorCmp = me.lookupReference('formLoginFailure'),
            fields,
            form = me.lookupReference('formLogin').getForm(),
            errors = [],
            data = {
                errors: errors
            };
        var view = this.getView();

        if (form.isValid()) { // 폼 유효성 검사
            var formValues = form.getValues();

            Ext.Ajax.request({
                url: 'https://localhost:5001/user/loginUser',
                method: 'POST',
                jsonData: {
                    userInfo: formValues
                },
                success: function(response){
                    var stringData = response.responseText;
                    var obj = JSON.parse(stringData);

                    if(obj.result == 0){
                        Ext.Msg.alert('Login Success', 'You have been logged in!', function(){
                            localStorage.setItem("TutorialLoggedIn", true); // 자격증명 확인
                            view.destroy(); // view 얻은 뒤 파괴
                            Ext.widget('app-main'); // 로그인 수행 후 앱 표시
                        });
                    } else {
                        Ext.Msg.alert('Registration Failed', obj.errorMsg);
                    }
                },
                failure: function(){
                    Ext.Msg.alert('Login Success', '회원가입이 실패하였습니다.!');
                }
            });
        }
        else {
            Ext.Msg.alert('Login Failure', 'The username/password provided is invalid.');
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
    onSignUp: function(){
        this.getView().destroy(); // view 얻은 뒤 파괴
        Ext.widget('create-account'); // 로그인 수행 후 앱 표시
    }
});