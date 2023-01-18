const Engineer = require('../lib/Engineer');
const engineer = new Engineer('Chewy', '007', 'Chewy@test.com', 'raawr');

describe('Engineer', () => {
  it('should return the constructor values for the Engineer object', () => {
    expect(engineer.name).toBe('Chewy');
    expect(engineer.id).toBe('007');
    expect(engineer.email).toBe('Chewy@test.com');
    expect(engineer.github).toBe('raawr');
  });

  it('should return name from getName() method', () => {
    expect(engineer.getName()).toBe('Chewy');
  });

  it('should return id from getId() method', () => {
    expect(engineer.getId()).toBe('007');
  });

  it('should return email from getEmail() method', () => {
    expect(engineer.getEmail()).toBe('Chewy@test.com');
  });

  it('should return github from getgithub() method', () => {
    expect(engineer.getGithub()).toBe('raawr');
  });

  it('should return role from getRole() method', () => {
    expect(engineer.getRole()).toBe('Engineer');
  });
});
