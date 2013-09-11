Ext.define('AM.view.project.Tree', {
	extend : 'Ext.tree.Panel',
	alias : 'widget.projectstree',
	title : 'Core Team Projects',
	width : 500,
	height : 300,
	renderTo : Ext.getBody(),
	collapsible : true,
	useArrows : true,
	rootVisible : false,
	store : 'Projects',
	multiSelect : true,
	singleExpand : true,
	//the 'columns' property is now 'headers'
	columns : [{
		xtype : 'treecolumn', //this is so we know which column will show the tree
		text : 'Task',
		flex : 2,
		sortable : true,
		dataIndex : 'task'
	}, {
		//we must use the templateheader component so we can use a custom tpl
		xtype : 'templatecolumn',
		text : 'Duration',
		flex : 1,
		sortable : true,
		dataIndex : 'duration',
		align : 'center',
		//add in the custom tpl for the rows
		tpl : Ext.create('Ext.XTemplate', '{duration:this.formatHours}', {
			formatHours : function(v) {
				if (v < 1) {
					return Math.round(v * 60) + ' mins';
				} else if (Math.floor(v) !== v) {
					var min = v - Math.floor(v);
					return Math.floor(v) + 'h ' + Math.round(min * 60) + 'm';
				} else {
					return v + ' hour' + (v === 1 ? '' : 's');
				}
			}
		})
	}, {
		text : 'Assigned To',
		flex : 1,
		dataIndex : 'user',
		sortable : true
	}]
}); 