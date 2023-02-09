const Manager = require("../lib/Manager");

test("function getRole should return Manager", () => {
    const testRole = "Manager"
    const newManager = new Manager("Lonnie", 4, "root.lonnie@gmail.com")
    expect(newManager.getRole()).toBe(testRole)
})

test("officeNumber should return an office number", () => {
    const testOffice = 2
    const managerOfficeNum = new Manager("Lonnie", 4, "root.lonnie@gmail.com", testOffice )
    expect(managerOfficeNum.getOfficeNumber()).toBe(testOffice)
})

