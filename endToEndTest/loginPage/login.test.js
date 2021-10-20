describe("Successful login", () => {
  beforeAll(async () => {
    // Given I visit the homepage
    await page.goto(URL);
  });

  it("When I click on the login button", async () => {
    await page.waitForSelector("#login-button");
    await page.click("#login-button");
  });

  it("Then I should see the login form", async () => {
    const text = await page.evaluate(
      () => document.querySelector("#login-modal").textContent
    );
    await expect(text).toBe("Log In");
  });

  it("When I input the emailtestlogin@atest.com ", async () => {
    await page.type("#email", "testlogin@atest.com");
  });

  it("And I input the password password1 ", async () => {
    await page.type("#password", "password1");
  });

  it("And I click the submit button", async () => {
    await page.waitForSelector("#submit");
    await page.click("#submit");
  });

  it("Then I should see the users welcome page.", async () => {
    const text = await page.evaluate(
      () => document.querySelector("#user-section").textContent
    );
    await expect(text).toBe("Logged in user: testlogin");
  });
});

describe("Failed login", () => {
  beforeAll(async () => {
    // Given I visit the homepage
    await page.goto(URL);
  });

  it("When I click on the login button", async () => {
    await page.waitForSelector("#login-button");
    await page.click("#login-button");
  });

  it("Then I should see the login form", async () => {
    const text = await page.evaluate(
      () => document.querySelector("#login-modal").textContent
    );
    await expect(text).toBe("Log In");
  });

  it("When I input the email fakeEmail@fake.com", async () => {
    await page.type("#email", "fakeEmail@fake.com");
  });

  it("And I input the password password1 ", async () => {
    await page.type("#password", "not a password");
  });

  it("And I click the submit button", async () => {
    await page.waitForSelector("#submit");
    await page.click("#submit");
  });

  it("Then I should see an error message under the login form.", async () => {
    const text = await page.evaluate(
      () => document.querySelector("#error").textContent
    );
    await expect(text).toBe("Bad Email or Password");
  });
});
