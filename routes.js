module.exports = function (app) {
  // import the apiController for the Shearwater MicroService
  const apiController = require('./apiController');

// List All of the MessageSpecification when a user vists '/' and '/messages'
  app.route('/messages').get(apiController.list);
  app.route('/').get(apiController.list);

// When a user does a GET request to '/messages/create/' the user will prefill
// demo Message Specifications.
//
// When a user does a POST Request to '/messages/create/' the user will be able
// to post via the ENDPOINT or by using hte provided form
  app.route('/messages/create/')
  .get(apiController.listDemo)
  .post(apiController.createMessageSpecification);

// When a user does a POST request to '/messages/update/:id' with a specification
// they will update a Message Specification.
//
// When a user does a POST request to '/messages/delete/:to/:from' with the
// 'to' and 'from' parmeters the user will delete the Message Specification
// in between those two points
  app.route('/messages/update/:id').post(apiController.updateMessage);
  app.route('/messages/delete/:to/:from').post(apiController.deleteMessage);
};
