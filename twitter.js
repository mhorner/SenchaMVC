Ext.Loader.setConfig({
    paths: {
        'MH' : '',
        'MH.application': 'controller'
    },
    disableCaching: true
});

Ext.application({
    name: 'TwitterExample',
    requires: ["Ext.TabPanel"],
    views: ['MH.view.LoginForm'],
    controllers: ['MH.application.Controller'],

    launch: function() {
        Ext.create('MH.view.LoginForm');
    }
});