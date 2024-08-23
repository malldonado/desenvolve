<template>
  <div class="inner-sidebar">
    <header class="inner-sidebar-header">
      <button @click="createDiscussion" class="btn-discussion">
        <ion-icon name="add-circle-outline"></ion-icon>
        New Discussion
      </button>
    </header>
    <nav class="inner-sidebar-body">
      <ul class="nav-pills">
        <li><a href="#" class="nav-link active">
          <ion-icon name="apps-outline"></ion-icon> All Threads
        </a></li>
        <li><a href="#" class="nav-link">
          <ion-icon name="calendar-outline"></ion-icon> Popular this week
        </a></li>
        <li><a href="#" class="nav-link">
          <ion-icon name="chatbubbles-outline"></ion-icon> Popular all time
        </a></li>
        <li><a href="#" class="nav-link">
          <ion-icon name="checkmark-circle-outline"></ion-icon> Solved
        </a></li>
        <li><a href="#" class="nav-link">
          <ion-icon name="close-circle-outline"></ion-icon> Unsolved
        </a></li>
        <li><a href="#" class="nav-link">
          <ion-icon name="timer-outline"></ion-icon> No replies yet
        </a></li>
        <li><a href="#" class="nav-link">
          <ion-icon name="help-outline"></ion-icon> Your question
        </a></li>
        <li><a href="#" class="nav-link">
          <ion-icon name="document-outline"></ion-icon> Your answers
        </a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  methods: {
    createDiscussion() {
      this.$router.push('/question');
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
