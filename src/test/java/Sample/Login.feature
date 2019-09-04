
Feature: Login
  

  Scenario: Demo_Login
    Given User in Home Page
    When Users enters credentials 
      | username  | password 	| 
      | shan 			| pass123   | 
      | san 			| pass456		| 
    And Click on login button
    Then Home page is displayed  
