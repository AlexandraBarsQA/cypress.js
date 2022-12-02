describe('Проверка работы покупки товара на сайте staya', function () {
  it('Позитивный кейс: покупка ошейника', function () {
    cy.visit('https://staya.dog');
    cy.get('[href="/catalog/collars"] > .category-link__canvas-wrapper > .category-link__canvas').click();
    cy.get(':nth-child(1) > .product-list > :nth-child(2) > .SProductCard__galleryWrapper > .CurtainGallery').click();
    cy.get('.SSpoiler__container > :nth-child(1)').click();
    cy.get('.CTA').click();
    cy.get('.cart-modal__actions > .s-button').click();
    cy.contains('Оформление заказа');
  });



/* it('Позитивный кейс: покупка ошейника', function () {
    cy.visit('https://staya.dog');
    cy.get('[href="/catalog/collars"] > .category-link__canvas-wrapper > .category-link__canvas').click();
    cy.get('[href="/product/clr02-05dz2?size=s"]').click();
    cy.get(':nth-child(3) > .Option__bubble-wrapper > .Option__bubble > .Option__bubble-img').click();
    cy.get('.CTA').click();
    cy.get('.cart-modal__actions > .s-button').click();
    cy.contains('Оформление заказа');
  });
*/

});
