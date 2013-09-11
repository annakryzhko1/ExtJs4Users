Ext.define('AM.store.Projects', {
    extend: 'Ext.data.TreeStore',
    model: 'AM.model.Project',
    autoLoad: true,
	folderSort: false,
    proxy: {
        type: 'ajax',
        url: 'data/projects.json'      	
    	
    }
});