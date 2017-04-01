import { ValidacaoFormularioPage } from './app.po';

describe('validacao-formulario App', () => {
  let page: ValidacaoFormularioPage;

  beforeEach(() => {
    page = new ValidacaoFormularioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
