Ext.define("MH.application.Controller", {
    extend: "Ext.app.Controller",

    config: {
        refs: {
            loginForm: 'loginFormPanel'
        },
        routes: {
            'login': 'showLogin'
        }
    },

    showLogin: function() {
        Ext.getBody().add({
            xtype: 'loginPanel'
        })
    }
});