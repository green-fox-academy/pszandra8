Ext.define('Test.store.UsersData', {
  extend: 'Ext.data.Store',

  alias: 'store.usersData',

  model: 'Test.model.Users',

  data: { items: [
      { name: 'John Doe', userID: "johnDoe", department: 'HR' },
      { name: 'Mike',     userID: "Miky", department: 'IT' },
      { name: 'Loren',   userID: "Loreenn8", department: 'CS' },
      { name: 'Kate',     userID: "KateMate", department: 'IT' },
      { name: 'Luc',     userID: "Lux", department: 'Sales' },
  ]},

  proxy: {
      type: 'memory',
      reader: {
          type: 'json',
          rootProperty: 'items'
      }
  }
});
