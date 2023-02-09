const Engineer = require("../lib/Engineer");


test("function getRole should return Engineer", () => {
    const testRole = "Engineer"
    const newEngineer = new Engineer("Lonnie", 4, "root.lonnie@gmail.com")
    expect(newEngineer.getRole()).toBe(testRole)
})

test("Can create github from getGithub function", () => {
    const testGithub = "Cellopudding"
    const newEngineer = new Engineer("Lonnie", 3, "root.lonnie@gmail.com", testGithub)
    expect(newEngineer.getGithub()).toBe(testGithub)
})
//only testing for getRole and getGithub