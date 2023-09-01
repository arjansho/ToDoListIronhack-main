TO DO LIST 01.09.2023 Arjan Hoxha
Introduction

This document will outline the requirements of your next project. You’re going to build a simple To-do app with Vue.js that allows users to create an account, record tasks, edit them and mark them as complete. The app will be linked to a database, where all the user and task data will be stored. The database that we’ll use for this project is Supabase. We’ll also be using Vite as a build tool to compile our code and provide a development server while we work.

In the following lessons, you will find introductory notes on databases.

You’ll need to use the CSS skills you’ve learned earlier in the course to style your app. You can pick any UI library to work with such as Bootstrap, Vue Element Plus, Vuetify, or write your own styles for bonus points.
Learning goals

At the end of this project you will be able to:

    Use Vue.js to create an app
    Connect a Vue.js app to Supabase (Database as a Service)

Project requirements

    Have a repo on GitHub
    Commit your work at least once a day during the project development time
    Your app should be rendered in a browser
    Your app should be deployed online using a cloud service such as Netlify
    Stick with KISS (Keep It Simple, Stupid) and DRY (Don’t Repeat Yourself) principles.
    Your app should be styled using CSS
    Your app should be fully integrated with a Supabase database using all CRUD operations
    You should use Vue’s Pinia to fully implement status handling
    You should handle any asynchronous operations using Promises or Async/await
    You should document the application’s features, configuration and technical specifications within a README file

Deliverables

The functionality should include:

    Authentication (sign up, sign in, sign out)
    A front-end that displays the user’s personal to-do list
    An ability to add new tasks
    An ability to edit existing tasks
    An ability to mark tasks as complete/incomplete
    An ability to delete existing tasks
    A store and a database that your app can call data from

User stories

User stories allow us to build a simple narrative around business logic using a syntax called Gherkin. We use keywords such as given, when, then, and and but, in addition to a few others. You can find a full list of keywords within the Gherkin documentation.

Gherkin is the best way to clarify business logic and user interactions whilst also maintaining a human-readable set of specifications.

This strategy is referred to as Behavior-Driven Development (BDD) and it will form the basis of this specification. We’ll consider our user stories throughout the development process. In the bonus section, you can test your code against them during the quality assurance (QA) stage of the project.

Here are the user stories you’ll need to consider to ensure that the app functions as required for this project:
Authentication

Feature: Create an account
  Background: As a new user, I want to register with the to-do app
    Given I do not have an account
 
Scenario: As a user, I want to create an account
  When I visit the signup page
  And I set the email to "test@example.co.uk"
  And I set a password to "****"
  And I set confirmPassword to "****"
  And I click the register button
  Then I expect to be shown a warning that instructs me to confirm my email address by clicking a link in an email
  And I click the link provided in the email
  Then I expect to be logged in to the app

  And I expect to see the home screen

Feature: Log in to the app
  Background: As a user, I want to log in to the to-do app
    Given I already have an account
 
Scenario: As a user, I want to log in to the app
  When I visit the login page
  And I enter my email as "test@example.co.uk"
  And I enter my password as "****"
  And I click the Log In button
  Then I expect to be logged in to the app

  And I expect to see the home screen

Feature: Log out from the app
  Background: As a user, I want to be able to log out from the app
    Given I am logged in to the app
 
Scenario: As a user, I want to log out
  When I am viewing the home screen
  And I click the log out button
  Then I expect to be logged out of the app

  And I expect to see the login page

App

Feature: Add a new task
  Background: As a logged in user, I want to add a new task and have it appear on my to-do list
    Given I am logged in
 
Scenario: As a logged-in user I want to create a new task
  When I visit the home screen
  And I enter "My cool task" in the NewTask field
  And I click the submit button
  Then I expect to see "My cool task" in the To-Do list of tasks

 

Feature: Edit a task
  Background: As a logged in user, I want to edit an existing task and have the app display the updated content
    Given I have already created a task
 
Scenario: As a user, I want to edit the title of my task
  When I locate the task I'd like to edit
  And I click the corresponding Edit button to the task
  Then I expect the title of the task to become editable
  When I enter a new description for the task
  And I click submit

  Then I expect to see my updated task on the To-Do list

Feature: Mark a task as complete
  Background: As a logged in user, I want to be able to mark a task as complete and automatically move it to the completed section
    Given I have already created a task
 
Scenario: As a logged-in user I want to mark a task as complete
  When I locate the task I'd like to mark as complete
  And I click the corresponding done button to the task

  Then I expect to see that my task has immediately been moved to the completed section

Feature: Mark a task as incomplete
  Background: As a logged in user, I want to be able to mark a task as incomplete and automatically move it back to the to-do section
    Given I have already created a task and marked it as complete
 
Scenario: As a logged-in user I want to mark a task as incomplete
  When I locate the task I'd like to mark it as incomplete
  And I click the corresponding incomplete button to the task

  Then I expect to see that my task has immediately been moved to the to-do section

Feature: Delete a task
  Background: As a logged in user, I want to be able to permanently delete an existing task
    Given I have already created a task
 
Scenario: As a logged-in user I want to delete a task
  When I locate the task I'd like to delete
  And I click the corresponding delete button to the task

  Then I expect to see that my task has been permanently removed from every list

Technical specifications
Tech Stack

    Client: Vue.js, Vite (dev server)
    Router: Vue Router
    Store: Pinia and Pinia Persist for persistent login
    Database as a service: Supabase

Project setup

Basic setup for Vue.js and Supabase:

$ npm init vue@latest
$ cd my-todo-project
$ npm install @supabase/supabase-js
$ npm install pinia
$ npm install vue-router@4

$ npm install pinia-plugin-persist

Vue.js
Modules needed:

Vue Router

    You will need to set up a route for Dashboard and Auth

Pinia (for our store)

    You will need to set up two user stores: user.js and task.js

Tasks

    Create a sign up/sign in screen that will be displayed when the user is not logged in
    Ensure that the signup form requests an email address, password and password confirmation from the user
    Ensure that the sign in form requests an email and a password from the user
    Create a page where after logging in, the user is shown the main app content
    The app should fetch all tasks from the logged-in user’s task list stored in Supabase

Architecture

Below we’ve prepared a suggested file structure for the codebase. Vite will automatically generate the files when you’ve created the project. You will need to create the components folder and the pages folder.

The /pages directory name is a choice for the developer. In other codebases, you may see it referred to as views.

Suggested file structure for the codebase (click to see)
