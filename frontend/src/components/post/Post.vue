<template>
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
        placeholder="Content here..."
        contenteditable
        @input="updateContent"
        @keydown.tab.prevent="insertTab"
      ></div>
      <div class="tags-container">
        <div class="tags-list">
          <span v-for="(tag, index) in tags" :key="index" class="tag">
            {{ tag }}
            <button type="button" class="remove-tag" @click="removeTag(index)">×</button>
          </span>
        </div>
        <input
          class="tags-input"
          type="text"
          placeholder="Tags"
          v-model="newTag"
          @keyup.enter="addTag"
        >
      </div>
      <button type="submit" class="submit-button">Postar</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "RichTextEditor",
  data() {
    return {
      content: "",
      isFullscreen: false,
      newTag: "",
      tags: [],
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
    // submitPost() {
    //   console.log("Conteúdo do Post:", this.content);
    //   console.log("Tags:", this.tags);
    //   alert("Post publicado com sucesso!");
    //   this.$refs.editor.innerHTML = "";
    //   this.content = "";
    //   this.tags = [];
    //   this.newTag = "";
    // },
    toggleFullscreen() {
      this.isFullscreen = !this.isFullscreen;
      document.body.classList.toggle("editor-fullscreen", this.isFullscreen);
    },
    addTag() {
      const tag = this.newTag.trim();
      if (tag && !this.tags.includes(tag)) {
        this.tags.push(tag);
      }
      this.newTag = "";
    },
    removeTag(index) {
      this.tags.splice(index, 1);
    },
  },
};
</script>

<style scoped>
.editor-container {
  width: 100%;
  margin: 35px auto 0 auto;
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

.tags-container {
  margin-top: 15px;
  padding: 0;
}

.tags-list {
  margin-bottom: 5px;
}

.tag {
  display: inline-block;
  background-color: #e5e7eb;
  color: #1f2937;
  border-radius: 4px;
  padding: 0.2rem 0.5rem;
  margin-right: 5px;
  font-size: 0.9rem;
  position: relative;
}

.remove-tag {
  background: none;
  border: none;
  color: #ff0000;
  cursor: pointer;
  font-size: 1rem;
  line-height: 1;
  position: absolute;
  top: 0;
  right: 0;
  padding: 0 0.3rem;
}

.remove-tag:hover {
  color: #c70000;
}

.tags-input {
  padding: 0.5rem;
  width: 100%;
  background-color: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 0;
}

.tags-input:focus {
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
