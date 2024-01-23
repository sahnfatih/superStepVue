<template>
    <div class="favorite-products-container">
      <div class="horizontal-line"></div>
      <div class="title">
        <h1>Favori Ürünleriniz</h1>
      </div>
      <div class="content">
        <div class="empty-favorites">
          <div class="black-box" @click="goToHomePage">
            <p>0</p>
          </div>
          <p></p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FavoriteProducts',
    methods: {
      goToHomePage() {
        this.$router.push('/');
      },
    },
  };
  </script>
  
  <style scoped>
  .favorite-products-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
  }
  
  .horizontal-line {
    width: 100%;
    height: 2px;
    background-color: rgba(0, 0, 0, 0.2); 
    margin-bottom: 20px;
  }
  
  .title {
    font-size: 24px;
    font-weight: bold;
  }
  
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }
  
  .empty-favorites {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer; 
  }
  
  .black-box {
    width: 50px;
    height: 50px;
    background-color: black;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  </style>
  