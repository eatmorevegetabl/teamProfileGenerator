const Intern = require('../lib/Intern');
const intern = new Intern('Han', '002', 'Han@test.com', 'Imperial Academy');

describe('Intern', () => {
  it('should return the constructor values for the intern object', () => {
    expect(intern.name).toBe('Han');
    expect(intern.id).toBe('002');
    expect(intern.email).toBe('Han@test.com');
    expect(intern.school).toBe('Imperial Academy');
  });

  it('should return name from getName() method', () => {
    expect(intern.getName()).toBe('Han');
  });

  it('should return id from getId() method', () => {
    expect(intern.getId()).toBe('002');
  });

  it('should return email from getEmail() method', () => {
    expect(intern.getEmail()).toBe('Han@test.com');
  });

  it('should return school from getSchool() method', () => {
    expect(intern.getSchool()).toBe('Imperial Academy');
  });

  it('should return role from getRole() method', () => {
    expect(intern.getRole()).toBe('Intern');
  });
});
