/* eslint-disable no-undef */
import RequisicaoIncorreta from "./RequisicaoIncorreta.js";

class ErroValidacao extends RequisicaoIncorreta {
  constructor() {
    const mensagensErro = Object.values(erro.errors)
      .map((erro) => erro.message)
      .join(";");
    res.status(400).send({
      message: `Os seguintes erros foram encontrados: ${mensagensErro}`,
    });
    super();
  }
}

export default ErroValidacao;
