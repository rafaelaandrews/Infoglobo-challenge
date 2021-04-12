const expect = require('chai').expect;

const noticiaService = require("../src/service/noticia.service");

describe('noticiaService validations', () => {
  describe('Validate Request', () => {
    it('validateRequestId', async () => {
			let params = {params: {id: 1}}
      const result = noticiaService.validateRequestId(params);
      expect(result).to.be.true;
    });

    it('validateRequestTitulo', async () => {
			let params = {params: {titulo: "titulo"}}
      const result = noticiaService.validateRequestTitulo(params);
      expect(result).to.be.true;
    });
		
		it('validateRequestParams', async () => {
			let params = {body: {titulo: "titulo", conteudo: "conteudo", dataPublicacao: "data"}}
      const result = noticiaService.validateRequestParams(params);
      expect(result).to.be.true;
    });
  });
});