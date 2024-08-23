<template>
    <div class="inner-main-body">
      <div class="card">
        <div class="card-body">
          <div class="forum-item">
            <a href="#" @click="toggleCollapse">
              <img src="../../assets/avatar.svg" class="avatar" alt="User" />
            </a>
            <div class="forum-item-body">
              <div>
                <a href="#" @click="toggleCollapse" class="user-name">Matheus Maldonado</a>
                <p class="post-time">Publicado há 5 minutos</p>
              </div>
              <a href="#" class="post-title"><strong>How to declare a variable in PHP?</strong></a>
              <p class="post-description">
                To declare a variable in PHP, you use the dollar sign ($) followed by the variable name and an
                optional assignment of a value. For example:
              </p>
              <div class="post-meta">
                <div class="tags">
                  <div class="tag">golang</div>
                  <div class="tag">php</div>
                  <div class="tag">java</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-two">
        <div class="card-body">
          <div class="forum-item">
            <a href="#" @click="toggleCollapse">
              <img src="../../assets/avatar.svg" class="avatar" alt="User" />
            </a>
            <div class="forum-item-body">
              <div>
                <a href="#" @click="toggleCollapse" class="user-name">Matheus Maldonado</a>
                <p class="post-time">Publicado há 5 minutos</p>
              </div>
              <p class="post-description">
                To declare a variable in PHP, you use the dollar sign ($) followed by the variable name and an
                optional assignment of a value. For example:
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div :class="{ 'editor-container': !isFullscreen, 'editor-container-fullscreen': isFullscreen }">
    <form @submit.prevent="submitPost">
      <div class="editor-toolbar">
        <button
          type="button"
          class="toolbar-button"
          @click="formatText('bold')"
          :class="{ active: isActive('bold') }"
          title="Negrito"
        >
          <i class="fas fa-bold"></i>
        </button>
        <button
          type="button"
          class="toolbar-button"
          @click="formatText('italic')"
          :class="{ active: isActive('italic') }"
          title="Itálico"
        >
          <i class="fas fa-italic"></i>
        </button>
        <button
          type="button"
          class="toolbar-button"
          @click="formatText('underline')"
          :class="{ active: isActive('underline') }"
          title="Sublinhado"
        >
          <i class="fas fa-underline"></i>
        </button>
        <button
          type="button"
          class="toolbar-button"
          @click="insertLink"
          title="Inserir Link"
        >
          <i class="fas fa-link"></i>
        </button>
        <button
          type="button"
          class="toolbar-button"
          @click="insertImage"
          title="Inserir Imagem"
        >
          <i class="fas fa-image"></i>
        </button>
        <button
          type="button"
          class="toolbar-button"
          @click="formatText('insertUnorderedList')"
          :class="{ active: isActive('insertUnorderedList') }"
          title="Lista Não Ordenada"
        >
          <i class="fas fa-list-ul"></i>
        </button>
        <button
          type="button"
          class="toolbar-button"
          @click="formatText('insertOrderedList')"
          :class="{ active: isActive('insertOrderedList') }"
          title="Lista Ordenada"
        >
          <i class="fas fa-list-ol"></i>
        </button>
        <button
          type="button"
          class="toolbar-button"
          @click="formatText('justifyLeft')"
          title="Alinhar à Esquerda"
        >
          <i class="fas fa-align-left"></i>
        </button>
        <button
          type="button"
          class="toolbar-button"
          @click="formatText('justifyCenter')"
          title="Centralizar"
        >
          <i class="fas fa-align-center"></i>
        </button>
        <button
          type="button"
          class="toolbar-button"
          @click="formatText('justifyRight')"
          title="Alinhar à Direita"
        >
          <i class="fas fa-align-right"></i>
        </button>
        <button
          type="button"
          class="toolbar-button"
          @click="toggleFullscreen"
          :class="{ active: isFullscreen }"
          title="Tela Cheia"
        >
          <i :class="isFullscreen ? 'fas fa-compress' : 'fas fa-expand'"></i>
        </button>
      </div>
      <input class="title-input" type="text" placeholder="Título">
      <div
        ref="editor"
        class="editor-content"
        contenteditable
        @input="updateContent"
        @keydown.tab.prevent="insertTab"
      ></div>
      <button type="submit" class="submit-button">Post</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: "",
      isFullscreen: false,
    };
  },
  methods: {
    formatText(command, value = null) {
      document.execCommand(command, false, value);
    },
    isActive(command) {
      return document.queryCommandState(command);
    },
    insertLink() {
      const url = prompt("Insira o URL:");
      if (url) {
        this.formatText("createLink", url);
      }
    },
    insertImage() {
      const url = prompt("Insira o URL da imagem:");
      if (url) {
        this.formatText("insertImage", url);
      }
    },
    insertTab() {
      document.execCommand("insertHTML", false, "&#009");
    },
    updateContent() {
      this.content = this.$refs.editor.innerHTML;
    },
    submitPost() {
      // Aqui você pode enviar o conteúdo para um servidor ou processá-lo conforme necessário
      console.log("Conteúdo do Post:", this.content);
      alert("Post publicado com sucesso!");
      // Limpar o editor após o envio
      this.$refs.editor.innerHTML = "";
      this.content = "";
    },
    toggleFullscreen() {
      this.isFullscreen = !this.isFullscreen;
      document.body.classList.toggle("editor-fullscreen", this.isFullscreen);
    },
  },
};
</script>

