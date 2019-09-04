package Sample;

import cucumber.api.java.en.And;
import java.util.*;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Login {
	int i=0;
	@Given("User in Home Page")
	public void user_in_Home_Page() {
	    System.out.println("Username in homepage");
	}

	@When("Users enters credentials")
	public void users_enters_credentials(io.cucumber.datatable.DataTable a) {
	    List<Map<String,String>> list = a.asMaps();
	    int n=list.size();
	    while(i<n)
	    {
		    System.out.println(list.get(i).get("username"));
		    System.out.println(list.get(i).get("password"));
		    i++;
	    }
	}

	@When("Click on login button")
	public void click_on_login_button() {
	    System.out.println("Login Button Clicked");
	}

	@Then("Home page is displayed")
	public void home_page_is_displayed() {
	    System.out.println("Home Page Displayed");
	}




}
