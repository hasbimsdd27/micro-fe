describe("My First E2E Test", () => {
  it("Should add an item to the cart", () => {
    cy.visit("http://localhost:3000/");
    cy.get("#app").click();
    cy.get("#showlogin").click();
    cy.get("#loginBtn").click();
    cy.get("#addtocart_1").click();
    cy.get("#showcart").click();
    cy.get(".flex-grow > #clearCart").click();
    cy.get("#addtocart_1").click();
    cy.get("#cart").click();
  });
});
