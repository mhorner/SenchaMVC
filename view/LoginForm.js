Ext.define("MH.view.LoginForm", {
    extend: "Ext.form.Panel",
    alias: ["loginForm"],
    config: {
        fullscreen: true
    },

    initialize: function() {
        var me = this;

        me.addFields();
        this.callParent();
    },

    addFields: function() {
        this.add({
            items: {
                xtype: 'fieldset',
                items: [{
                    xtype: 'textfield',
                    name: 'login',
                    label: "Login"
                }, {
                    xtype: 'passwordfield',
                    name: 'password',
                    label: "Password"
                }]
            }
        });
    }
});