Ext.Loader.setConfig({
    paths: {
        'MH' : '',
        'MH.application': 'controller'
    },
    disableCaching: false
});

Ext.application({
    name: 'TwitterExample',
    requires: ["Ext.TabPanel"],
    views: ['MH.view.LoginForm'],
    controllers: ['MH.application.Controller'],

    launch: function() {
//        Ext.create('MH.view.LoginForm');

//        Ext.Viewport.add({
//            items: {
//                xtype: 'loginPanel'
//            }
//        });
//        Ext.onReady(function() {

        var loginForm = Ext.create('MH.view.LoginForm');

        Ext.create("Ext.TabPanel", {
            fullscreen: true,
            items: [{
                title: "Test",
                iconCls: 'home',
                items: [loginForm]
            }]
        })
//        });
    }
});