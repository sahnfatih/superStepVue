<!-- ShoppingCart.vue -->

<template>
    <div class="shopping-cart">
      <h2>Sepetim</h2>
      <p>{{ shoppingCartStatus }}</p>
  
      <div class="black-container">
        <p>
          <router-link to="/popular-items" class="link-text">Çok Satanları Görüntüle</router-link>
        </p>
  
        
  
        <p>Favori Markalarımıza Göz Atabilirsiniz</p>
  
        <div class="image-boxes">
          <router-link v-for="brand in favoriteBrands" :to="`/favorite-brands/${brand.id}`" :key="brand.id">
            <div class="image-box">
              <img :src="brand.image" :alt="brand.name" />
              <p>{{ brand.name }}</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        shoppingCartStatus: "Sepetiniz şu anda boş.",
        popularItems: [
          { id: 1, name: "Ürün 1", image: "path/to/image1.jpg" },
          { id: 2, name: "Ürün 2", image: "path/to/image2.jpg" },
        ],
        favoriteBrands: [
          { id: 1, name: "Marka 1", image: "path/to/brand1.jpg" },
          { id: 2, name: "Marka 2", image: "path/to/brand2.jpg" },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .shopping-cart {
    text-align: center;
  }
  
  .black-container {
    background-color: white;
    color: white;
    padding: 20px;
    border-radius: 8px;
    margin-top: 20px;
  }
  
  .link-text {
    color: white;
    text-decoration: underline;
  }
  
  .image-boxes {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
  }
  
  .image-box {
    text-align: center;
    cursor: pointer;
    padding: 10px;
    border: 1px solid white;
    border-radius: 8px;
  }
  
  .image-box img {
    width: 100px; 
    height: 100px;
  }
  
  .image-box:hover {
    background-color:whitesmoke;
  }
  </style>
  