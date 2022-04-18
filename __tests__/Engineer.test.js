
const Engineer = require('../lib/Engineer')

const exampleEngineer = {
    name: 'Charles',
    id: 54321,
    email: 'testemail@test.com',
    role: 'Engineer',
    github: 'githubname'
}

test('Creates an engineer with a name, id, email, role, and github username', () => {
    const engineer = new Engineer(exampleEngineer);
    expect(engineer.name).toBe('Charles')
    expect(engineer.id).toBe(54321)
    expect(engineer.email).toBe('testemail@test.com')
    expect(engineer.role).toBe('Engineer')
    expect(engineer.github).toBe('githubname')
    })
    
    
    test('returns engineer github username',()=> {
        const engineer = new Engineer(exampleEngineer);
        expect(engineer.getGithub()).toEqual('githubname')
    })
    test('returns engineer role',()=> {
        const engineer = new Engineer(exampleEngineer);
        expect(engineer.getRole()).toEqual('Engineer')
    })