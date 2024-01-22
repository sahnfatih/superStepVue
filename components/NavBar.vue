<template>
    <div>
      <header>
        <div class="global-notification"  v-bind:class="{ 'slide-in': slideIn }">
          <p>{{ notificationText }}</p>
        </div>
        <div class="header-row">
          <div class="header-wrapper">
            <div class="header-left">
              <a href="/" class="logo">
                <img
                  loading="lazy"
                  src="https://akn-ss.a-cdn.akinoncloud.com/cms/2023/10/31/137ac835-153e-4420-93a0-23b04851c260.svg"             
                  alt="Super Step"
                  width="200"
                />
              </a>
            </div>
            <div class="header-center-menu">
              <div class="header-center">
                <nav class="navigation">
                  <ul class="menu-list">
                    <li class="menu-list-item" @mouseover="showDropdown('markalar')" @mouseleave="hideDropdown('markalar')">
                        <a href="https://www.superstep.com.tr/markalar-landing" class="menu-link">Markalar</a>
                        <div v-show="isDropdownVisible.markalar" class="dropdown">
                          <div class="dropdown-column">
                            <h3>Tüm Markalar</h3>
                            <ul>
                                <li><a href="#">adidas </a></li>
                                <li><a href="#">nike</a></li>
                                <li><a href="#">Vans</a></li>
                                <li><a href="#">skechers</a></li>
                                <li><a href="#">new balance</a></li>
                                <li><a href="#">timberland</a></li>
                            </ul>
                          </div>
                          <div class="dropdown-column">
                            <h3></h3>
                            <ul>
                                <li><a href="#">adidas </a></li>
                                <li><a href="#">nike</a></li>
                                <li><a href="#">Vans</a></li>
                                <li><a href="#">skechers</a></li>
                                <li><a href="#">new balance</a></li>
                                <li><a href="#">timberland</a></li>
                            </ul>
                          </div>
                          <div class="dropdown-column">
                            <h3></h3>
                            <ul>
                                <li><a href="#">adidas </a></li>
                                <li><a href="#">nike</a></li>
                                <li><a href="#">Vans</a></li>
                                <li><a href="#">skechers</a></li>
                                <li><a href="#">new balance</a></li>
                                <li><a href="#">timberland</a></li>
                            </ul>
                          </div>
                          <div class="dropdown-column">
                            <h3></h3>
                            <ul>
                              <li><a href="#">adidas </a></li>
                              <li><a href="#">nike</a></li>
                              <li><a href="#">Vans</a></li>
                              <li><a href="#">skechers</a></li>
                              <li><a href="#">new balance</a></li>
                              <li><a href="#">timberland</a></li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li class="menu-list-item" @mouseover="showDropdown('erkek')" @mouseleave="hideDropdown('erkek')">
                        <a href="https://www.superstep.com.tr/markalar-landing" class="menu-link">ERKEK</a>
                        <div v-show="isDropdownVisible.erkek" class="dropdown">
                          <div class="dropdown-column">
                            <h3>Ayakkabı</h3>
                            <ul>
                              <li><a href="#">Ayakkabı 1</a></li>
                              <li><a href="#">Ayakkabı 2</a></li>
                              <li><a href="#">Ayakkabı 3</a></li>
                              <li><a href="#">Ayakkabı 4</a></li>
                              <li><a href="#">Ayakkabı 5</a></li>
                              <li><a href="#">Ayakkabı 6</a></li>
                            </ul>
                          </div>
                          <div class="dropdown-column">
                            <h3>Giyim</h3>
                            <ul>
                              <li><a href="#">Giyim 1</a></li>
                              <li><a href="#">Giyim 2</a></li>
                              <li><a href="#">Giyim 3</a></li>
                              <li><a href="#">Giyim 4</a></li>
                              <li><a href="#">Giyim 5</a></li>
                              <li><a href="#">Giyim 6</a></li>
                            </ul>
                          </div>
                          <div class="dropdown-column">
                            <h3>Aksesuar</h3>
                            <ul>
                              <li><a href="#">Aksesuar 1</a></li>
                              <li><a href="#">Aksesuar 2</a></li>
                              <li><a href="#">Aksesuar 3</a></li>
                              <li><a href="#">Aksesuar 4</a></li>
                              <li><a href="#">Aksesuar 5</a></li>
                              <li><a href="#">Aksesuar 6</a></li>
                            </ul>
                          </div>
                          <div class="dropdown-column">
                            <h3>Markalar</h3>
                            <ul>
                              <li><a href="#">Marka 1</a></li>
                              <li><a href="#">Marka 2</a></li>
                              <li><a href="#">Marka 3</a></li>
                              <li><a href="#">Marka 4</a></li>
                              <li><a href="#">Marka 5</a></li>
                              <li><a href="#">Marka 6</a></li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li class="menu-list-item" @mouseover="showDropdown('kadin')" @mouseleave="hideDropdown('kadin')">
                        <a href="https://www.superstep.com.tr/markalar-landing" class="menu-link">KADIN</a>
                        <div v-show="isDropdownVisible.kadin" class="dropdown">
                          <div class="dropdown-column">
                            <h3>Ayakkabı</h3>
                            <ul>
                              <li><a href="#">Ayakkabı 1</a></li>
                              <li><a href="#">Ayakkabı 2</a></li>
                              <li><a href="#">Ayakkabı 3</a></li>
                              <li><a href="#">Ayakkabı 4</a></li>
                              <li><a href="#">Ayakkabı 5</a></li>
                              <li><a href="#">Ayakkabı 6</a></li>
                            </ul>
                          </div>
                          <div class="dropdown-column">
                            <h3>Giyim</h3>
                            <ul>
                              <li><a href="#">Giyim 1</a></li>
                              <li><a href="#">Giyim 2</a></li>
                              <li><a href="#">Giyim 3</a></li>
                              <li><a href="#">Giyim 4</a></li>
                              <li><a href="#">Giyim 5</a></li>
                              <li><a href="#">Giyim 6</a></li>
                            </ul>
                          </div>
                          <div class="dropdown-column">
                            <h3>Aksesuar</h3>
                            <ul>
                              <li><a href="#">Aksesuar 1</a></li>
                              <li><a href="#">Aksesuar 2</a></li>
                              <li><a href="#">Aksesuar 3</a></li>
                              <li><a href="#">Aksesuar 4</a></li>
                              <li><a href="#">Aksesuar 5</a></li>
                              <li><a href="#">Aksesuar 6</a></li>
                            </ul>
                          </div>
                          <div class="dropdown-column">
                            <h3>Markalar</h3>
                            <ul>
                              <li><a href="#">Marka 1</a></li>
                              <li><a href="#">Marka 2</a></li>
                              <li><a href="#">Marka 3</a></li>
                              <li><a href="#">Marka 4</a></li>
                              <li><a href="#">Marka 5</a></li>
                              <li><a href="#">Marka 6</a></li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li class="menu-list-item" @mouseover="showDropdown('cocuk')" @mouseleave="hideDropdown('cocuk')">
                        <a href="https://www.superstep.com.tr/markalar-landing" class="menu-link">ÇOCUK</a>
                        <div v-show="isDropdownVisible.cocuk" class="dropdown">
                          <div class="dropdown-column">
                            <h3>Ayakkabı</h3>
                            <ul>
                              <li><a href="#">Ayakkabı 1</a></li>
                              <li><a href="#">Ayakkabı 2</a></li>
                              <li><a href="#">Ayakkabı 3</a></li>
                              <li><a href="#">Ayakkabı 4</a></li>
                              <li><a href="#">Ayakkabı 5</a></li>
                              <li><a href="#">Ayakkabı 6</a></li>
                            </ul>
                          </div>
                          <div class="dropdown-column">
                            <h3>Giyim</h3>
                            <ul>
                              <li><a href="#">Giyim 1</a></li>
                              <li><a href="#">Giyim 2</a></li>
                              <li><a href="#">Giyim 3</a></li>
                              <li><a href="#">Giyim 4</a></li>
                              <li><a href="#">Giyim 5</a></li>
                              <li><a href="#">Giyim 6</a></li>
                            </ul>
                          </div>
                          <div class="dropdown-column">
                            <h3>Aksesuar</h3>
                            <ul>
                              <li><a href="#">Aksesuar 1</a></li>
                              <li><a href="#">Aksesuar 2</a></li>
                              <li><a href="#">Aksesuar 3</a></li>
                              <li><a href="#">Aksesuar 4</a></li>
                              <li><a href="#">Aksesuar 5</a></li>
                              <li><a href="#">Aksesuar 6</a></li>
                            </ul>
                          </div>
                          <div class="dropdown-column">
                            <h3>Markalar</h3>
                            <ul>
                              <li><a href="#">Marka 1</a></li>
                              <li><a href="#">Marka 2</a></li>
                              <li><a href="#">Marka 3</a></li>
                              <li><a href="#">Marka 4</a></li>
                              <li><a href="#">Marka 5</a></li>
                              <li><a href="#">Marka 6</a></li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li class="menu-list-item" @mouseover="showDropdown('giyim')" @mouseleave="hideDropdown('giyim')">
                        <a href="https://www.superstep.com.tr/markalar-landing" class="menu-link">GİYİM</a>
                        <div v-show="isDropdownVisible.giyim" class="dropdown">
                          <div class="dropdown-column">
                            <h3>Ayakkabı</h3>
                            <ul>
                              <li><a href="#">Ayakkabı 1</a></li>
                              <li><a href="#">Ayakkabı 2</a></li>
                              <li><a href="#">Ayakkabı 3</a></li>
                              <li><a href="#">Ayakkabı 4</a></li>
                              <li><a href="#">Ayakkabı 5</a></li>
                              <li><a href="#">Ayakkabı 6</a></li>
                            </ul>
                          </div>
                          <div class="dropdown-column">
                            <h3>Giyim</h3>
                            <ul>
                              <li><a href="#">Giyim 1</a></li>
                              <li><a href="#">Giyim 2</a></li>
                              <li><a href="#">Giyim 3</a></li>
                              <li><a href="#">Giyim 4</a></li>
                              <li><a href="#">Giyim 5</a></li>
                              <li><a href="#">Giyim 6</a></li>
                            </ul>
                          </div>
                          <div class="dropdown-column">
                            <h3>Aksesuar</h3>
                            <ul>
                              <li><a href="#">Aksesuar 1</a></li>
                              <li><a href="#">Aksesuar 2</a></li>
                              <li><a href="#">Aksesuar 3</a></li>
                              <li><a href="#">Aksesuar 4</a></li>
                              <li><a href="#">Aksesuar 5</a></li>
                              <li><a href="#">Aksesuar 6</a></li>
                            </ul>
                          </div>
                          <div class="dropdown-column">
                            <h3>Markalar</h3>
                            <ul>
                              <li><a href="#">Marka 1</a></li>
                              <li><a href="#">Marka 2</a></li>
                              <li><a href="#">Marka 3</a></li>
                              <li><a href="#">Marka 4</a></li>
                              <li><a href="#">Marka 5</a></li>
                              <li><a href="#">Marka 6</a></li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    <li class="menu-list-item">
                      <a href="/indirim" class="menu-link" >İndirim</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div class="header-right">
              <ul class="menu-list">
                <li class="menu-list-item">
                  <nuxt-link to="/search" class="menu-link">
                    <img
                      loading="lazy"
                      class="icon-favorite-svg"
                      src="https://688268d7.cdn.akinoncloud.com/static_omnishop/super734/assets/img/header-icons/search.svg"                       height="24px"
                    />
                  </nuxt-link>
                </li>
                <div class="user-icon" @click="togglePopup">
                  <img loading="lazy" class="icon-favorite-svg"
                  src="https://688268d7.cdn.akinoncloud.com/static_omnishop/super734/assets/img/header-icons/user.svg"                    height="24px"
                    alt="User">
              
                  <div v-if="popupVisible" class="popup-content" @click.stop>
                    <router-link to="/indirim">
                      <p>Giriş Yap / Üye Ol</p>
                    </router-link>
                  </div>
                </div>
                <li class="menu-list-item">
                  <nuxt-link to="/favori" class="menu-link">
                    <img
                      loading="lazy"
                      class="icon-favorite-svg"
                      src="https://688268d7.cdn.akinoncloud.com/static_omnishop/super734/assets/img/header-icons/heart.svg"
                      height="24px"
                    />
                  </nuxt-link>
                </li>
                <li class="menu-list-item">
                  <nuxt-link to="/cart" class="menu-link">
                    <img
                      loading="lazy"
                      class="icon-favorite-svg"
                      src="https://688268d7.cdn.akinoncloud.com/static_omnishop/super734/assets/img/header-icons/bag.svg"                    />
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  </template>
  
  <script>
  export default {
    name: "Header",
    data() {
      return {
        notificationText: "Siparişin 2-4 iş günü içerisinde kargoya verilecektir.",
        notifications: [
          "2000 TL ve üzeri siparişlerde ücretsiz kargo",
          "Siparişin 1-3 iş günü içerisinde kargoya verilecektir.",
          "3.500 TL ve üzeri alışverişinize 300 Worldpuan üstelik 8 taksit fırsatı"
          
        ],
        currentNotificationIndex: 0,
        slideIn: false,
        isCartMenuOpen: false,
        popupVisible: false,
        isDropdownVisible:{
            markalar: false,
             erkek: false,
            kadin: false,
            cocuk: false,
            giyim: false
            
        }
      };
    },
    mounted() {
      this.setupNotificationTimer();
    },
    methods: {
      setupNotificationTimer() {
    this.showNextNotification(); 
    setInterval(() => {
      this.showNextNotification();
    }, 3500); 
      },
      showDropdown(menu) {
      this.isDropdownVisible[menu] = true;
    },
    hideDropdown(menu) {
      this.isDropdownVisible[menu] = false;
    },
    showNextNotification() {
    this.slideIn = false;
    setTimeout(() => {
      this.currentNotificationIndex = (this.currentNotificationIndex + 1) % this.notifications.length;
      this.notificationText = this.notifications[this.currentNotificationIndex];
      this.slideIn = true;
    }, 500); 
  },
      
      togglePopup() {
      this.popupVisible = !this.popupVisible;
    },
    closePopupOnClickOutside(event) {
      if (!this.$el.contains(event.target)) {
        this.popupVisible = false;
      }
    }
  },
  mounted() {
    document.addEventListener('click', this.closePopupOnClickOutside);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.closePopupOnClickOutside);
  }
     
    }
  </script>
  
  
  
  
  <style scoped>
  @import url(https://fonts.googleapis.com/css?family=Montserrat:400,600);
  
  body {
    margin: 0;
    padding: 0;
  }
  .menu-list-item a.menu-link[href="/indirim"] {
    color: red;
  }
  .dropdown {
    display: none;
    position: absolute;
    background-color: #fff;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    padding: 20px;
    display: flex;
    gap: 20px;
  }
  
  .user-icon {
    position: relative;
    display: inline-block;
  }
  
  .popup-content {
    position: absolute;
    top: 30px;
    right: 0;
    background-color: #f1f1f1;
    padding: 10px;
    border: 1px solid #ccc;
    z-index: 2; 
    width: 150px; 
  }
  
  .popup-content p {
    cursor: pointer; 
  }
  
  .user-icon:hover .popup-content {
    display: block;
  }

  .menu-list-item:hover .dropdown {
    display: flex;
  }

  .dropdown-column {
    flex: 1;
  }

  .dropdown ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .dropdown li {
    padding: 10px;
    border-bottom: 1px solid #eee;
  }

  .dropdown h3 {
    font-size: 18px;
    margin-bottom: 10px;
  }
  .sticky-header {
    position: sticky;
    top: 0;
    z-index: 1000;
    background-color: white; 
  }
  .global-notification {
    transition: opacity 0.5s ease-in-out;
   
  }
  
  
  .slide-in {
    transform: translateY(0);
  }
  
  
  .header-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .header-left,
  .header-right {
    display: flex;
    align-items: center;
  }
  
  .navigation {
    display: flex;
    align-items: center;
  }
  
  .menu-list {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .menu-list-item {
    margin-right: 20px;
  }
  
  .menu-link {
    text-decoration: none;
    color: #333;
  }
  
  .menu-link:hover {
    color: #007bff;
  }
  
  .dropdown {
    position: relative;
    display: inline-block;
    margin-left: auto; 
  }
  
  .dropdown-content {
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    width: 80%; 
    height: 100vh; 
    background-color: #f9f9f9;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }
  
  .dropdown:hover .dropdown-content {
    display: block;
  }
  
  .icon-favorite-svg {
    height: 24px;
  }
  
  
  
  
  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Jost', sans-serif;
  }
  
  ul, ol {
      margin: 0;
      padding: 0;
      list-style: none;
  }
  
  a {
      text-decoration: none;
      color: rgb(255, 255, 255);
  }
  
  h1, h2, h4, h5, h6, p {
      margin: 0;
  }
  
  .container {
      max-width: 1400px;
      width: 100%;
      margin: 0;
  }
  
  /* header */
  .global-notification {
      background-color: #000;
      padding: 3px;
      height: 34px;
      text-align: center;
      font-size: 14px;
      color: #fff;
      padding-top: 5px;
  }
  
  .header-wrapper {
      display: flex;
      align-items: center;
  }
  
  .header-left {
      float: left;
      min-height: 1px;
      padding-left: 10px;
      padding-right: 10px;
      padding-top: 21px;
      vertical-align: baseline;
      margin: 0;
      height: 40px;
      width: 455px;
  }
  
  .header-left .logo {
      margin:0;
      padding: 0;
      border: 0;
  }
  
  .header-row {
      height: 90px;
      align-items: center;
  }
  
  .header-center-menu {
      width: 931px;
  }
  
  .header-center {
      width: 411px;
      height: 50px;
  }
  
  .header-center .navigation .menu-list {
      padding-top: 35px;
      text-transform: uppercase;
      column-gap: 8px;
  }
  
  /* header center */
  .menu-list-item {
      text-align: center;
      float: left;
  }
  
  
  .menu-list .menu-list-item .menu-link {
      display: flex;
      flex-direction: row;
      font-size: 14px;
      color: #000;
      position: relative;
      font-weight: 400;
  }
  
  li {
      display: list-item;
      padding-left: 15px;
  }
  
  ul {
      list-style: none;
  }
  
  /* SezonunTrendleri */
  .imgcontainer {
      width: 16.66666667%;
      min-height: 1px;
      padding-left: 10px;
      padding-right: 10px;
      margin: 0;
      padding: 0;
      border: 0;
      float: left;
      padding-top: 20px;
      padding-bottom: 40px;
  }
  
  .img::after {
      content: "";
      clear: both;
      display: table;
  }
  
  img {
      display: block;
      max-width: 100%;
  }
  
  h3 {
      padding-top: 15px;
      font-size: 34px;
      text-align: center;
      display: block;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
  }
  
  span {
      font: inherit;
      vertical-align: auto;
      font-family: serif;
      font-size: 19px;
      text-align: center;
      text-decoration: none;
     
      margin: 5px 42px;
      padding-left: 35px;
  }
  
  a {
      color: #000;
      text-decoration: none;
  }
  
  a:hover {
      text-decoration: underline;
  }
  
  /* Koleksiyonlar */
  * {
      box-sizing: border-box;
  }
  
  .collection {
      width: 16.66666667%;
      min-height: 1px;
      padding-left: 10px;
      padding-right: 10px;
      margin: auto;
      padding: 0;
      border: 0;
      float: left;
  }
  
  .container-fluid .home-quadr {
      content: "";
      clear: both;
      display: flex;
      margin: 35px 30px;
      box-sizing: border-box;
      column-gap: 20px;
  }
  
  .footer-badges {
      margin: 54px 0;
      width: 1160px;
      height: 169px;
  }
  
  .badges {
      margin-left: -5px;
      margin-right: -55px;
      display: flex;
      width: 1170px;
      height: 169px;
      padding-left: 590px;
      padding-bottom: 220px;
  }
  
  .passing {
      width: 25%;
      width: 292px;
      height: 169px;
      position: relative;
      min-height: 1px;
      padding-left: 10px;
      padding-right: 10px;
  }
  
  .badges-img {
      width: 50px;
      margin: 6px auto 12px;
      display: block;
  }
  
  .badges-title {
      font-size: 17px;
      font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
      text-align: center;
      width: 150px;
      min-height: 46px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
  }
  
  .badges-text {
      font-size: 14px;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      text-align: center;
      padding: 8px 0;
  }
  
  .home-quadr h4 {
      font-size: 24px;
      text-align: center;
      padding: 7px 0 2px 0;
  }
  
  .home-quadr p {
      font-size: 18px;
      height: 42px;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
  }
  
  .home-quadr .medium-button:hover {
      text-decoration: none;
      background: #000;
      color: #fff;
      transition: .3s ease all;
  }
  
  .home-quadr .medium-button {
      border: 1px solid #000;
      padding: 8px 16px;
      display: table;
      margin: 7px auto;
      min-width: 180px;
      text-align: center;
      transition: .3s ease all;
      position: relative;
  }
  
  .right-icon {
      transform: rotate(90deg);
      display: block;
      float: right;
      font-size: 14px;
      color: #000;
      font-weight: bold;
      margin-top: 3px;
      margin-left: 15px;
      transition: .3s ease all;
      position: absolute;
      right: 7px;
      top: 50%;
      margin-top: -7px;
      font-family: 'icomoon' !important;
  }
  
  .slider-home {
      padding-bottom: 50px;
  }
  
  /* footer */
  .footer {
      position: relative;
      margin: 0;
      padding: 0;
      border: 0;
  }
  
  .subscribe {
      background-color: #636363;
      padding: 35px 0;
      text-align: center;
      color: #FFFFFF;
      margin: 0;
      border: 0;
  }
  
  .subscribe-form {
      max-width: 450px;
      margin: 0 auto;
      padding: 0;
      border: 0;
  }
  
  .input-wrapper {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: auto;
  }
  
  .subscribe-title {
      font-weight: 600;
      font-size: 17px;
      margin-bottom: 5px;
      margin: 0;
      padding: 0;
      border: 0;
  }
  
  .subscribe p {
      font-size: 12px;
      font-weight: 200;
      margin-bottom: 10px;
  }
  
  .input-wrapper .subscribe-input {
      flex: 2 1;
      line-height: 35px;
      background-color: #FFFFFF;
      border: solid 1px #e5e5e5;
      display: inline-block;
      vertical-align: middle;
      padding: 0 10px;
      color: black;
  }
  
  .input-wrapper .subscribe-button {
      flex: 1 1;
      line-height: 36px;
      background-color: #000;
      display: inline-block;
      vertical-align: middle;
      font-size: 15px;
      letter-spacing: 2px;
      font-weight: 200;
      text-align: center;
      margin-left: 1px;
      border: 0;
  }
  
  /* Footer Inner */
  .footer-inner {
      color: white;
      font-family: Arial, Helvetica, sans-serif;
  }
  
  .container {
      margin-right: auto;
      margin-left: auto;
      padding-left: 5px;
      padding-right: 5px;
      display: flex;
  }
  
  .footer-inner-item {
      display: flex;
      padding-top: 22px;
      padding-bottom: 24px;
      position: relative;
      min-height: 1px;
      padding-left: 10px;
      padding-right: 10px;
  }
  
  .item-left {
      margin-left: -5px;
      margin-right: -5px;
      margin: 0;
      padding: 0;
      border: 0;
  }
  
  .footer-menu {
      width: 151px;
      height: 201px;
      display: inline-table;
  }
  
  .footer-menu-title {
      font-size: 14px;
      font-weight: 300;
      margin-bottom: 20px;
  }
  
  a:hover {
      text-decoration: underline;
  }
  
  .footer-menu-item {
      display: block;
      font-size: 12px;
      font-weight: 300;
      line-height: 20px;
      color: inherit;
      text-decoration: none;
  }
  
  .menu-bottom {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      width: 859px;
      height: 95px;
  }
  
  .footer-inner-country {
      padding-top: 32px;
      padding-bottom: 24px;
  }
  
  .item-right {
      padding-top: 52px;
      padding-bottom: 24px;
      width: 25%;
  }
  
  .app-download {
      display: block;
      margin: 0 0 45px 20px;
  }
  
  .app-download-box {
      display: flex;
  }
  
  .app-download-img {
      max-width: 100%;
      height: 37px;
      display: block;
  }
  
  .social-box {
      display: block;
      margin: 0 0 30px 20px;
  }
  
  .musteri-hizmetleri {
      font-size: 18px;
      color: #ffffff;
      margin: 45px 0 0 20px;
  }
  
  .social-box-target {
      position: relative;
      display: inline-block;
      vertical-align: middle;
      margin-right: 15px;
      transition: all .2s;
      text-decoration: none !important;
  }
  
  .social-box-target i {
      font-size: 1.538em;
  }
  
  .icon-instagram:before {
      content: "\E906";
  }
  
  </style>
  
  