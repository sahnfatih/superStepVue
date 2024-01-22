<template>
  <div class="shopping-cart">
    <h2>Sepetim</h2>
    <p>{{ shoppingCartStatus }}</p>

    <div class="image-boxes">
      <div v-for="brand in favoriteBrands.slice(0, 6)" :key="brand.id" class="image-box">
        <router-link :to="`/favorite-brands/${brand.id}`">
          <img :src="brand.image" :alt="brand.name" />
        </router-link>
      </div>
    </div>

    <router-link to="/" class="view-popular-link">Çok Satanları Görüntüle</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shoppingCartStatus: "Sepetiniz şu anda boş.",
      favoriteBrands: [
        { id: 1, name: "ADİDAS", image: "https://akn-ss.a-cdn.akinoncloud.com/cms/2021/02/09/69568e34-3b87-438c-96d0-dc90666c8146.jpg" },
        { id: 2, name: "NIKE", image: "https://akn-ss.a-cdn.akinoncloud.com/cms/2021/02/09/b367a448-b837-4b3d-a32e-194b2aa093dc.jpg" },
        { id: 3, name: "VANS", image: "https://akn-ss.a-cdn.akinoncloud.com/cms/2021/02/09/159d98e6-dfa0-4240-ae5c-6014b03f6ad1.jpg" },
        { id: 4, name: "LACOSTE", image: "https://akn-ss.a-cdn.akinoncloud.com/cms/2021/02/09/472a40ef-b1f8-4c7f-b4e6-8286af411007.jpg" },
        { id: 5, name: "SKECHERS", image: "https://akn-ss.a-cdn.akinoncloud.com/cms/2021/02/09/293782df-990a-479c-a96f-78be34562438.jpg" },
        { id: 6, name: "PUMA", image: "https://akn-ss.a-cdn.akinoncloud.com/cms/2021/02/09/1360aa28-71fb-4e32-b64b-15a10c77ad65.jpg" },
      ],
    };
  },
};
</script>

<style scoped>
.shopping-cart {
  text-align: center;
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
  background-color: whitesmoke;
}

.view-popular-link {
  display: block; 
  margin-top: 10px;
  margin-bottom: 20px; 
  padding: 8px 16px;
  background-color: black;
  color: white;
  text-decoration: none;
  border-radius: 0px;
}
</style>
