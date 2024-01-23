<template>
    <div class="product-container">
      <div class="product-image">
        <img src="https://akn-ss.a-cdn.akinoncloud.com/products/2023/10/18/5780254/9241b8eb-f390-435e-923b-2db72dd06646_size1400x1400_quality100.jpg" alt="Product Image" style="width: 100%;" />
      </div>
      <div class="product-info">
        <h1 class="product-title">New Balance 2002R Unisex Lacivert Spor Ayakkabı</h1>
        <h2 class="product-price">6.499 TL</h2>
        <p class="product-detail">Model Numarası: M2002RDO - 483</p>
        <p class="product-detail">Renk Seçenekleri:</p>
        <ul class="color-options">
          <li v-for="color in colors" :key="color">{{ color }}</li>
          <!-- Add other color options here -->
        </ul>
        <p class="product-detail">Beden:</p>
        <div class="size-options">
          <div v-for="size in sizes" :key="size" class="size-box">{{ size }}</div>
          <!-- Add other size options here -->
        </div>
        <button class="add-to-cart-btn" @click="addToCart">Sepete Ekle</button>
        <button class="quick-pay-btn">Hızlı Öde</button>
      </div>
    </div>
  
    <div class="additional-images">
      <div v-for="(image, index) in additionalImages" :key="index" class="additional-image-container">
        <img :src="image.src" :alt="'Additional Image ' + (index + 1)" class="additional-image" />
        <div class="additional-image-info">
          <p>{{ image.info }}</p>
        </div>
      </div>
    </div>
  
    <div class="info-text">
      <p class="additional-info-title">Ek Bilgiler:</p>
      <p class="additional-info">• lorem ipsum</p>
      <p class="additional-info">• lorem ipsum</p>
      <p class="additional-info">• lorem ipsum</p>
      <p class="additional-info">• lorem ipsum</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        colors: ["Lacivert"], // Add other color options here
        sizes: ["37", "40.5", "44.5", "37.5", "41.5", "45", "38", "42", "46.5"], // Add other size options here
        additionalImages: [
          { src: "https://akn-ss.a-cdn.akinoncloud.com/products/2023/10/18/5780254/0aecf6c1-718f-4dc4-9477-14dab844694d_size1400x1400_quality100.jpg", info: "" },
          { src: "https://akn-ss.a-cdn.akinoncloud.com/products/2023/10/18/5780254/82935499-a04b-4c03-8c5d-c386e715464d_size1400x1400_quality100.jpg", info: "" },
          { src: "https://akn-ss.a-cdn.akinoncloud.com/products/2023/10/18/5780254/823db6fe-06c3-4012-bcaa-49942756645f_size1400x1400_quality100.jpg", info: "" },
          { src: "https://akn-ss.a-cdn.akinoncloud.com/products/2023/10/18/5780254/5c9f92d1-7ad2-415f-92de-fc8cbbf9a764_size1400x1400_quality100.jpg", info: "" }
        ]
      };
    },
    methods: {
      addToCart() {
        // Implement your add to cart logic here
        console.log("Item added to cart!");
      }
    }
  };
  </script>
  
  <style scoped>
  .product-container {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 80%;
  }
  
  .product-image {
    flex: 1;
  }
  
  .product-info {
    flex: 1;
    text-align: center;
  }
  
  .product-title {
    font-size: 2rem;
    margin-bottom: 10px;
  }
  
  .product-price {
    font-size: 1.5rem;
    color: red; /* Change the color as needed */
    margin-bottom: 10px;
  }
  
  .product-detail {
    font-size: 1.2rem;
    margin-bottom: 5px;
  }
  
  .color-options {
    list-style-type: none;
    padding: 0;
    margin-bottom: 10px;
  }
  
  .color-options li {
    display: inline-block;
    margin-right: 10px;
  }
  
  .size-options {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 15px;
  }
  
  .size-box {
    margin: 5px;
    padding: 8px;
    border: 1px solid #ccc;
    display: inline-block;
  }
  
  .add-to-cart-btn,
  .quick-pay-btn {
    margin-top: 15px;
    padding: 10px;
    font-size: 1.2rem;
    cursor: pointer;
  }
  
  .add-to-cart-btn {
    background-color: red;
    color: white;
    border: none;
  }
  
  .quick-pay-btn {
    background-color: gray;
    color: white;
    border: none;
  }
  
  .additional-images {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
  
  .additional-image-container {
    width: 48%; /* Adjust as needed */
    position: relative;
  }
  
  .additional-image {
    width: 100%;
    margin-bottom: 10px;
  }
  
  .additional-image-info {
    position: absolute;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.8);
    width: 100%;
    padding: 5px;
  }
  
  .info-text {
    margin-top: 20px;
    text-align: justify;
  }
  
  .additional-info-title {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }
  
  .additional-info {
    font-size: 1.2rem;
    margin-bottom: 5px;
  }
  </style>
  