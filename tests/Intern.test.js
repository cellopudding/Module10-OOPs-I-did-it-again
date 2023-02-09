const Intern = require("../lib/Intern");

test("function getRole should return Intern", () => {
    const testRole = "Intern"
    const newIntern = new Intern("Lonnie", 4, "root.lonnie@gmail.com")
    expect(newIntern.getRole()).toBe(testRole)
})

test("function getSchool should return a school", () => {
    const testSchool = "College of Charleston"
    const internSchool = new Intern("Lonnie", 4, "root.lonnie@gmail.com", "College of Charleston")
    expect(internSchool.getSchool()).toBe(testSchool)
})

