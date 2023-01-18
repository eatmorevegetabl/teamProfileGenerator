const Manager = require('../lib/Manager');
const manager = new Manager('Leia', '67890', 'Leia@test.com', '123.456.7890');

describe('Manager', () => {
  it('should return the constructor values for the manager object', () => {
    expect(manager.name).toBe('Leia');
    expect(manager.id).toBe('67890');
    expect(manager.email).toBe('Leia@test.com');
    expect(manager.officeNumber).toBe('123.456.7890');
  });

  it('should return name from getName() method', () => {
    expect(manager.getName()).toBe('Leia');
  });

  it('should return id from getId() method', () => {
    expect(manager.getId()).toBe('67890');
  });

  it('should return email from getEmail() method', () => {
    expect(manager.getEmail()).toBe('Leia@test.com');
  });

  it('should return officeNumber from getOfficeNumber() method', () => {
    expect(manager.getOfficeNumber()).toBe('123.456.7890');
  });

  it('should return role from getRole() method', () => {
    expect(manager.getRole()).toBe('Manager');
  });
});
