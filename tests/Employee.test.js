const Employee = require("../lib/Employee");

test("Can make an Employee object", () => {
  const e = new Employee()
  expect(typeof(e)).toBe("object")
})

test("Can create name from getName function", () => {
    const testName = "Lonnie"
    const e = new Employee("Lonnie", testName)
    expect(e.getName()).toBe(testName)
})

test("Can create Id from getId function", () => {
    const testId = 5
    const e = new Employee("Lonnie", testId)
    expect(e.getId()).toBe(testId)
})

test("Can create email from getEmail function", () => {
    const testEmail = "root.lonnie@gmail.com"
    const e = new Employee("Lonnie", 3, testEmail)
    expect(e.getEmail()).toBe(testEmail)
})

test("function getRole should return Employee", () => {
    const testRole = "Employee"
    const e = new Employee("Lonnie", 4, "root.lonnie@gmail.com")
    expect(e.getRole()).toBe(testRole)
})