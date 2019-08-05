import { getGreeting } from '../support/app.po';

describe('personal-blog', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to personal-blog!');
  });
});
