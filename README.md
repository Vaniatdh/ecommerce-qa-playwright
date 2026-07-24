
# 🛒 Suíte de Testes e Garantia de Qualidade para E-Commerce

![QA](https://img.shields.io/badge/Focus-Manual%20%26%20Functional%20Testing-blue?style=for-the-badge)
![BDD](https://img.shields.io/badge/BDD-Gherkin-green?style=for-the-badge)
![Playwright](https://img.shields.io/badge/Playwright-Iniciante-2EAD33?style=for-the-badge&logo=playwright&logoColor=white)

Projeto prático de Garantia de Qualidade (QA) focado no **planeamento de testes, mapeamento de cenários em BDD, testes funcionais manuais e introdução à automação de testes** para o e-commerce modelo [SauceDemo](https://www.saucedemo.com/).

---

## 🎯 Escopo do Projeto

O objetivo deste projeto é demonstrar o ciclo completo de testes de uma funcionalidade crítica de e-commerce:

1. **Mapeamento de Regras de Negócio:** Identificação dos fluxos de Login, Carrinho e Checkout.
2. **Escrita de Cenários BDD:** Especificação do comportamento esperado em formato Gherkin.
3. **Execução de Testes Manuais & Exploratórios:** Validação de caminhos felizes e casos de erro.
4. **Relatório de Bugs (Jira):** Documentação de falhas encontradas com evidências e passos para reprodução.
5. **Introdução à Automação:** Execução de cenários automatizados em Playwright.

---

## 📑 Cenários de Teste em BDD (Gherkin)

``gherkin
Funcionalidade: Fluxo de Checkout no E-Commerce

  Cenário: Finalizar compra com sucesso utilizando dados válidos
    Dado que o utilizador está autenticado na loja SauceDemo
    E possui o produto "Sauce Labs Backpack" no carrinho de compras
    Quando avança para a página de checkout e preenche os dados de envio
    E confirma o pedido de compra
    Então o sistema deve exibir a mensagem de confirmação "Thank you for your order!"

---

## 📸 Evidências dos Testes Funcionais (Mão na Massa)

### 1. Validação de Erro (Campos Obrigatórios)
<img width="957" height="942" alt="erro" src="https://github.com/user-attachments/assets/6e33b9f3-f8e0-4e84-a3e5-a62708bdf22b" />


---

### 2. Confirmação de Compra (Caminho Feliz)
> **Mensagem de Sucesso:** `Thank you for your order!`
<img width="952" height="918" alt="sucesso" src="https://github.com/user-attachments/assets/605dd68f-e24d-407c-b9d5-f3af9d3b6926" />


