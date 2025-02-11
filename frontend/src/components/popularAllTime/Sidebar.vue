<template>
  <div class="inner-sidebar">
    <header class="inner-sidebar-header">
      <button @click="$router.push('/post')" class="btn-discussion">
        <ion-icon name="add-circle-outline"></ion-icon>
        Nova Discussão
      </button>
    </header>
    <nav class="inner-sidebar-body">
      <ul class="nav-pills">
        <li><router-link :to="'/'" class="nav-link">
          <ion-icon name="apps-outline"></ion-icon> Todos os tópicos
        </router-link></li>
        <li><router-link :to="'/popular-this-week'" class="nav-link">
          <ion-icon name="calendar-outline"></ion-icon> Popular esta semana
        </router-link></li>
        <li><router-link :to="'/popular-all-time'" class="nav-link active">
          <ion-icon name="chatbubbles-outline"></ion-icon> Popular de todos os tempos
        </router-link></li>
        <li><router-link :to="'/resolved'" class="nav-link">
          <ion-icon name="checkmark-circle-outline"></ion-icon> Resolvidos
        </router-link></li>
        <li><router-link :to="'/not-resolved'" class="nav-link">
          <ion-icon name="close-circle-outline"></ion-icon> Não resolvidos
        </router-link></li>
        <li><router-link :to="'/no-answer-yet'" class="nav-link">
          <ion-icon name="timer-outline"></ion-icon> Nenhuma resposta ainda
        </router-link></li>
        <li><router-link :to="'/your-question'" class="nav-link">
          <ion-icon name="help-outline"></ion-icon> Sua pergunta
        </router-link></li>
        <li><router-link :to="'/your-answers'" class="nav-link">
          <ion-icon name="document-outline"></ion-icon> Suas respostas
        </router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  methods: {
    createDiscussion() {
      this.$router.push('/post');
    }
  }
}
</script>

<style scoped>
.inner-sidebar {
  width: 250px;
  background-color: #fff;
  margin-right: 20px;
  margin-top: 20px;
}

.inner-sidebar-header {
  padding: 1rem 0;
}

.btn-discussion {
  display: flex;
  align-items: center;
  background-color: #000;
  color: #fff;
  height: 50px;
  padding: 0 10px;
  width: 100%;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

.btn-discussion:hover {
  background-color: #00ce81;
}

.btn-discussion ion-icon {
  font-size: 20px;
  margin-right: 5px;
}

.inner-sidebar-body {
  overflow-y: auto;
  height: calc(100vh - 56px);
  margin-top: 20px;
}

.nav-pills {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-link {
  display: flex;
  align-items: center;
  height: 50px;
  padding: 0 10px;
  color: #000;
  text-decoration: none;
  transition: background-color 0.3s, color 0.3s;
  border-radius: 0 !important;
}

.nav-link ion-icon {
  font-size: 20px;
  margin-right: 10px;
}

.nav-link.active {
  background-color: #000;
  color: #fff;
  border-radius: 0 !important;
}

.nav-link:hover {
  background-color: #00ce81;
  color: #fff;
}

@media screen and (max-width: 790px) {
  .inner-sidebar {
    width: 100%;
    padding: 0 8px;
    margin: 0 auto;
  }

  .inner-sidebar-header {
    margin-top: 20px !important;
    padding: 0 !important;
  }

  .inner-sidebar-body {
    height: auto;
  }
}
</style>
