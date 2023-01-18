const Employee = require('../lib/Employee.js');
const employee = new Employee('Luke', '12345', 'Luke@test.com');

describe('Employee', () => {
  it('should return the constructor values for the employee object', () => {
    expect(employee.name).toBe('Luke');
    expect(employee.id).toBe('12345');
    expect(employee.email).toBe('Luke@test.com');
  });

  it('should return name from getName() method', () => {
    expect(employee.getName()).toBe('Luke');
  });

  it('should return id from getId() method', () => {
    expect(employee.getId()).toBe('12345');
  });

  it('should return email from getEmail() method', () => {
    expect(employee.getEmail()).toBe('Luke@test.com');
  });

  it('should return role from getRole() method', () => {
    expect(employee.getRole()).toBe('Employee');
  });
});
