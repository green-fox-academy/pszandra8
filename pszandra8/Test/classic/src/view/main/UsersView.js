Ext.define('Test.view.main.UsersView', {
  extend: 'Ext.grid.Panel',
  xtype: 'usersView',

  requires: [
      'Test.store.UsersData'
  ],

  title: 'User Information',

  store: {
      type: 'usersData'
  },

  columns: [
      { text: 'Name',  dataIndex: 'name', flex: 1 },
      { text: 'User ID', dataIndex: 'userID', flex: 1 },
      { text: 'Department', dataIndex: 'department', flex: 1 }
  ],

  listeners: {
      select: 'onItemSelected'
  }
});