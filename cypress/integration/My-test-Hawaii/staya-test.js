describe('Проверка формы входа на сайте staya', function () {
  it('Позитивный кейс: верный логин, верный пароль', function () {
    cy.visit('https://staya.dog');
    cy.get('.header-bottom__right--link').click();
    cy.get('.auth-form > form > [type="email"]').type('shlippenbah@mail.ru');
    cy.get('.auth-form__submit').should('be.disabled');
    cy.get('.auth-form > form > [type="password"]').type('test55555');
    cy.get('.auth-form__submit').should('not.be.disabled');
    cy.get('.auth-form__submit').click();
    cy.contains('Мои заказы');
  });
});
