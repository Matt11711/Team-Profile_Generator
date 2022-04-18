const Manager = require('../lib/Manager')

const exampleManager = {
    name: 'Charles',
    id: 54321,
    email: 'testemail@test.com',
    role: 'Manager',
    officeNumber: 6969
}

test('Creates an manager with a name, id, email, role, and school', () => {
    const manager = new Manager(exampleManager);
    expect(manager.name).toBe('Charles')
    expect(manager.id).toBe(54321)
    expect(manager.email).toBe('testemail@test.com')
    expect(manager.role).toBe('Manager')
    expect(manager.officeNumber).toBe(6969)
    })
    
    

    test('returns manager role',()=> {
        const manager = new Manager(exampleManager);
        expect(manager.getRole()).toEqual('Manager')
    })