describe("Successful login", () => {
  beforeAll(async () => {
    await page.goto(URL);
  });

  it("should be titled Login Test App", async () => {
    await expect(page.title()).resolves.toMatch("Login Test App");
  });

  it("should click login and validate modal text", async () => {
    await page.click("#loginButton");
    const text = await page.evaluate(
      () => document.querySelector("#login-modal").textContent
    );
    await expect(text).toBe("Log In");
  });

  it("should enter email and password", async () => {
    await page.click("#email");
    await page.type("#email", "testlogin@atest.com");
    await page.type("#password", "password1");
  });

  it("should click submit", async () => {
    await page.click("#submit");
  });

  it("should validate user section page", async () => {
    const text = await page.evaluate(
      () => document.querySelector("#user-section").textContent
    );
    await expect(text).toBe("Logged in user: testlogin");
  });
});

describe("Failed login", () => {
  beforeAll(async () => {
    await page.goto(URL);
  });

  it("should be titled Login Test App", async () => {
    await expect(page.title()).resolves.toMatch("Login Test App");
  });

  it("should click login and validate modal text", async () => {
    await page.click("#loginButton");
    const text = await page.evaluate(
      () => document.querySelector("#login-modal").textContent
    );
    await expect(text).toBe("Log In");
  });

  it("should enter email and password", async () => {
    await page.click("#email");
    await page.type("#email", "fail@failMail.com");
    await page.type("#password", "not a password");
  });

  it("should click submit", async () => {
    await page.click("#submit");
  });

  it("should validate user section page", async () => {
    const text = await page.evaluate(
      () => document.querySelector("#error").textContent
    );
    await expect(text).toBe("Bad Email or Password");
  });
});
