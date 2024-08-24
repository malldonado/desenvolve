<template>
    <div class="inner-main-body">
      <div class="card">
        <div class="card-body">
          <div class="forum-item">
            <a href="#" @click.prevent="toRedirectUser">
              <img src="../../assets/avatar.svg" class="avatar" alt="User" />
            </a>
            <div class="forum-item-body">
              <div>
                <a class="user-name" href="#" @click.prevent="toRedirectUser">Matheus Maldonado</a>
                <p class="post-time">Publicado há 5 minutos</p>
              </div>
              <a href="#" @click.prevent="toRedirectResponse" class="post-title">
                <strong>How to declare a variable in PHP?</strong>
              </a>
              <p href="#" @click.prevent="toRedirectResponse" class="post-description">
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
                  <span class="likes">19 likes</span>
                  <span class="comments">3 comments</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Other cards -->
    </div>
</template>

<script>
export default {
  name: "Search",
  methods: {
    toRedirectResponse() {
      this.$router.push('/response');
    },

    toRedirectUser() {
      this.$router.push('/user');
    }
  }
};
</script>

<style scoped>
.inner-main-body {
  display: flex;
  flex-direction: column;
  margin-top: 35px;
}

.card {
  border: 1px solid #ddd;
  border-radius: 0;
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
  font-size: 16px;
}

.post-time {
  color: #6c757d;
  font-size: 14px;
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

.post-stats .likes {
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

@media screen and (max-width: 790px) {
  .main-body {
    display: block;
  }

  .inner-sidebar-header {
    padding: 0 !important;
  }

  .card {
    margin: 0 5px;
  }

  .post-meta {
    display: block;
  }

  .post-stats {
    margin-top: 15px;
  }
}
</style>
