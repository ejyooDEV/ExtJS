Ext.define('EunjiClassic.view.login.Login', {
    extend: 'Ext.Panel',
    xtype: 'login',
    layout: 'border',

    controller: 'silkroadlogin',
    plugins: 'viewport',

    items: [
        {
            region:'north',
            height:'10%'
        },
        {
            region:'center',
            height:'80%',
            layout:'border',
            baseCls:'ejyoo-login-page-background-all',
            items:[
                {
                    region:'west',
                    width:'70%',
                },
                {
                    region:'center',
                    width:'20%',
                    scrollable: 'y',
                    items:[
                        {
                            xtype: 'form',
                            reference: 'formLogin',
                            width: '100%',
                            bodyPadding: 30,
                            items: [
                                {
                                    xtype: 'image',
                                    height: 90,
                                    width: '100%',
                                    margin: '0 0 0 0',
                                    alt: 'ejyoo-logo-image',
                                },
                                {
                                    xtype: 'component',
                                    width: '100%',
                                    height: '27',
                                    margin: '9 0 0 0',
                                    html: 'Login Into Your Account',
                                    style: {
                                        'font-size': '20px',
                                        'text-align': 'center',
                                        'margin': 'auto'
                                    }
                                },
                                {
                                    xtype: 'component',
                                    reference: 'formLoginFailure',
                                    tpl: '<tpl if="errors.length">' + 
                                    '<span class="x-fa fa-exclamation-circle" style="color: red;">' +
                                    ' Login Failure</span>' +
                                    '</tpl>',
                                    height: 26,
                                    width: '100%',
                                    margin: '9 0 0 0',
                                    style: {
                                        'font-size': '20px',
                                        'text-align': 'center',
                                    }
                                },
                                {
                                    xtype: 'textfield',
                                    allowBlank: false,
                                    required: true,
                                    width: '100%',
                                    margin: '25 0 0 0',
                                    fieldLabel: 'Username',
                                    name: 'username',
                                    msgTarget: 'qtip',
                                    responsiveConfig: {
                                        'desktop':{
                                            msgTarget: 'side'
                                        }
                                    }
                                },{
                                    xtype: 'textfield',
                                    allowBlank: false,
                                    required: true,
                                    width: '100%',
                                    fieldLabel: 'Password',
                                    name: 'password',
                                    placeholder: 'password',
                                    msgTarget: 'qtip',
                                    margin: "25 0 0 0",
                                    responsiveConfig: {
                                        'desktop': {
                                            msgTarget: 'side'
                                        }
                                    }
                                    
                                },
                                {
                                    xtype: 'checkbox',
                                    width: '100%',
                                    height: 30,
                                    boxLabel: 'Remember me',
                                    name: 'remember',
                                    margin: "25 0 0 0",
                                    style: {
                                        'font-size': '16px',
                                        'letter-spacing': '1.25px',
                                        'color': 'rgba(17, 17, 17, 0.54)'
                                    }
                                },
                                {
                                    xtype: 'button',
                                    text: 'LOG IN',
                                    autoSize: true,
                                    handler: 'onLoginClick',
                                    height: 30,
                                    width: '100%',
                                    margin: '30 0 0 0',
                                    style: {
                                        'text-align': 'center',
                                        'letter-spacing': '1.25px',
                                        'font-size': '14px'
                                    }
                                },
                                {
                                    xtype: 'component',
                                    html: "<a style='color: var(--base-color);text-decoration: none;' href='#template-reset-password'>Forgot your Password?</a>",
                                    style: {
                                        'font-size': '16px',
                                        'text-align': 'center'
                                    },
                                    width: '100%',
                                    margin: "20 0 0 0"
                                },
                                
                            ],
                        },
                        {
                            xtype: 'component',
                            width:'100%',
                            style: {
                                'font-size': '16px',
                                'text-align': 'center',
                                'color': 'var(--base-foreground-color)',
                                'letter-spacing': '1.25px'
                            },
                            html: 'Don’t have an account?' +
                            "<a style='font-weight:bold;color:var(--base-foreground-color);text-decoration: none;' href='#create-account'> Sign-Up</a>",
                            listeners: {
                                render: function(c){
                                    c.getEl().on({
                                        click: 'onSignUp',
                                    });
                                }
                            }
                        }
                    ]
                },{
                    region:'east',
                    width:'10%',
                    
                }, 
            ]
        },
        {
            region:'south',
            height:'10%'
        }
    ],
});