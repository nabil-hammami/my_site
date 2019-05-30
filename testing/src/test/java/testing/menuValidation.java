package testing;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import static org.junit.Assert.*;
import org.openqa.selenium.*;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.Select;

public class menuValidation {

    private WebDriver driver;

    @Given("I am connected to the website")
    public void i_am_connected_to_the_website() {
        driver = new FirefoxDriver();
        driver.get("http://localhost:63342/testing/index.html");
        System.out.println("In the Given function");
        //throw new cucumber.api.PendingException();
    }

    @When("I click on the Home link")
    public void i_click_on_the_Home_link() {
        driver.findElement(By.id("menu_home")).click();
        //throw new cucumber.api.PendingException();
    }

    @Then("the main frame must contain Welcome")
    public void the_main_frame_must_contain_Welcome() {
        driver.switchTo().frame(0);
        String readText = driver.findElement(By.xpath("/html/body/article[1]/h1")).getText();
        assertEquals(readText,"Welcome");
        driver.quit();
        //TODO Errors management
        //throw new cucumber.api.PendingException();
    }

    @When("I click on the Projects link")
    public void i_click_on_the_Projects_link() {
        // Write code here that turns the phrase above into concrete actions
        throw new cucumber.api.PendingException();
    }

    @Then("the main frame must contain Projects")
    public void the_main_frame_must_contain_Projects() {
        // Write code here that turns the phrase above into concrete actions
        throw new cucumber.api.PendingException();
    }

    @When("I click on the Roadmap link")
    public void i_click_on_the_Roadmap_link() {
        // Write code here that turns the phrase above into concrete actions
        throw new cucumber.api.PendingException();
    }

    @Then("the main frame must contain roadmap.png")
    public void the_main_frame_must_contain_roadmap_png() {
        // Write code here that turns the phrase above into concrete actions
        throw new cucumber.api.PendingException();
    }

    @When("I click on the Latest test results link")
    public void i_click_on_the_Latest_test_results_link() {
        // Write code here that turns the phrase above into concrete actions
        throw new cucumber.api.PendingException();
    }

    @Then("the main frame must contain Cucumberjs Report")
    public void the_main_frame_must_contain_Cucumberjs_Report() {
        // Write code here that turns the phrase above into concrete actions
        throw new cucumber.api.PendingException();
    }

    @When("I click on the Logbook link")
    public void i_click_on_the_Logbook_link() {
        // Write code here that turns the phrase above into concrete actions
        throw new cucumber.api.PendingException();
    }

    @Then("the main frame must contain Logbook")
    public void the_main_frame_must_contain_Logbook() {
        // Write code here that turns the phrase above into concrete actions
        throw new cucumber.api.PendingException();
    }

}
