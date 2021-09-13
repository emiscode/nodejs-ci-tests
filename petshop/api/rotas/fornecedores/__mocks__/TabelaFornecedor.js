module.exports = {
    listar() {
        return []
    },
    inserir(fornecedor) {
        return {
            id: 99,
            dataCriacao: '10-12-2100',
            datadataAtualizacao: '10-12-2100',
            versao: 99
        }
    },
    async pegarPorId(id) {
        return {
            id: 99,
            dataCriacao: '10-12-2100',
            datadataAtualizacao: '10-12-2100',
            versao: 99
        }
    },
    async atualizar(id, dadosParaAtualizar) {

    },
    async remover(id) {

    }
}
