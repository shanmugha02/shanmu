$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:Sample/Login.feature");
formatter.feature({
  "name": "This is Login Test",
  "description": " This Scenario is for successful login",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Fail Login",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@san2"
    }
  ]
});
formatter.step({
  "name": "i Enter wrong user id in user id field",
  "keyword": "When "
});
formatter.match({
  "location": "Login.i_Enter_wrong_user_id_in_user_id_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "wrong Password in password field",
  "keyword": "And "
});
formatter.match({
  "location": "Login.wrong_Password_in_password_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i click on login",
  "keyword": "And "
});
formatter.match({
  "location": "Login.i_click_on_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the homepag is not displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.the_homepag_is_not_displayed()"
});
formatter.result({
  "status": "passed"
});
});