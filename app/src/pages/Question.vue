<template>
  <div>
    <Navbar />
    <div class="container">
      <div class="main-body">
        <Sidebar />
        <div class="inner-wrapper">
          <Question />
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Navbar from "../components/navbar/Navbar.vue";
import Question from "../components/question/Question.vue";
import Sidebar from "../components/sidebar/Sidebar.vue";

export default {
  name: "QuestionPage",
  components: {
    Navbar,
    Sidebar,
    Question,
  },
};
</script>


<style>
.container {
  display: flex;
  height: 100vh; /*just in desktop mode*/
  padding: 0;
  overflow-y: hidden !important;
}

.main-body {
  display: flex;
  width: 100%;
}

.inner-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style>

