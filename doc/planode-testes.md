# 📋 Plano de Testes de Documentação Manual - E-Commerce

## 1 . Visao Geral do Planejamento
* **Objetivo:** Garantir a qualidade e estabilidade do fluxo de checkout do e-commerce (https://www.saucedemo.com/).
* **Escopo:** Tela de login, carrinho de compras, formulário de checkout e confirmação de pedido.
* **Ambiente de Testes:** Web / Google Chrome.

  ------

  ## 2. Casos de Teste Manuais Detalhados

### 🟢 CT-01: Finalizar compra com sucesso (Caminho Feliz / Happy Path)

* **Pré-condições:** Usuário autenticado e com o produto "Sauce Labs Backpack" no carrinho.
* **Passos de Execução:**
1. Acessar o carrinho de compras e clicar em `Checkout`.
2. Preencher os campos `First Name`, `Last Name` e `Zip/Postal Code` com dados válidos.
3. Clicar no botão `Continue`.
4. Revisar o resumo do pedido e clicar em `Finish`.

* **Dados de Teste:** 
  * First Name: `Vânia`
  * Last Name: `QA`
  * Zip Code: `12345`
<img width="917" height="563" alt="dados_do_teste" src="https://github.com/user-attachments/assets/71445af3-5303-44b5-91fd-48240b19566b" />
  
* **Resultado Esperado:** O sistema deve processar a compra e exibir a mensagem `Thank you for your order!`.
* <img width="952" height="918" alt="sucesso" src="https://github.com/user-attachments/assets/5d5732a4-58c7-420d-b7ed-8555b6df0b8b" />


---

### 🔴 CT-02: Validar campos obrigatórios no Checkout (Caminho Negativo)
* **Pré-condições:** Usuário na tela de Checkout (`Checkout: Your Information`).
* **Passos de Execução:**
  1. Deixar os campos de formulário completamente em branco.
  2. Clicar diretamente no botão `Continue`.

     <img width="957" height="942" alt="erro" src="https://github.com/user-attachments/assets/6d682067-b850-477a-bf10-58bc32406189" />

* **Resultado Esperado:** O sistema deve bloquear o avanço e exibir a mensagem de erro vermelha: `Error: First Name is required`.

---

## 🐛 3. Simulação de Reporte de Bug (Padrão Jira)

> **ID do Bug:** `BUG-QA-01`  
> **Título:** Mensagem de erro incorreta ao omitir o código postal no Checkout.  
> **Prioridade:** Média | **Severidade:** Alta  

* **Descrição:**  
  Ao realizar o checkout sem preencher o campo `Zip/Postal Code`, o sistema exibe uma mensagem genérica ou não destaca o campo correto para o usuário.

* **Passos para Reprodução:**
  1. Fazer login no sistema.
  2. Adicionar qualquer item ao carrinho e ir para o checkout.
  3. Preencher `First Name` e `Last Name`, mas deixar `Zip/Postal Code` em branco.
  4. Clicar em `Continue`.

* **Resultado Obtido (Incorreto):** O formulário não destaca o campo Zip Code.
* **Resultado Esperado (Correto):** Exibir a mensagem `Error: Postal Code is required` e destacar o campo em vermelho.
