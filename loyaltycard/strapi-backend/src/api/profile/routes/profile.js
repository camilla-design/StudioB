module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/profiles/:id/add-stamp',
      handler: 'profile.addStamp',
      config: {
        auth: true
      }
    }
  ]
};