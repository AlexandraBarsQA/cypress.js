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

  it('Позитивный кейс: выход из аккаунта', function () {
    cy.visit('https://staya.dog/profile/orders');
    cy.get('button.profile__nav-link').click({ multiple: true });
    cy.contains('Ты уверен, что хочешь выйти из аккаунта?');
    cy.get('.box__button_ok').click();
  });

  it('Негативный кейс: верный логин, неверный пароль', function () {
    cy.visit('https://staya.dog');
    cy.get('.header-bottom__right--link').click();
    cy.get('.auth-form > form > [type="email"]').type('shlippenbah@mail.ru');
    cy.get('.auth-form__submit').should('be.disabled');
    cy.get('.auth-form > form > [type="password"]').type('test33333');
    cy.get('.auth-form__submit').should('not.be.disabled');
    cy.get('.auth-form__submit').click();
    cy.contains('Невозможно войти с предоставленными учетными данными.');
  });
});
