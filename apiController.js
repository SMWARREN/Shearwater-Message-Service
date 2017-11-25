// Importing The MessagesLinked List Class
const MessagesLinkedList = require('./MessagesLinkedList.js');

// Creating MessageServices Obj to interact with Linked List
const messageServices = new MessagesLinkedList();
// Creates The Message Specification Object
const message = messageServices.messageSpecification;

// Creates the Current State of The Application
let stateValues = {
  data: [],
};

// This Controller List all Messages in the State
exports.list = function (req, res) {
  messageServices.head = null;
  stateValues.data.forEach((item) => {
    messageServices.addMessage(item);
  });

  res.render('index', { state: stateValues,
    message: messageServices.printMessages(messageServices) });
};
// This Controller Updates the State to the Demo Messages
exports.listDemo = function (req, res) {
  stateValues = {
    data: [{
      name: 'state',
      specification: 'Massachusetts',
    }, {
      name: 'location',
      specification: 'Boston, ',
    }, {
      name: 'suspenseful location',
      specification: '. ',
    }],
  };
  res.redirect('../../');
};
// This Controller Creates a Message Specification via Endpoints & Form via
// a MessageSpecification {name, specification}
exports.createMessageSpecification = function (req, res) {
  if (req.body.name && req.body.specification) {
    stateValues.data.push(message(req.body.name, req.body.specification));
    res.json({ message: 'Message Specification Added',
      name: req.body.name,
      specification: req.body.specification,
      stateValues,
    });
  } else {
    res.json({ error: 'Invalid Message' });
    res.end();
  }
};
// This controller deletes a MessageSpecification from the provided
// parameter 'to', to the paramete 'from'.
exports.deleteMessage = function (req, res) {
  const to = req.params.to;
  const from = req.params.from;
  if (stateValues.data.length >= 1) {
    if (to && from) {
      if (stateValues.data.length === 1) {
        stateValues.data = [];
      }

      stateValues.data.splice(to, from);
      res.json({ stateValues });
    } else {
      console.log('no id');
    }
  }
};
// This Controlller Updates the MessageSpecification by the id and Update
// the specification of the Message
exports.updateMessage = function (req, res) {
  const id = req.params.id;
  const spec = req.body.spec;
  const data = stateValues.data[id];
  if (data) {
    stateValues.data[id].specification = spec;
    res.json({ stateValues });
  } else {
    res.json({ stateValues, error: 'Invalid Id Number' });
  }
};
