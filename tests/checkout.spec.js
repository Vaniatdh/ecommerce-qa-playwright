// Importamos as ferramentas de teste do Playwright
const { test, expect } = require('@playwright/test');

test.describe( 'Automação do Fluxo de Checkout - E-Commerce', () => {
// Cenário 1: Caminho Feliz - Compras com Sucesso
  test( 'CT01 - Deve finalizar a compra com sucesso', async ({ page }) => {

 // 1. Acessa o site da loja
       await page.goto( 'https://www.saucedemo.com/');

  // 2. Faz o login (Preenche usuário, senha e clica em Login)
   await page.fill( '#user-name', 'standard_user');
   await page.fill( '#password', 'secret_sauce');
   await page.click( '#login-button'); 

  // 3. Adiciona a mochila ao carinho a vai para o carrinho
    await page.click( '#add-to-cart-sauce-labs-backpack');
    await page.click('.shopping_cart_link');

   // 4. Inicia o checkout
    await page.click(  '#checkout');

    // 5. Preenche os dados de entrega (Nome, Apelido, Código Postal) 
    await page.fill('#first-name', 'Vânia');
    await page.fill('#last-name', 'QA');
    await page.fill('#postal-code', '12345');
    await page.click('#continue');

    // 6. Confirma o pedido
    await page.click('#finish');

    // 7. Validação (Assert): Verifica se a mensagem de sucesso está visível
    const mensagemSucesso = page.locator('.complete-header');
    await expect(mensagemSucesso).toHaveText('Thank you for your order!');
  });

     // Cenário 2: Caminho Negativo - Validação de Campos Obrigatórios
     test( 'CT02 - Deve exibir erro ao tentar avançar sem preencher o formulário', async ({ page }) => {

      // 1. Acessa o site e faz login
       await page.goto( 'https://www.saucedemo.com/');
       await page.fill( '#user-name', 'standard_user');
       await page.fill('#password', 'secret_sauce');
       await page.click('#login-button');

       // 2. Vai para o carrinho e avança para o checkout
       await page.click('#add-to-cart-sauce-labs-backpack');
       await page.click('.shopping_cart_link');
       await page.click('#checkout'); 

       // 3. Clica em Continue sem prencher nenhum campo
       await page.click('#continue');

       // 4 . Validação (Assert): Verifica se a mensagem de erro aparece
       const mensagemErro = page.locator('[data-test="error"]');
    await expect(mensagemErro).toContainText('Error: First Name is required');
  });

});









          
