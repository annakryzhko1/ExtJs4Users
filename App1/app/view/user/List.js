Ext.define('AM.view.user.List' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.userlist',
	store: 'Users',
    title: 'All Users',
	dockedItems: [{
    xtype: 'toolbar',
    dock: 'top',
    	items: [
    	    { xtype: 'textfield', name: 'nameFilter', fieldLabel: 'Filter by name'},
        	{ xtype: 'button', text: 'Sort by domen', action: 'sortByDomain' }
    	]
	}],
    initComponent: function() {
        
        this.columns = [
            {header: 'Name',  dataIndex: 'name',  flex: 1},
            {header: 'Email', dataIndex: 'email', flex: 1}
        ];

        this.callParent(arguments);
    }
});