<template>
  <section>
    <form class="cadastro-usuario col-md-6 col-12">
      <div class="dados-cadastrais">
        <h1>Dados Cadastrais</h1>
        <div class="form-group">
          <label for="nome">Nome</label>
          <input class="form-control" type="text" name="nome" v-model="nome" />
        </div>
        <div class="form-group">
          <label for="email">E-Mail</label>
          <input
            class="form-control"
            type="email"
            name="email"
            v-model="email"
          />
        </div>
        <div class="form-group">
          <label for="senha">Senha</label>
          <input
            class="form-control"
            type="password"
            name="senha"
            v-model="senha"
          />
        </div>
      </div>
      <div class="endereco">
        <h1>Endereço</h1>
        <div class="form-group">
          <label for="cep">CEP</label>
          <input
            class="form-control col-md-5"
            type="text"
            name="cep"
            maxlength="8"
            v-model="cep"
            @keyup="getEndereco"
          />
        </div>
        <div class="row">
          <div class="form-group col-md-10 col-12">
            <label for="endereco">Endereço</label>
            <input
              class="form-control"
              type="text"
              name="endereco"
              v-model="logradouro"
            />
          </div>
          <div class="form-group col-md-2 col-12">
            <label for="numero">Número</label>
            <input
              class="form-control"
              type="text"
              name="numero"
              v-model="numero"
            />
          </div>
        </div>
        <div class="row">
          <div class="form-group col-12">
            <label for="bairro">Bairro</label>
            <input
              class="form-control"
              type="text"
              name="bairro"
              v-model="bairro"
            />
          </div>
        </div>
        <div class="row">
          <div class="form-group col-md-10 col-12">
            <label for="cidade">Cidade</label>
            <input
              class="form-control"
              type="text"
              name="cidade"
              v-model="cidade"
            />
          </div>
          <div class="form-group col-md-2 col-12">
            <label for="estado">UF</label>
            <input
              class="form-control"
              type="text"
              name="Estado"
              v-model="estado"
            />
          </div>
        </div>
      </div>
      <div>
        <slot></slot>
      </div>
    </form>
  </section>
</template>

<script>
import { getCEP } from "@/services/services.js";
import { mapFields } from "@/helpers/helpers.js";

export default {
  name: "formularioUsuario",
  computed: {
    ...mapFields({
      fields: [
        "nome",
        "email",
        "senha",
        "logradouro",
        "numero",
        "bairro",
        "cep",
        "cidade",
        "estado"
      ],
      base: "usuario",
      mutation: "UPDATE_USUARIO"
    })
  },
  methods: {
    getEndereco() {
      const cep = this.cep.replace(/\D/g, "");
      if (cep.length === 8) {
        getCEP(cep).then(cep => {
          this.logradouro = cep.data.logradouro;
          this.bairro = cep.data.bairro;
          this.cidade = cep.data.localidade;
          this.estado = cep.data.uf;
        });
      }
    }
  }
};
</script>

<style scoped>
.cadastro-usuario {
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  margin: 50px auto;
}

.cadastro-usuario h1 {
  font-size: 1.5em;
  text-align: center;
}

input:focus {
  outline: none;
  box-shadow: 0 0 0 0;
}

form input:hover,
form input:focus {
  border: 1px solid #87f;
}
</style>
