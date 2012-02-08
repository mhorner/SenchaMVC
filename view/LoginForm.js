Ext.define("MH.view.LoginForm", {
    extend: "Ext.form.Panel",
    alias: ["loginForm"],
    fullscreen: true,

    initialize: function() {
        var me = this;

        me.addFields();
        this.callParent();
    },

    addFields: function() {
        Ext.apply(this, {
            items: [{
                xtype: 'textfield',
                name: 'login'
            }, {
                xtype: 'passwordfield',
                name: 'password'
            }]
        });
    }
});