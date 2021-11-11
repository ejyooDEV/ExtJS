Ext.define('EunjiClassic.view.login.CreateAccount', {
    extend: 'Ext.Panel',
    xtype: 'create-account',
    layout: 'border',
    
    controller: 'create-account',
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
                            reference: 'formCreateAccount',
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
                                    margin: '15 0 0 0',
                                    width: '100%',
                                    html: 'Create an Account',
                                    style: {
                                        'font-size': '22px',
                                        'text-align': 'center'
                                    }
                                },
                                {
                                    xtype: 'component',
                                    reference: 'formRegisterFailure',
                                    margin: '15 0 0 0',
                                    height: 15,
                                    tpl: '<tpl if="errors.length">' +
                                        '<span class="x-fa fa-exclamation-circle" style="color: red;">' +
                                        ' Account Already Exists</span>' +
                                        '</tpl>',
                                    width: '100%',
                                    style: {
                                        'font-size': '18px',
                                        'text-align': 'center',
                                        'letter-spacing': '0.25px',
                                        'font-weight': '500'
                                    },
                                    responsiveConfig: {
                                        'desktop': {
                                            height: 26
                                        }
                                    }
                                },
                                {
                                    xtype: 'textfield',
                                    allowBlank: false,
                                    required: true,
                                    fieldLabel: 'Username',
                                    name: 'Username',
                                    width: '100%',
                                    msgTarget: 'qtip',
                                    margin: "10 0 0 0",
                                    responsiveConfig: {
                                        'desktop': {
                                            msgTarget: 'side'
                                        }
                                    }
                                },
                                {
                                    xtype: 'textfield',
                                    inputType: 'password',
                                    width: '100%',
                                    allowBlank: false,
                                    required: true,
                                    fieldLabel: 'Password',
                                    name: 'Password',
                                    msgTarget: 'qtip',
                                    margin: "10 0 0 0",
                                    responsiveConfig: {
                                        'desktop': {
                                            msgTarget: 'side'
                                        }
                                    }
                                },
                                {
                                    xtype: 'checkbox',
                                    boxLabel: 'I accept the ' +
                                        "<a style='color:var(--base-color);text-decoration: none;' href='#'>Terms</a>",
                                    width: '100%',
                                    bodyAlign: 'left',
                                    name: 'Accept',
                                    margin: '15 0 0 0',
                                    style: {
                                        'font-size': '16px',
                                        'letter-spacing': '1.25px',
                                        'color': 'rgba(17, 17, 17, 0.54)'
                                    }
                                },
                                {
                                    xtype: 'button',
                                    text: 'SIGN UP',
                                    autoSize: true,
                                    handler: 'onRegister',
                                    height: 30,
                                    width: '100%',
                                    margin: '15 0 0 0',
                                    style: {
                                        'text-align': 'center',
                                        'letter-spacing': '1.25px',
                                        'font-size': '14px'
                                    }
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
                            html: 'Already have an account?' +
                            "<a style='font-weight:bold;color:var(--base-foreground-color);text-decoration: none;' href='#login'> Log In</a>",
                            listeners: {
                                render: function(c){
                                    c.getEl().on({
                                        click: 'onLogIn',
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