<style scoped>
.inner-main-body {
  display: flex;
  flex-direction: column;
  margin-top: 5px;
}

.card {
  border: 1px solid #ddd;
  border-radius: 0;
  margin-bottom: 20px;
  width: 100%;
}

.card-two {
  border: 1px solid #ddd;
  border-radius: 0;
  margin-bottom: 20px;
}

.card-body {
  padding: 1rem;
}

.forum-item {
  display: flex;
  align-items: start;
}

.avatar {
  border-radius: 50%;
  margin-right: 1rem;
  width: 45px;
}

.forum-item-body {
  flex: 1;
}

.user-name {
  color: #343a40;
  text-decoration: none;
}

.post-time {
  color: #6c757d;
}

.post-title {
  display: block;
  color: #000;
  text-decoration: none;
  font-weight: 500;
}

.post-description {
  color: #000;
  margin-top: 5px;
  cursor: pointer;
}

.post-meta {
  display: flex;
  justify-content: space-between;
}

.tags {
  display: flex;
  cursor: pointer;
}

.tag {
  background-color: #00ce81;
  color: white;
  border-radius: 0;
  padding: 0.25rem 0.5rem;
  margin-right: 0.5rem;
}

.post-stats {
  color: #6c757d;
  display: flex;
  align-items: end;
}

.post-stats .views {
  margin-right: 10px;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-dialog {
  max-width: 500px;
  margin: 1.75rem auto;
}

.modal-content {
  background-color: #fff;
  border-radius: 0.25rem;
  padding: 1rem;
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.modal-title {
  margin: 0;
}

.close {
  font-size: 1.5rem;
  background: none;
  border: none;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
}

.btn-cancel {
  margin-right: 1rem;
}

.editor-container {
  width: 100%;
  padding: 1rem;
  background-color: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 0;
}

.editor-container-fullscreen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 1rem;
  background-color: #ffffff;
  z-index: 1000;
  overflow: hidden;
}

.editor-toolbar {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
  background-color: #ffffff;
  padding: 0.5rem;
  border-radius: 0;
  border: 1px solid #e5e7eb;
}

.toolbar-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: #4b5563;
  border-radius: 4px;
  transition: background-color 0.2s, color 0.2s;
}

.toolbar-button:hover {
  background-color: #00ce81;
  color: #fff;
}

.toolbar-button.active {
  background-color: #3b82f6;
  color: #ffffff;
}

.title-input {
  padding: 1rem;
  height: 45px;
  width: 100%;
  margin-bottom: 15px;
  background-color: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 0;
  overflow: auto;
  font-size: 1rem;
  line-height: 1;
  color: #1f2937;
}

.title-input:focus {
  outline: none !important;
}

.editor-content {
  min-height: 300px;
  padding: 1rem;
  background-color: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 0;
  overflow: auto;
  font-size: 1rem;
  line-height: 1.5;
  color: #1f2937;
}

.submit-button {
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  background-color: #000;
  color: #ffffff;
  border: none;
  width: 120px;
  border-radius: 0;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

.submit-button:hover {
  background-color: #00ce81;
}

.editor-fullscreen .editor-content {
  height: calc(100vh - 200px);
  min-height: unset;
}

.editor-content:focus {
  outline: none !important;
}
</style>
