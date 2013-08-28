Ext.define('AM.controller.Users', {
    extend: 'Ext.app.Controller',
	
	stores: [
        'Users'
    ],
    
    models: [
    	'User'
    ],
    
    views: [
        'user.List',
        'user.Edit'
    ],
    
    init: function() {
        this.control({
            'userlist': {
                itemdblclick: this.editUser
            },            
            'useredit button[action=save]': {
                click: this.updateUser
            },            
            'useredit button[action=delete]': {
                click: this.deleteUser
            }
        });
    },

    editUser: function(grid, record) {
         var view = Ext.widget('useredit');

        view.down('form').loadRecord(record);
    },
    
    updateUser: function(button) {
	    var win    = button.up('window'),
	        form   = win.down('form'),
	        record = form.getRecord(),
	        values = form.getValues();
	
	    record.set(values);
	    win.close();
	    this.getUsersStore().sync();
	},
	
	
    deleteUser: function(button) {
	    var win    = button.up('window'),
	        form   = win.down('form'),
	        record = form.getRecord();
	
	    this.getUsersStore(record);
	    
	    win.close();
	    
	    this.getUsersStore().sync();
	}
    
});