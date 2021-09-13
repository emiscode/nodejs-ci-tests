/* eslint-disable no-undef */
const Fornecedor = require('../../../api/rotas/fornecedores/Fornecedor')

describe('classe fornecedor', () => {
  test('o método validar() retorna true', () => {
    const fornecedor = new Fornecedor({
      empresa: 'Gatito',
      email: 'contato@gatito.com.br',
      categoria: 'brinquedos'
    })

    expect(fornecedor.validar()).toBe(true)
  })
})
