<template>
    <div class="container">
      <div class="main-body">
        <div class="inner-wrapper">
          <!-- Sidebar -->
          <div class="inner-sidebar">
            <div class="sidebar-header">
              <button class="btn-discussion" @click="showModal = true">
                <ion-icon name="add-circle-outline"></ion-icon> Nova Discussão
              </button>
            </div>
            <div class="sidebar-body">
              <nav class="nav-pills">
                <a href="#" class="nav-link" :class="{ active: activeLink === 'all' }" @click="setActiveLink('all')">
                  <ion-icon name="apps-outline"></ion-icon> Todos os Tópicos
                </a>
                <a href="#" class="nav-link" :class="{ active: activeLink === 'weekly' }" @click="setActiveLink('weekly')">
                  <ion-icon name="calendar-outline"></ion-icon> Populares esta semana
                </a>
                <a href="#" class="nav-link" :class="{ active: activeLink === 'all-time' }" @click="setActiveLink('all-time')">
                  <ion-icon name="chatbubbles-outline"></ion-icon> Populares de todos os tempos
                </a>
                <a href="#" class="nav-link" :class="{ active: activeLink === 'resolved' }" @click="setActiveLink('resolved')">
                  <ion-icon name="checkmark-circle-outline"></ion-icon> Resolvidos
                </a>
                <a href="#" class="nav-link" :class="{ active: activeLink === 'unresolved' }" @click="setActiveLink('unresolved')">
                  <ion-icon name="close-circle-outline"></ion-icon> Não resolvidos
                </a>
                <a href="#" class="nav-link" :class="{ active: activeLink === 'no-replies' }" @click="setActiveLink('no-replies')">
                  <ion-icon name="timer-outline"></ion-icon> Sem respostas ainda
                </a>
                <a href="#" class="nav-link" :class="{ active: activeLink === 'your-question' }" @click="setActiveLink('your-question')">
                  <ion-icon name="help-outline"></ion-icon> Sua pergunta
                </a>
                <a href="#" class="nav-link" :class="{ active: activeLink === 'your-answers' }" @click="setActiveLink('your-answers')">
                  <ion-icon name="document-outline"></ion-icon> Suas respostas
                </a>
              </nav>
            </div>
          </div>
  
          <!-- Main Content -->
          <div class="inner-main">
            <div class="main-header">
              <button @click="toggleSidebar" class="toggle-sidebar-btn">
                <i class="material-icons">arrow_forward_ios</i>
              </button>
              <select v-model="selectedFilter" class="custom-select">
                <option value="latest">Últimos</option>
                <option value="popular">Populares</option>
                <option value="resolved">Resolvidos</option>
                <option value="unresolved">Não resolvidos</option>
                <option value="no-replies">Sem respostas ainda</option>
              </select>
              <input type="text" v-model="searchQuery" class="input-search" placeholder="Buscar..." />
            </div>
  
            <div class="main-body-content">
              <div class="card">
                <div class="card-body">
                  <div class="media forum-item">
                    <div class="media-body">
                      <div>
                        <a href="#" class="author">Matheus Maldonado</a>
                        <p class="timestamp">Publicado há 5 minutos</p>
                      </div>
                      <a href="#" class="post-title"><strong>Como declarar uma variável em PHP?</strong></a>
                      <p class="post-description">
                        Para declarar uma variável em PHP, você usa o sinal de dólar ($) seguido
                        pelo nome da variável e uma atribuição opcional de um valor. Por exemplo:
                      </p>
                      <div class="post-footer">
                        <div class="tags">
                          <span class="tag">golang</span>
                          <span class="tag">php</span>
                          <span class="tag">java</span>
                        </div>
                        <div class="post-stats">
                          <span class="views"><i class="far fa-eye"></i> 19</span>
                          <span class="comments"><i class="far fa-comment"></i> 3</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Outros cartões de tópicos -->
            </div>
          </div>
        </div>
      </div>
  
      <!-- Modal -->
      <div v-if="showModal" class="modal-overlay" @click="showModal = false">
        <div class="modal-content" @click.stop>
          <form>
            <div class="modal-header">
              <h6>Nova Discussão</h6>
              <button type="button" class="close-modal" @click="showModal = false">
                <span>&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="form-group">
                <label for="threadTitle">Título</label>
                <input type="text" v-model="newThreadTitle" id="threadTitle" placeholder="Digite o título" />
              </div>
              <textarea v-model="newThreadBody" class="summernote" placeholder="Digite o conteúdo"></textarea>
              <div class="file-upload">
                <input type="file" @change="handleFileUpload" multiple />
                <label for="fileUpload">Anexar arquivos</label>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="cancel-btn" @click="showModal = false">Cancelar</button>
              <button type="button" class="submit-btn" @click="postThread">Postar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showModal: false,
        selectedFilter: 'latest',
        searchQuery: '',
        activeLink: 'all',
        newThreadTitle: '',
        newThreadBody: '',
        files: []
      };
    },
    methods: {
      toggleSidebar() {
        // Toggle sidebar logic
      },
      setActiveLink(link) {
        this.activeLink = link;
      },
      handleFileUpload(event) {
        this.files = Array.from(event.target.files);
      },
      postThread() {
        // Logic to post a new thread
        console.log('New thread posted:', this.newThreadTitle, this.newThreadBody);
        this.showModal = false;
        this.newThreadTitle = '';
        this.newThreadBody = '';
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .main-body {
    display: flex;
  }
  
  .inner-wrapper {
    display: flex;
    width: 100%;
  }
  
  .inner-sidebar {
    width: 250px;
    border-right: 1px solid #ddd;
  }
  
  .sidebar-header {
    padding: 10px;
  }
  
  .btn-discussion {
    background-color: #000;
    color: white;
    border: none;
    padding: 10px;
    text-align: center;
    cursor: pointer;
    width: 100%;
  }

  .btn-discussion ion-icon {
    font-size: 20px;
  }
  
  .sidebar-body {
    padding: 10px;
  }
  
  .nav-pills {
    display: flex;
    flex-direction: column;
  }
  
  .nav-link {
    padding: 10px;
    color: #555;
    text-decoration: none;
  }

  .nav-link ion-icon {
    font-size: 20px !important;
  }
  
  .nav-link.active {
    background-color: #007bff;
    color: white;
  }
  
  .main-header {
    display: flex;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ddd;
  }
  
  .input-search {
    flex: 1;
    margin-left: 10px;
  }
  
  .main-body-content {
    padding: 20px;
  }
  
  .card {
    margin-bottom: 20px;
  }
  
  .card-body {
    padding: 20px;
  }
  
  .forum-item {
    display: flex;
  }
  
  .author {
    font-weight: bold;
  }
  
  .timestamp {
    color: gray;
  }
  
  .post-title {
    font-size: 18px;
    margin: 10px 0;
  }
  
  .post-description {
    color: gray;
  }
  
  .post-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .tags {
    display: flex;
  }
  
  .tag {
    background-color: #00ce81;
    color: white;
    border-radius: 15px;
    padding: 5px 10px;
    margin-right: 5px;
    font-size: 12px;
  }
  
  .post-stats {
    color: gray;
  }
  
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .modal-content {
    background: white;
    border-radius: 8px;
    width: 600px;
    padding: 20px;
    position: relative;
  }
  
  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .close-modal {
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  .file-upload {
    margin-top: 15px;
  }
  
  .file-upload input[type="file"] {
    display: none;
  }
  
  .file-upload label {
    background-color: #007bff;
    color: white;
    padding: 10px;
    cursor: pointer;
    display: inline-block;
    border-radius: 5px;
  }
  
  .cancel-btn {
    background-color: #ddd;
    color: #333;
    border: none;
    padding: 10px;
    cursor: pointer;
  }
  
  .submit-btn {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
  }
  </style>
  