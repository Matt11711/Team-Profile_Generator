const Intern = require('../lib/Intern')


const exampleIntern = {
    name: 'Charles',
    id: 54321,
    email: 'testemail@test.com',
    role: 'Intern',
    school: 'Harvard'
}

test('Creates an intern with a name, id, email, role, and school', () => {
    const intern = new Intern(exampleIntern);
    expect(intern.name).toBe('Charles')
    expect(intern.id).toBe(54321)
    expect(intern.email).toBe('testemail@test.com')
    expect(intern.role).toBe('Intern')
    expect(intern.school).toBe('Harvard')
    })
    
    
    test('returns intern school',()=> {
        const intern = new Intern(exampleIntern);
        expect(intern.getSchool()).toEqual('Harvard')
    })
    test('returns intern role',()=> {
        const intern = new Intern(exampleIntern);
        expect(intern.getRole()).toEqual('Intern')
    })