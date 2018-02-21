# Django + Angular (Assessment of practical skills)
* Heroku link: https://pvtmessanger.herokuapp.com/home
* Firebase link: https://privatemessenger-b821c.firebaseapp.com/home
for trying : username: wasfi
             password: wasfi12345

Our task is to write a reusable Django app that can handle private messages between Users

### Minimum requirements for intern junior developers

* User should be allowed to have different Conversations with another User
* User should be allowed to archive a Conversation
* User should be allowed to delete a Conversation
* User should NOT be allowed to send a Message to themselves
* Conversations should be sorted based on when a conversation was last modified
* You can only use one DB join in order to retrieve the counterpart in a Conversation
* An Inbox list item should contain
  * an image from the counterpart ie not the sender
  * a preview of the last message that was sent in the conversation
  * a timestamp of when the actual message was sent
* A Message list should contain individual Message instances that consists of
  * The message
  * The timestamp of the message

### Requirements for jr. developers

* An Inbox list of Conversations must return an appropriate response from the backend in less than 250 milliseconds with or without pagination
* A list of Messages in a Conversation must return an appropriate response from the backend in less than 250 milliseconds with or without pagination
* User should be able to attach a file in a Message
* User should be able to attach an image in a Message
* Deployment of working solution on a server

### Requirements for senior developers

* The server must be able to handle 1 000 users at any given time
* Use a caching solution that appropriately invalidates and updates the cache to serve a response in less than 100 milliseconds

### What we will look at when we grade Your code
* Use of best practices
* Readability
* Code structure & rational thought process
* Modularity, Reusability & DRY Code
* Ability to turn a specification into working API
* Appropriate categorization of code into Models, Serializers, Managers, URLs, Views

# Angular

Our task is to write an Angular app with great UI/UX that allow Users to delightfully communicate with their friends

### What we will look at when we grade Your code
* Use of best practices
* Readability
* Code structure & rational thought process
* Modularity, Reusability & DRY Code
* Ability to turn a specification into a working User Experience
* Appropriate categorization of code into Directives, Controllers, Filters, Services, Routes and Templates

### What we will look at when we grade Your submission
* Use of well designed and commonly understood UX/UI patterns that encourages interaction
* Use of well designed UI components and animations that delights the User
