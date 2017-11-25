// Creating the Message Specification Object
// All functions in this file are hitting the shearwater api endpoints
function messageSpecification(name, specification) {
  return {
    name,
    specification,
  };
}
// Updating A Message Specification specification by Object's ID
function updateMsg(id) {
  const specification = document.querySelector(`[name="uSpec${id}"]`).value;
  if (specification) {
    fetch(`../messages/update/${id}`, {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `spec=${specification}`,
    }).then(response => response.json()).then((data) => {
      console.log(data);
    });
    window.location.href = '../';
  }
}
// Deleting A Message Specification specification by Object's ID
function DeleteMsg(id) {
  fetch(`../messages/delete/${id}/${id}`, {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: '',
  }).then(response => response.json()).then((data) => {
    console.log(data);
  });
  window.location.href = '../';
}
// Creating a Message Specification with a name and specification
function CreateNewMsg() {
  const name = document.querySelector('[name="cName"]').value;
  const specification = document.querySelector('[name="cSpec"]').value;

  if (!name || !specification) {
    alert('Fill in Both Fields');
  } else {
    fetch('../messages/create/', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `name=${name}&specification=${specification}`,

    }).then(response => response.json()).then((data) => {
      console.log(data);
    });
    window.location.href = '../';
  }
}
