Ext.application({
	requires : ['Ext.Panel'],
	name : 'AM',

	appFolder : 'app',

	launch : function() {
		Ext.create('Ext.container.Viewport', {
			layout : 'border',
			items : [{
				region : 'west',
				xtype : 'projectstree',
				autoHeight : true,
				border : true,
				margins : '0 0 5 0'
			}, {
				region : 'center',
				xtype : 'userlist',
				split : true,
				width : 450
			}]
		});
	},

	controllers : ['Users', 'Projects']
}); 