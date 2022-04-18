
const Employee = require('../lib/Employee')

const exampleEmployee = {
    name: 'Charles',
    id: 54321,
    email: 'testemail@test.com'
}

test('Creates an employee with a name, id, email, and role', () => {
const employee = new Employee(exampleEmployee);
expect(employee.name).toBe('Charles')
expect(employee.id).toBe(54321)
expect(employee.email).toBe('testemail@test.com')
expect(employee.role).toBe('Employee')
})

test('returns employee name',()=> {
    const employee = new Employee(exampleEmployee);
expect(employee.getName()).toEqual('Charles')
})
test('returns employee id',()=> {
    const employee = new Employee(exampleEmployee);
    expect(employee.getId()).toEqual(54321)
})
test('returns employee email',()=> {
    const employee = new Employee(exampleEmployee);
    expect(employee.getEmail()).toEqual(testemail@test.com)
})
test('returns employee role',()=> {
    const employee = new Employee(exampleEmployee);
    expect(employee.getRole()).toEqual('Employee')
})