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
    	this.sorters = { 
    		byDomain: new Ext.util.Sorter({
        		sorterFn: function(o1, o2) {
	            var domain1 = o1.get('email').split('@')[1],
	            	domain2 = o2.get('email').split('@')[1]
	            if (domain1 === domain2) {
	                return 0;
	            }	
	            return domain1 < domain2 ? -1 : 1;
        	}
    	})
    	};
    	
        this.control({
            'userlist': {
                itemdblclick: this.editUser
            },            
            'useredit button[action=save]': {
                click: this.updateUser
            },            
            'useredit button[action=delete]': {
                click: this.deleteUser
            },
            'userlist textfield[name=nameFilter]': {
                change: this.filterByName
            },
            'userlist button[action=sortByDomain]': {
                click: this.sortByDomain
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
	},
	
	filterByName: function(textfield, newValue, oldValue, eOpts ) {
		var store = this.getUsersStore();
		store.clearFilter(true);
		store.filter("name", new RegExp(newValue, "i"));	
	},
	
	sortByDomain: function(button, e, eOpts) {
		var sorter = this.sorters['byDomain'],
		 	dir = sorter.direction; 
		sorter.setDirection((dir=='ASC') ? 'DESC': 'ASC')
		this.getUsersStore().sort(sorter);		
	}
    
});