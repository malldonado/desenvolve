<template>
  <div class="container">
    <div class="content">
      <div class="header">
        <h3>Como retornar Generated Keys com relacionamento de classes?</h3>
        <small class="tag">Programação</small>
      </div>

      <div class="question-details">
        <div class="votes">
          <button @click="vote('up')" class="vote-button">
            <span class="material-icons">thumb_up</span>
          </button>
          <span class="vote-count">{{ upVotes }}</span>
          <button @click="vote('down')" class="vote-button">
            <span class="material-icons">thumb_down</span>
          </button>
        </div>
        <div class="question-info">
          <h5 class="author">Heber Gustavo</h5>
          <small class="date">26/12/2020</small>
          <p>Estou com um uma dúvida.</p>
          <p>
            Na minha aplicação simples, eu relaciono duas classes assim
            como no banco de dados. Porém meu método de salvar está com
            RETURN_GENERATED_KEYS não retorna justamente o campo que faz
            ligação com a outra classe. Embora ele salve no banco de
            dados, ele não retorna esse resultado e toda vez eu tenho que
            reiniciar o tomcat pra ele exibir.
          </p>
          <p>
            Também fiz o teste com o Junit, ele retorna null nesse campo.
          </p>
        </div>
      </div>

      <h5 class="responses-title">4 Respostas</h5>

      <div v-for="(response, index) in responses" :key="index" class="response">
        <div class="votes">
          <button @click="voteResponse(index, 'up')" class="vote-button">
            <span class="material-icons">thumb_up</span>
          </button>
          <span class="vote-count">{{ response.upVotes }}</span>
          <button @click="voteResponse(index, 'down')" class="vote-button">
            <span class="material-icons">thumb_down</span>
          </button>
        </div>
        <div class="response-info">
          <h5 class="author">{{ response.author }}</h5>
          <small class="date">{{ response.date }}</small>
          <p>{{ response.text }}</p>
        </div>
      </div>

      <hr />

      <button @click="toggleResponseForm" class="response-button">
        <span class="material-icons">question_answer</span> Responder
      </button>

      <div v-if="showResponseForm" class="response-form">
        <label for="responseText">Digite aqui a sua resposta</label>
        <textarea
          id="responseText"
          v-model="newResponseText"
          rows="3"
        ></textarea>
        <button @click="addResponse" class="submit-button">Enviar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      upVotes: 0,
      responses: [
        {
          author: 'Marcio Camargo',
          date: '26/12/2020',
          text: 'Você pode tentar fazer ........ E se nao der certo faça blablabla',
          upVotes: 0
        },
        {
          author: 'Pereininha Cruz',
          date: '26/12/2020',
          text: 'Você pode tentar fazer ........ E se nao der certo faça blablabla',
          upVotes: 0
        },
        {
          author: 'Maria da Cunha',
          date: '26/12/2020',
          text: 'Você pode tentar fazer ........ E se nao der certo faça blablabla',
          upVotes: 0
        },
        {
          author: 'Cardozo Antonio',
          date: '26/12/2020',
          text: 'Você pode tentar fazer ........ E se nao der certo faça blablabla',
          upVotes: 0
        }
      ],
      showResponseForm: false,
      newResponseText: ''
    };
  },
  methods: {
    vote(direction) {
      if (direction === 'up') this.upVotes++;
      if (direction === 'down') this.upVotes--;
    },
    voteResponse(index, direction) {
      if (direction === 'up') this.responses[index].upVotes++;
      if (direction === 'down') this.responses[index].upVotes--;
    },
    toggleResponseForm() {
      this.showResponseForm = !this.showResponseForm;
    },
    addResponse() {
      if (this.newResponseText.trim()) {
        this.responses.push({
          author: 'Novo Autor',
          date: new Date().toLocaleDateString(),
          text: this.newResponseText,
          upVotes: 0
        });
        this.newResponseText = '';
        this.showResponseForm = false;
      }
    }
  }
};
</script>

<style scoped>
.container {
  width: 80%;
  margin: auto;
}

.content {
  padding: 20px;
}

.header {
  margin-bottom: 20px;
}

.header h3 {
  margin: 0;
}

.tag {
  color: gray;
}

.question-details {
  display: flex;
}

.votes {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
}

.vote-button {
  background: none;
  border: none;
  cursor: pointer;
}

.vote-count {
  margin: 5px 0;
}

.question-info {
  flex: 1;
}

.responses-title {
  margin: 20px 0;
}

.response {
  display: flex;
  margin-bottom: 20px;
}

.response-info {
  flex: 1;
}

.response-button {
  background: #28a745;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
}

.response-form {
  margin-top: 20px;
}

.response-form label {
  display: block;
  margin-bottom: 10px;
}

.response-form textarea {
  width: 100%;
  margin-bottom: 10px;
}

.submit-button {
  background: #28a745;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
}
</style>
