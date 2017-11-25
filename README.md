# Shearwater-Message-Service
### Demo https://shearwater-microservice.herokuapp.com/
![Shearwater-Message-Service](https://github.com/SMWARREN/Shearwater-Message-Service/blob/master/githubimage.jpg?raw=true)
- Download Node (https://nodejs.org/en/download/)
- Clone this Repo https://github.com/SMWARREN/Shearwater-Message-Service.git
- Run npm install
- Run npm start and the server will be Started. Vist http://localhost:8080 in the Browser.

# Shearwater-Message-Service Explanation

When I saw this Excerise, I immediately thought of a Circular Linked List Data Structure this is because of the second provided example

- MessageSpecification('state', 'Massachusetts');
- MessageSpecification('location', 'Boston, ');
- MessageSpecification('suspensfullocation', '. ');

If we run the first, it should output: "Massachusetts"

If we run the second, it should output: "Boston, Massachusetts"

And if we run the third, it should output: "Massachusetts. Boston, Massachusetts"

This made we think of a cirular linked list because each node needs to know about the previous and the next node. 
For Example the Second Message Specification Boston knows about the Massachusetts Message Specification Node Before it.
The first giveaway for me was I noticed the last specification is a '. ' and then it wraps around again to the head node. I implemented this 
whole project in Node. With a Lot of ES6.
