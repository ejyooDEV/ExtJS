Ext.define('EunjiClassic.view.login.Login',{
    extend: 'Ext.window.Window',
    xtype: 'login',

    requires: [
        'EunjiClassic.view.login.LoginController',
        'Ext.form.Panel'
    ],

    controller: 'silkroadlogin',
    bodyPadding: 10,
    title: 'Login Window',
    closable: false,
    autoShow: true, // show, hide

    items:{
        xtype: 'form',
        reference: 'form',
        items: [
            {
                xtype: 'textfield',
                name: 'username',
                fieldLabel: 'Username',
                allowBlank: false
            },{
                xtype: 'textfield',
                name: 'password',
                inputType: 'password',
                fieldLabel: 'Password',
                allowBlank: false
            },{
                xtype: 'displayfield',
                hideEmptyLabel: false,
                value: 'Enter any non-blank password'
            }
        ],
        buttons: [{
            text: 'Login',
            formBind: true, // 양식의 유효성 상태에 따라 활성화 비활성화
            listeners: {
                click: 'onLoginClick'
            }
        }]
    }
});