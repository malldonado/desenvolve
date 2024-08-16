<template>
    <nav class="pagination-container">
      <ul class="pagination">
        <li :class="['page-item', { 'disabled': currentPage === 1 }]" @click="prevPage">
          <span class="page-link">Anterior</span>
        </li>
        <li
          v-for="page in pagesToShow"
          :key="page"
          :class="['page-item', { 'active': page === currentPage }]"
          @click="goToPage(page)"
        >
          <span class="page-link">
            {{ page }}
            <span v-if="page === currentPage" class="sr-only">(atual)</span>
          </span>
        </li>
        
        <li :class="['page-item', { 'disabled': currentPage === totalPages }]" @click="nextPage">
          <span class="page-link">Próximo</span>
        </li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    props: {
      currentPage: {
        type: Number,
        required: true
      },
      totalPages: {
        type: Number,
        required: true
      }
    },
    computed: {
      pagesToShow() {
        const range = [];
        const start = Math.max(1, this.currentPage - 2);
        const end = Math.min(this.totalPages, this.currentPage + 2);
  
        for (let i = start; i <= end; i++) {
          range.push(i);
        }
  
        return range;
      }
    },
    methods: {
      goToPage(page) {
        if (page >= 1 && page <= this.totalPages && page !== this.currentPage) {
          this.$emit('update:currentPage', page);
        }
      },
      prevPage() {
        if (this.currentPage > 1) {
          this.goToPage(this.currentPage - 1);
        }
      },
      nextPage() {
        if (this.currentPage < this.totalPages) {
          this.goToPage(this.currentPage + 1);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .pagination-container {
    display: flex;
    justify-content: center;
    margin: 20px 0;
  }
  
  .pagination {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .page-item {
    margin: 0 2px;
  }
  
  .page-link {
    display: block;
    padding: 8px 16px;
    text-decoration: none;
    color: #000;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .page-item.disabled .page-link {
    color: #6c757d;
    cursor: not-allowed;
  }
  
  .page-item.active .page-link {
    background-color: #000;
    color: #fff;
    border-color: #000;
  }
  
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
  </style>
  