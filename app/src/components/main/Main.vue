<template>
  <div class="container">
    <div class="main-body">
      <div class="inner-wrapper">
        <div class="inner-sidebar">
          <div class="inner-sidebar-header">
            <button class="btn-discussion" type="button" @click="openModal">
              <ion-icon name="add-circle-outline"></ion-icon> New Discussion
            </button>
          </div>
          <div class="inner-sidebar-body">
            <div class="sidebar-content">
              <nav class="nav-pills">
                <a href="#" class="nav-link active">
                  <ion-icon name="apps-outline"></ion-icon> All Threads
                </a>
                <a href="#" class="nav-link">
                  <ion-icon name="calendar-outline"></ion-icon> Popular this week
                </a>
                <a href="#" class="nav-link">
                  <ion-icon name="chatbubbles-outline"></ion-icon> Popular all time
                </a>
                <a href="#" class="nav-link">
                  <ion-icon name="checkmark-circle-outline"></ion-icon> Solved
                </a>
                <a href="#" class="nav-link">
                  <ion-icon name="close-circle-outline"></ion-icon> Unsolved
                </a>
                <a href="#" class="nav-link">
                  <ion-icon name="timer-outline"></ion-icon> No replies yet
                </a>
                <a href="#" class="nav-link">
                  <ion-icon name="help-outline"></ion-icon> Your question
                </a>
                <a href="#" class="nav-link">
                  <ion-icon name="document-outline"></ion-icon> Your answers
                </a>
              </nav>
            </div>
          </div>
        </div>
        <div class="inner-main">
          <div class="inner-main-header">
            <a class="nav-toggle" href="#" @click="toggleSidebar">
              <i class="material-icons">arrow_forward_ios</i>
            </a>
            <select class="custom-select">
              <option selected>Latest</option>
              <option value="1">Popular</option>
              <option value="3">Solved</option>
              <option value="3">Unsolved</option>
              <option value="3">No Replies Yet</option>
            </select>
          </div>

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
                    <a href="#" class="post-title"><strong>How to declare a variable in php?</strong></a>

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
                      <div class="post-stats">
                        <span class="views">19 views</span>
                        <span class="comments">3 comments</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Other cards -->
          </div>
        </div>
      </div>

      <div v-if="isModalOpen" class="modal">
        <div class="modal-dialog">
          <div class="modal-content">
            <form>
              <div class="modal-header">
                <h6 class="modal-title">New Discussion</h6>
                <button type="button" class="close" @click="closeModal">×</button>
              </div>
              <div class="modal-body">
                <div class="form-group">
                  <label for="threadTitle">Title</label>
                  <input type="text" class="form-control" id="threadTitle" placeholder="Enter title" autofocus />
                </div>
                <textarea class="form-control summernote" style="display: none"></textarea>
                <div class="file-upload">
                  <input type="file" id="customFile" multiple />
                  <label for="customFile">Attachment</label>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn-cancel" @click="closeModal">Cancel</button>
                <button type="button" class="btn-submit">Post</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isModalOpen: false,
    };
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    toggleSidebar() {
      // Add logic to toggle sidebar visibility
    },
    toggleCollapse() {
      // Add logic to toggle collapse behavior
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  height: 100vh;
}

.main-body {
  display: flex;
  width: 100%;
}

.inner-wrapper {
  display: flex;
  flex: 1;
}

.inner-sidebar {
  width: 250px;
  background-color: #fff;
}

.inner-sidebar-header {
  padding: 1rem;
}

.btn-discussion {
  display: flex;
  align-items: center;
  background-color: #000;
  color: white;
  padding: 0.8rem 1rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
}

.btn-discussion ion-icon {
  padding-right: 5px;
}

.inner-sidebar-body {
  overflow-y: auto;
  height: calc(100vh - 56px);
}

.sidebar-content {
  padding: 1rem;
}

.nav-pills {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-link {
  display: block;
  height: 50px;
  padding: 0rem 10px;
  display: flex;
  align-items: center;
  color: #000;
  text-decoration: none;
}

.nav-link ion-icon {
  margin-right: 10px;
}

.nav-link.active {
  background-color: #000;
  color: white;
}

a.nav-link:hover {
    background: #00ce81 !important;
    color: white !important;
    border-radius: 0 !important;
  }

.nav-link.active ion-icon {
  font-size: 20px;
}

.inner-main {
  flex: 1;
  padding: 1rem;
}

.inner-main-header {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.nav-toggle {
  display: none;
}

.custom-select {
  margin-right: 1rem;
  width: 200px;
  height: 50px;
  outline: none !important;
  box-shadow: #000;
}

.custom-select:focus {
  border-color: #dddddd;
  outline: 0;
  box-shadow: none !important;
}

.input-icon {
  margin-left: auto;
}

.input-search {
  width: 200px;
}

.inner-main-body {
  display: flex;
  flex-direction: column;
}

.card {
  border: 1px solid #ddd;
  border-radius: 0.25rem;
}

.card-body {
  padding: 1rem;
}

.forum-item {
  display: flex;
  align-items: center;
}

.avatar {
  border-radius: 50%;
  margin-right: 1rem;
  width: 100px;
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
  font-weight: bold;
}

.post-description {
  color: #6c757d;
}

.post-meta {
  display: flex;
  justify-content: space-between;
}

.tags {
  display: flex;
}

.tag {
  background-color: #00ce81;
  color: white;
  border-radius: 1rem;
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
  justify-content: center;
  align-items: center;
}

.modal-dialog {
  background-color: white;
  border-radius: 0.25rem;
  overflow: hidden;
}

.modal-header {
  background-color: #007bff;
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-body {
  padding: 1rem;
}

.form-group {
  margin-bottom: 1rem;
}

.file-upload {
  margin-top: 1rem;
}

.file-upload input[type="file"] {
  display: none;
}

.file-upload label {
  background-color: #007bff;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
}

.modal-footer {
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
}

.btn-cancel {
  background-color: #f8f9fa;
  color: #343a40;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
}

.btn-submit {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
}
</style>
