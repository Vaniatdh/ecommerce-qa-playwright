# language: pt
Funcionalidade: Processo de Checkout no E-Commerce
Como um cliente autenticado na loja SauceDemo
Quero adicionar produtos ao carrinho e preencher os dados de envio
Para conseguir finalizar a minha compra com sucesso

Contexto:
Dado que o utilizador acede à página inicial da SauceDemo
E realiza o login com as credenciais "standard_user" e "secret_sauce"

Cenário: Realizar compra de um produto com sucesso (Caminho Feliz)
    Dado que o utilizador adiciona o produto "Sauce Labs Backpack" ao carrinho
    E navega até à página de carrinho de compras
    Quando clica no botão de Checkout
    E preenche o primeiro nome "Vânia", último nome "Tavares" e código postal "3800-000"
    E clica em continuar e confirma o pedido
    Então o sistema deve processar a compra com sucesso
    E exibir a mensagem "Thank you for your order!"

    Cenário: Tentar avançar no checkout sem preencher os dados obrigatórios
    Dado que o utilizador possui um produto no carrinho
    E navega até à página de Checkout
    Quando clica em continuar sem preencher os campos de envio
    Então o sistema deve bloquear o avanço do pedido
    E exibir a mensagem de erro "Error: First Name is required"
