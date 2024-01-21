<template>
    <div class="search-container">
      <div class="search-modal">
        <div class="search-content">
          <input
            v-model="searchQuery"
            @input="handleSearchInput"
            @keyup.enter="performSearch"
            placeholder="Ne aramıştınız?"
            class="search-input"
          />
          <p v-if="searchResultMessage" class="search-result">{{ searchResultMessage }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        searchQuery: "",
        searchResultMessage: "",
      };
    },
    methods: {
      handleSearchInput() {
      },
      performSearch() {
        this.searchResultMessage = `SuperStep Onerileri: "${this.searchQuery}"`;
      },
    },
  };
  </script>
  
  <style scoped>
  .search-container {
    text-align: center;
    margin-top: 20px;
  }
  
  .search-modal {
    display: inline-block;
  }
  
  .search-content {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
  
  .search-input {
    width: 200px;
    padding: 10px;
    margin-bottom: 10px;
  }
  
  .search-submit {
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
  }
  
  .search-result {
    margin-top: 10px;
  }
  </style>
  