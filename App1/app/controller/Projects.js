Ext.define('AM.controller.Projects', {
	extend : 'Ext.app.Controller',

	stores : ['Projects'],

	models : ['Project'],

	views : ['project.Tree'],

	init : function() {
		

		this.control({
			/*'userlist' : {
				itemdblclick : this.editUser
			},
			'useredit button[action=save]' : {
				click : this.updateUser
			},
			'useredit button[action=delete]' : {
				click : this.deleteUser
			},
			'userlist textfield[name=nameFilter]' : {
				change : this.filterByName
			},
			'userlist button[action=sortByDomain]' : {
				click : this.sortByDomain
			}*/
		});
	}
}); 