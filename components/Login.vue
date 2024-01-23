<template>
    <h1>Create Account</h1>
    <p><input type="text" placeholder="Email" v-model="email"></p>
    <p><input type="password" placeholder="Password" v-model="password"></p>
    <p><button @click="register">submit</button></p>
    <p><button @click="signInWithGoogle">Google </button></p>
</template>
   
<script setup>

import { ref } from 'vue';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'vue-router';
import { inject } from 'vue';
const email = ref('');
const password = ref('');
const router = useRouter();

const register = async () => {
  try {
    // Firebase'e kayıt ol
    await createUserWithEmailAndPassword(getAuth(), email.value, password.value);
    console.log('Başarıyla kayıt oldunuz.');
    router.push('/cart');
  } catch (error) {
    console.error('Kayıt Hatası:', error.message);
    alert(error.message);
  }
};

const signInWithGoogle = () => {
  
};

</script>
 

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Montserrat:400,600);

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Jost', sans-serif;
}

.button {
    background-color: #0896d3;
    color: #fff;
    text-align: center
}





.datepicker table tr td.today.active:hover {
    color: #fff
}

.datepicker table tr td.active,.datepicker table tr td.active.disabled,.datepicker table tr td.active.disabled:hover,.datepicker table tr td.active:hover {
    background-color: #006dcc;
    background-image: linear-gradient(180deg,#08c,#04c);
    background-repeat: repeat-x;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#08c",endColorstr="#0044cc",GradientType=0);
    border-color: #04c #04c #002a80;
    border-color: rgba(0,0,0,.1) rgba(0,0,0,.1) rgba(0,0,0,.25);
    filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);
    color: #fff;
    text-shadow: 0 -1px 0 rgba(0,0,0,.25)
}

.datepicker table tr td.active.active,.datepicker table tr td.active.disabled,.datepicker table tr td.active.disabled.active,.datepicker table tr td.active.disabled.disabled,.datepicker table tr td.active.disabled:active,.datepicker table tr td.active.disabled:hover,.datepicker table tr td.active.disabled:hover.active,.datepicker table tr td.active.disabled:hover.disabled,.datepicker table tr td.active.disabled:hover:active,.datepicker table tr td.active.disabled:hover:hover,.datepicker table tr td.active.disabled:hover[disabled],.datepicker table tr td.active.disabled[disabled],.datepicker table tr td.active:active,.datepicker table tr td.active:hover,.datepicker table tr td.active:hover.active,.datepicker table tr td.active:hover.disabled,.datepicker table tr td.active:hover:active,.datepicker table tr td.active:hover:hover,.datepicker table tr td.active:hover[disabled],.datepicker table tr td.active[disabled] {
    background-color: #04c
}

.datepicker table tr td.active.active,.datepicker table tr td.active.disabled.active,.datepicker table tr td.active.disabled:active,.datepicker table tr td.active.disabled:hover.active,.datepicker table tr td.active.disabled:hover:active,.datepicker table tr td.active:active,.datepicker table tr td.active:hover.active,.datepicker table tr td.active:hover:active {
    background-color: white
}





.datepicker table tr td span.active,.datepicker table tr td span.active.disabled,.datepicker table tr td span.active.disabled:hover,.datepicker table tr td span.active:hover {
    background-color: #006dcc;
    background-image: linear-gradient(180deg,#08c,#04c);
    background-repeat: repeat-x;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#08c",endColorstr="#0044cc",GradientType=0);
    border-color: #04c #04c #002a80;
    border-color: rgba(0,0,0,.1) rgba(0,0,0,.1) rgba(0,0,0,.25);
    filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);
    color: #fff;
    text-shadow: 0 -1px 0 rgba(0,0,0,.25)
}

.datepicker table tr td span.active.active,.datepicker table tr td span.active.disabled,.datepicker table tr td span.active.disabled.active,.datepicker table tr td span.active.disabled.disabled,.datepicker table tr td span.active.disabled:active,.datepicker table tr td span.active.disabled:hover,.datepicker table tr td span.active.disabled:hover.active,.datepicker table tr td span.active.disabled:hover.disabled,.datepicker table tr td span.active.disabled:hover:active,.datepicker table tr td span.active.disabled:hover:hover,.datepicker table tr td span.active.disabled:hover[disabled],.datepicker table tr td span.active.disabled[disabled],.datepicker table tr td span.active:active,.datepicker table tr td span.active:hover,.datepicker table tr td span.active:hover.active,.datepicker table tr td span.active:hover.disabled,.datepicker table tr td span.active:hover:active,.datepicker table tr td span.active:hover:hover,.datepicker table tr td span.active:hover[disabled],.datepicker table tr td span.active[disabled] {
    background-color: #04c
}



.cf:after,.clearfix:after {
    clear: both
}

.cf:after {
    visibility: hidden;
    display: block;
    font-size: 0;
    content: " ";
    height: 0
}

.clear {
    clear: both
}

img {
    max-width: 100%
}









.campaign-top .container {
    padding: 0
}
 .campaign-top .container img {
    max-width: 100%
}
 .campaign-top a, .campaign-top img {
    display: block
}
.campaign-middle .container {
    padding: 0
}


.auth-container .regiser-form-area {
    display: block
}


.regiser-form-area .account__form--input-grup i {
    top: 8px;
    pointer-events: none
}


@media (max-width: 767px) {
    .auth-tabs {
        margin-bottom:-20px;
        padding: 0;
        z-index: 1
    }

    .auth-tabs .auth-tab-item {
        font-family: 'montserrat';
        font-weight: 200;
        font-size: 22px;
        padding: 20px;
        background-color: #f4f4f4;
        border: 1px solid #fff;
        border-bottom-color: #d4d4d4;
        width: 156px;
        max-width: 43%;
        display: inline-block
    }

    .auth-tabs .auth-tab-item.active {
        background-color: #fff;
        border-color: #d4d4d4;
        border-bottom-color: #fff
    }
}

@media (max-width: 767px) {
    .auth-contents {
        padding:20px
    }
}

@media (max-width: 767px) {
    .auth-tab-content {
        display:none;
        border: 1px solid #d4d4d4;
        padding: 20px !important
    }

    .auth-tab-content.active {
        display: block
    }
}



.row {
    display: flex;
  }
  
  .auth-contents {
    display: flex;
    width: 100%;
  }
  
  .auth-tab-content {
    padding: 20px;
  }












html {
    font-size: 10px;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

body {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 14px;
    line-height: 1.42857143;
    color: #333333;
    background-color: #ffffff;
}

input, button, select, textarea {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
}

a {
    color: #337ab7;
    text-decoration: none;
}

a:hover, a:focus {
    color: #23527c;
    text-decoration: underline;
}

a:focus {
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset: -2px;
}

figure {
    margin: 0;
}

img {
    vertical-align: middle;
}





.container {
    margin-right: auto;
    margin-left: auto;
    padding-left: 5px;
    padding-right: 5px;
}

@media (min-width: 768px) {
    .container {
        width: 750px;
    }
}

@media (min-width: 992px) {
    .container {
        width: 970px;
    }
}

@media (min-width: 1200px) {
    .container {
        width: 1170px;
    }
}


.row {
    margin-left: -5px;
    margin-right: -5px;
}


html {
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
}
button, input, optgroup, select, textarea {
    color: inherit;
    font: inherit;
    margin: 0;
}

button {
    overflow: visible;
}

button, select {
    text-transform: none;
}

button, html input[type="button"], input[type="reset"], input[type="submit"] {
    cursor: pointer;
}

button[disabled], html input[disabled] {
    cursor: default;
}

button::-moz-focus-inner, input::-moz-focus-inner {
    border: 0;
    padding: 0;
}

input {
    line-height: normal;
}

input[type="checkbox"], input[type="radio"] {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0;
}

input[type="number"]::-webkit-inner-spin-button, input[type="number"]::-webkit-outer-spin-button {
    height: auto;
}

input[type="search"] {
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
}

input[type="search"]::-webkit-search-cancel-button, input[type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
}

.auth-form__check a {
    text-decoration: underline
}

.auth-form__check a.no-underline {
    text-decoration: none
}

.auth-form__checklist {
    max-width: 320px;
    font-size: 12px;
    line-height: 2.08;
    margin-top: 20px
}

.auth__form__input {
    border: 1px solid #9b9b9b;
    height: 35px;
    padding-left: 15px
}

.auth__form__input--register {
    padding-left: 15px
}

.auth__form__gender {
    margin-right: 40px !important
}

.orders-email-form-wrapper .auth__form__submit {
    margin-top: 15px
}

.auth__form__gender {
    display: inline;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 14px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    font-family: 'montserrat';
    font-weight: 300
}

.gender__input__style {
    margin-top: 20px
}

.checkmark {
    position: absolute;
    top: -3px;
    left: 0;
    height: 22px;
    width: 22px;
    background-color: #ffffff;
    border: 1px solid #979797;
    border-radius: 50%
}

.checkmark:after {
    content: "";
    position: absolute;
    display: none
}

.auth__form__gender input {
    position: absolute;
    opacity: 0;
    cursor: pointer
}

.auth__form__gender:hover input~.checkmark {
    background-color: #ffffff;
    border: 1px solid #979797
}

.auth__form__gender input:checked~.checkmark {
    background-color: #ffffff;
    border: 1px solid #979797
}

.auth__form__gender input:checked~.checkmark:after {
    display: block
}

.auth__form__gender .checkmark:after {
    top: 6px;
    left: 6px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #4a90e2
}

.regiser-form-area .account__form--input-grup i {
    top: 8px;
    pointer-events: none
}

.column {
    margin-top: 10px
}

.auth__form__proceed {
    border: 1px solid #999;
    line-height: 30px;
    font-weight: 600
}

.auth__form__submit--forget {
    background-color: #000;
    font-weight: 500
}

.auth__form__input-box--register-button {
    display: block;
    margin-top: 0;
    margin-bottom: 15px
}

@media (max-width: 767px) {
    .auth__form__input-box--register-button {
        margin-top:20px;
        margin-bottom: 0
    }
}

.login_sign_up_first_situation {
    display: none
}

.button_line_style {
    line-height: 0;
    float: none
}

.register-container {
    padding: 40px 115px 0 25px !important
}

@media (max-width: 767px) {
    .register-container {
        padding:0 !important
    }

    .register-container .center-text-container.top:before {
        top: 14px
    }
}

.login-container {
    padding: 40px 25px 0 115px !important
}

@media (max-width: 767px) {
    .login-container {
        padding:0 !important
    }
}

.login-header {
    font-size: 26px;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #636363;
    font-family: 'montserrat';
    font-weight: 200;
    text-align: left;
    margin-bottom: 37px
}

@media (max-width: 767px) {
    .login-header {
        margin-bottom:20px
    }
}

.bottom-auth-container {
    border-top: none !important;
    margin: 0 !important;
    padding: 0 !important
}

@media (max-width: 767px) {
    .bottom-auth-container {
        padding:0 20px !important
    }
}

.bottom-auth-container .login-header {
    margin-bottom: 0
}

.bottom-auth-container .guest-checkout-text {
    text-align: left;
    margin-top: 1em;
    color: #000
}

.bottom-auth-container .guest-checkout-text b {
    font-weight: bold
}

.bottom-auth-container .guest-checkout-mobile .login-header,.bottom-auth-container .guest-checkout-mobile .guest-checkout-text {
    text-align: center
}

.bottom-auth-container .guest-checkout-mobile .login-header {
    font-size: 22px
}

.bottom-auth-container .guest-checkout-mobile .auth__form__submit {
    margin-top: 15px
}

.bottom-auth-container.orders-email-content {
    background-color: #f9f9f9;
    padding: 20px !important;
    margin-bottom: 20px !important;
    display: none
}

.bottom-auth-container.orders-email-content.active {
    display: block
}

@media (min-width: 768px) {
    .bottom-auth-container.orders-email-content {
        display:none !important
    }
}

.bottom-auth-container.orders-email-content .login-header {
    text-align: center
}

.bottom-auth-container.orders-email-content .line-bg .text {
    background-color: #f9f9f9
}

.bottom-auth-container.orders-email-content .form-label {
    text-align: left
}

.bottom-auth-container.orders-email-content .auth__form__input {
    background-color: transparent !important;
    outline: none
}

.register-text {
    color: #636363;
    font-size: 12px;
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    font-family: 'montserrat'
}

.register-badge-img {
    font-size: 28px
}
@media (max-width: 767px) {
    .auth-contents {
        padding:20px
    }
}

@media (max-width: 767px) {
    .auth-tab-content {
        display:none;
        border: 1px solid #d4d4d4;
        padding: 20px !important
    }

    .auth-tab-content.active {
        display: block
    }
}
.login-container {
    padding: 40px 25px 0 115px !important
}

@media (max-width: 767px) {
    .login-container {
        padding:0 !important
    }
}
@media (max-width: 767px) { .auth-contents { padding:20px } }

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
    margin-right: auto;
    margin-left: auto;
    padding-left: 5px;
    padding-right: 5px;
}
.akifast-login-button,.akifast-quick-pay {
    position: relative;
    display: flex
}

.akifast-login-button .belt,.akifast-quick-pay .belt {
    position: absolute;
    left: 0;
    background-color: #fff;
    border-radius: 18px;
    padding: 6px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: none;
    top: 50%;
    transform: translateY(-50%);
    z-index: 99
}

@media (max-width: 767px) {
    .akifast-login-button .belt,.akifast-quick-pay .belt {
        padding:4px 5px 4px 7px;
        margin: 1px 23px 1px 0;
        width: 22px;
        height: 18px
    }
}

.akifast-login-button .belt__button,.akifast-quick-pay .belt__button {
    width: 12px;
    height: 12px;
    border-radius: 12px;
    background-color: #d02c2f
}

@media (max-width: 767px) {
    .akifast-login-button .belt__button,.akifast-quick-pay .belt__button {
        background-color:#681618;
        width: 10px;
        height: 10px;
        border-radius: 10px
    }
}
.auth {
    padding: 30px 0;
    font-family: 'montserrat'
}

.auth .tab {
    max-width: 570px;
    width: 100%;
    margin: auto;
    text-align: center
}

.auth .tab .tab-item {
    display: inline-block;
    width: 195px;
    height: 60px;
    font-weight: 600;
    font-size: 16px
}

.auth .tab .tab-item:last-child {
    margin-left: 10px
}

@media (max-width: 767px) {
    .auth .tab .tab-item:last-child {
        margin-left:0
    }
}

.auth .tab .tab-item a {
    padding: 25px 0;
    display: block
}

.auth .tab .tab-item a:focus,.auth .tab .tab-item a:hover {
    text-decoration: none;
    color: inherit
}

.auth .tab .tab-item.active {
    background-color: #ffffff;
    border: solid 1px #d8d8d8;
    border-bottom: none;
    margin-bottom: -2px;
    height: 63px;
    color: #000
}

.auth .tab .tab-item.passive {
    background-color: #f3f3f3;
    color: #9f9f9f
}

@media (max-width: 767px) {
    .auth .tab .tab-item {
        width:135px
    }
}

.auth-container {
    max-width: 570px;
    margin: auto;
    width: 100%
}

.auth-container .form-container {
    padding: 30px 0 0
}

.auth-container .form-container .title {
    font-size: 24px;
    color: #666;
    margin-bottom: 40px;
    text-align: center
}

.auth-container .form-container .text {
    font-size: 14px;
    color: #666;
    margin-bottom: 40px
}

.auth-container .auth__form__bottom {
    margin: 40px 0 0;
    position: relative;
    padding: 0;
    border-top: none !important
}

.auth-container .auth__form__bottom:after {
    content: '';
    display: block;
    clear: both
}

.auth-container .auth__form__bottom .column {
    display: inline-block;
    width: 50%;
    padding: 25px 10px
}

.auth-container .auth__form__bottom .bottom_left {
    float: left;
    border-right: 1px solid #e3e1e1
}

.auth-container .auth__form__bottom .bottom_right {
    float: right
}

.auth-container .auth__form__bottom .bottom_column_center {
    padding: 40px 0;
    width: auto
}

.auth-container .auth__form__bottom .facebook {
    color: #42539d;
    font-weight: 600
}

.auth-container .auth__form__bottom .fa-facebook {
    background-color: #2e4d72;
    color: #fff;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    line-height: 20px;
    margin-right: 10px
}

.auth-container .auth__form__bottom .center-text-container {
    position: absolute;
    top: -28.5px;
    left: 50%;
    border: 1px solid #000;
    border-radius: 50%;
    width: 53px;
    height: 53px;
    margin-left: -26.5px;
    background-color: #000
}

.auth-container .auth__form__bottom .center-text-container .inline {
    line-height: 53px;
    font-size: 12px;
    color: #fff
}

.auth-container .auth__form__input-box {
    display: block;
    max-width: 320px;
    margin: 15px auto 0
}

.auth-container .auth__form__input-box>label {
    display: inline-block;
    font-size: 14px;
    color: #666;
    margin-bottom: 3px
}

.auth-container .auth__form__input-box label.auth__form__gender:first-child {
    margin-right: 20px
}

.auth-container .auth__form__input-box input {
    border-color: #9b9b9b;
    padding: 0 20px;
    font-size: 17px
}

.auth-container .auth__form__input-box .input_phone_size {
    font-size: 13px
}

.auth-container .regiser-form-area {
    display: block
}

.auth_container_checkout {
    max-width: none
}

.auth__form__input-box--text {
    float: right;
    line-height: 60px
}

.auth__form__forget {
    text-align: center;
    color: #4a4a4a;
    text-decoration: underline;
    margin: 0 !important;
    line-height: 46px;
    font-size: 14px;
    font-weight: 400;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: normal;
    font-family: 'montserrat';
    font-weight: 300
}

@media (max-width: 767px) {
    .auth__form__forget {
        text-align:left
    }
}

.auth__form__submit {
    width: 100%;
    height: auto;
    background-color: #d0112b;
    border-radius: none;
    padding: 10px 33px;
    text-transform: uppercase;
    letter-spacing: .5px;
    margin: 0;
    font-family: 'montserrat';
    font-weight: 200
}

.auth__form__submit .icon-mobil_profil {
    font-size: 24px;
    margin-right: 5px
}

@media (min-width: 768px) {
    .auth__form__submit .icon-mobil_profil {
        display:none !important
    }
}

a.auth__form__submit {
    display: block;
    background-color: #000;
    color: #fff !important
}

a.auth__form__submit.button--disabled {
    pointer-events: none;
    opacity: .5
}

.auth__form {
    box-shadow: none;
    min-height: auto
}

.auth__form__error {
    max-width: 320px
}

.auth__form.auth_form_checkout {
    max-width: 375px;
    margin: 0 auto
}

.auth__form__modal-link-text {
    padding-top: 10px;
    font-family: 'montserrat';
    display: block
}

.auth-tabs {
    position: relative;
    bottom: -1px;
    text-align: center
}

.auth-tabs ul {
    font-size: 0
}

.auth-tabs ul li {
    display: inline-block
}

.auth-tabs ul a {
    display: block;
    height: 50px;
    padding-left: 20px;
    padding-right: 20px;
    margin-left: 7px;
    margin-right: 7px;
    color: #000d42;
    font-size: 18px;
    line-height: 50px;
    text-decoration: none;
    border: solid 1px #e3e3e3;
    background-color: #f0ebea
}

.auth-tabs ul a.active {
    border-color: #f0ebea;
    background-color: #fff;
    border-bottom: none
}

.not-visible {
    opacity: 0;
    visibility: hidden;
    position: absolute
}

.auth-form__check a {
    text-decoration: underline
}

.auth-form__check a.no-underline {
    text-decoration: none
}

.auth-form__checklist {
    max-width: 320px;
    font-size: 12px;
    line-height: 2.08;
    margin-top: 20px
}

.auth__form__input {
    border: 1px solid #9b9b9b;
    height: 35px;
    padding-left: 15px
}

.auth__form__input--register {
    padding-left: 15px
}

.auth__form__gender {
    margin-right: 40px !important
}

.orders-email-form-wrapper .auth__form__submit {
    margin-top: 15px
}

.auth__form__gender {
    display: inline;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 14px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    font-family: 'montserrat';
    font-weight: 300
}

.gender__input__style {
    margin-top: 20px
}

.checkmark {
    position: absolute;
    top: -3px;
    left: 0;
    height: 22px;
    width: 22px;
    background-color: #ffffff;
    border: 1px solid #979797;
    border-radius: 50%
}

.checkmark:after {
    content: "";
    position: absolute;
    display: none
}

.auth__form__gender input {
    position: absolute;
    opacity: 0;
    cursor: pointer
}

.auth__form__gender:hover input~.checkmark {
    background-color: #ffffff;
    border: 1px solid #979797
}

.auth__form__gender input:checked~.checkmark {
    background-color: #ffffff;
    border: 1px solid #979797
}

.auth__form__gender input:checked~.checkmark:after {
    display: block
}

.auth__form__gender .checkmark:after {
    top: 6px;
    left: 6px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #4a90e2
}

.regiser-form-area .account__form--input-grup i {
    top: 8px;
    pointer-events: none
}

.column {
    margin-top: 10px
}

.auth__form__proceed {
    border: 1px solid #999;
    line-height: 30px;
    font-weight: 600
}

.auth__form__submit--forget {
    background-color: #000;
    font-weight: 500
}

.auth__form__input-box--register-button {
    display: block;
    margin-top: 0;
    margin-bottom: 15px
}

@media (max-width: 767px) {
    .auth__form__input-box--register-button {
        margin-top:20px;
        margin-bottom: 0
    }
}

.login_sign_up_first_situation {
    display: none
}

.button_line_style {
    line-height: 0;
    float: none
}

.register-container {
    padding: 40px 115px 0 25px !important
}

@media (max-width: 767px) {
    .register-container {
        padding:0 !important
    }

    .register-container .center-text-container.top:before {
        top: 14px
    }
}

.login-container {
    padding: 40px 25px 0 115px !important
}

@media (max-width: 767px) {
    .login-container {
        padding:0 !important
    }
}

.login-header {
    font-size: 26px;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #636363;
    font-family: 'montserrat';
    font-weight: 200;
    text-align: left;
    margin-bottom: 37px
}

@media (max-width: 767px) {
    .login-header {
        margin-bottom:20px
    }
}

.bottom-auth-container {
    border-top: none !important;
    margin: 0 !important;
    padding: 0 !important
}

@media (max-width: 767px) {
    .bottom-auth-container {
        padding:0 20px !important
    }
}

.bottom-auth-container .login-header {
    margin-bottom: 0
}

.bottom-auth-container .guest-checkout-text {
    text-align: left;
    margin-top: 1em;
    color: #000
}

.bottom-auth-container .guest-checkout-text b {
    font-weight: bold
}

.bottom-auth-container .guest-checkout-mobile .login-header,.bottom-auth-container .guest-checkout-mobile .guest-checkout-text {
    text-align: center
}

.bottom-auth-container .guest-checkout-mobile .login-header {
    font-size: 22px
}

.bottom-auth-container .guest-checkout-mobile .auth__form__submit {
    margin-top: 15px
}

.bottom-auth-container.orders-email-content {
    background-color: #f9f9f9;
    padding: 20px !important;
    margin-bottom: 20px !important;
    display: none
}

.bottom-auth-container.orders-email-content.active {
    display: block
}

@media (min-width: 768px) {
    .bottom-auth-container.orders-email-content {
        display:none !important
    }
}

.bottom-auth-container.orders-email-content .login-header {
    text-align: center
}

.bottom-auth-container.orders-email-content .line-bg .text {
    background-color: #f9f9f9
}

.bottom-auth-container.orders-email-content .form-label {
    text-align: left
}

.bottom-auth-container.orders-email-content .auth__form__input {
    background-color: transparent !important;
    outline: none
}

.register-text {
    color: #636363;
    font-size: 12px;
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    font-family: 'montserrat'
}

.register-badge-img {
    font-size: 28px
}

.register-badge-img.icon-truck {
    font-size: 38px
}

.info-container {
    margin-top: 30px !important;
    margin-bottom: 40px !important;
    text-align: center
}

.social-media-icon {
    display: inline;
    margin-top: 5px;
    margin-right: 20px
}

.social-btn {
    border: 2px solid #aab7c6;
    height: 42px;
    margin-bottom: 8px;
    border-radius: 2px;
    box-sizing: border-box
}

.btn-content-fb {
    color: #2e4d72 !important;
    font-size: 14px;
    font-weight: 500 !important;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal
}

.fb-icon {
    font-size: 22px;
    color: #2e4d72;
    margin-right: 20px
}

.auth-margin {
    margin-top: 30px
}

.social-btn-container {
    display: inline-flex;
    align-items: center;
    margin-top: 8px
}

.social-btns {
    display: inline-flex;
    align-items: center;
    margin-top: 10px
}

.center-text-container {
    margin-top: 30px
}

@media (max-width: 767px) {
    .center-text-container:before {
        content:' ';
        width: 118px;
        height: 1px;
        background-color: #ababab;
        position: absolute;
        left: 50%;
        margin-left: -59px
    }
}

.form-label {
    font-family: 'montserrat_semibold';
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    display: block;
    margin-bottom: 4px
}

.date-of-birth-register {
    display: flex
}

.profile_select_wrapper {
    margin-right: 5px;
    width: 100%;
    position: relative
}

.profile_select_wrapper:after {
    content: "\F078";
    position: absolute;
    display: block;
    right: 0;
    top: 15px;
    z-index: -1;
    width: 40px;
    font-family: 'icomoon';
    color: #000;
    font-size: 12px;
    text-align: center;
    font-family: 'montserrat';
    transform: translateY(-50%)
}

.profile_select_wrapper:last-child {
    margin-right: 0
}

.date-of-birth-register__select {
    width: 100%;
    padding-right: 10px;
    padding-left: 10px;
    height: 35px;
    border: 1px solid #9b9b9b;
    font-weight: 200;
    z-index: 2;
    background: transparent !important;
    appearance: none
}

.auth__form__bottom span {
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: .4px;
    text-align: center;
    color: #000000;
    font-family: 'montserrat';
    font-weight: 300 !important
}

.auth__form__bottom a {
    text-decoration: none !important
}

.auth-inline-text {
    padding-bottom: 5px
}

.auth-form__checklist {
    font-family: 'montserrat';
    line-height: 1.5
}

.auth-form__checklist>div {
    margin-bottom: 10px
}

.auth-form__checklist>p {
    margin-bottom: 10px
}

@media (max-width: 767px) {
    .auth-form__checklist input {
        display:inline-block;
        vertical-align: middle
    }
}

@media (max-width: 767px) {
    .auth-form__check {
        padding:5px 0;
        display: block
    }
}

.auth-form__check a {
    font-family: 'montserrat';
    font-weight: 300
}

@media (max-width: 767px) {
    .line-bg {
        position:relative;
        margin-bottom: 15px
    }
}

@media (max-width: 767px) {
    .line-bg:before {
        content:'';
        height: 1px;
        width: 100%;
        position: absolute;
        top: 50%;
        left: 0;
        margin-top: -2px;
        background-color: #d4d4d4
    }
}

@media (max-width: 767px) {
    .line-bg .text {
        padding:0 5px;
        position: relative;
        background-color: #fff;
        z-index: 1
    }
}

.auth-form-permissions-error {
    display: none
}

.button__return {
    border-radius: 3px;
    padding: 10px 30px;
    font-size: 15px;
    color: white;
    font-weight: bold;
    border: 1px solid #000;
    background-color: #000;
    margin-bottom: 10px;
    text-align: center
}

@media (min-width: 768px) {
    .button__return {
        margin-left:10px
    }
}

.button__return[disabled] {
    border-color: #ccc;
    background-color: #ccc
}

.button__return--red {
    background-color: #d0112b;
    color: #fff;
    border-color: #d0112b
}

.easy-return__image {
    width: 120px;
    margin-bottom: 10px
}

@media (max-width: 767px) {
    .easy-return__image {
        width:90px;
        right: 0;
        top: 0
    }
}

.select2-container {
    width: 100% !important;
    font-size: 12px
}

.d-flex {
    display: flex
}

.align-items-center {
    align-items: center
}

.justify-content-between {
    justify-content: space-between
}

.justify-content-center {
    justify-content: center
}

.flex-wrap {
    flex-wrap: wrap
}

.text-right {
    text-align: right
}

.pa-0 {
    padding: 0
}

.mb-4 {
    margin-bottom: 1.5rem
}

.mt-3 {
    margin-top: 1rem
}

.w-100 {
    width: 100%
}

.account-wrapper {
    display: none
}

@media (max-width: 767px) {
    .account-wrapper {
        display:block
    }.select2-container {
        width: 100% !important;
        font-size: 12px
    }
    
    .d-flex {
        display: flex
    }
    
    .align-items-center {
        align-items: center
    }
    
    .justify-content-between {
        justify-content: space-between
    }
    
    .justify-content-center {
        justify-content: center
    }
    
    .flex-wrap {
        flex-wrap: wrap
    }
    
    .text-right {
        text-align: right
    }
    
    .pa-0 {
        padding: 0
    }
    
    .mb-4 {
        margin-bottom: 1.5rem
    }
    
    .mt-3 {
        margin-top: 1rem
    }
    
    .w-100 {
        width: 100%
    }
    
    .account-wrapper {
        display: none
    }
    
    @media (max-width: 767px) {
        .account-wrapper {
            display:block
        }
    }
    
}
@media (max-width: 767px) {
    .auth__form__input-box--register-button {
        margin-top:20px;
        margin-bottom: 0
    }
}

.login_sign_up_first_situation {
    display: none
}

.button_line_style {
    line-height: 0;
    float: none
}
.login-header {
    font-size: 26px;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #636363;
    font-family: 'montserrat';
    font-weight: 200;
    text-align: left;
    margin-bottom: 37px
}

@media (max-width: 767px) {
    .login-header {
        margin-bottom:20px
    }
}

.bottom-auth-container {
    border-top: none !important;
    margin: 0 !important;
    padding: 0 !important
}

@media (max-width: 767px) {
    .bottom-auth-container {
        padding:0 20px !important
    }
}

.bottom-auth-container .login-header {
    margin-bottom: 0
}

.bottom-auth-container .guest-checkout-text {
    text-align: left;
    margin-top: 1em;
    color: #000
}

.bottom-auth-container .guest-checkout-text b {
    font-weight: bold
}

.bottom-auth-container .guest-checkout-mobile .login-header,.bottom-auth-container .guest-checkout-mobile .guest-checkout-text {
    text-align: center
}

.bottom-auth-container .guest-checkout-mobile .login-header {
    font-size: 22px
}

.bottom-auth-container .guest-checkout-mobile .auth__form__submit {
    margin-top: 15px
}

.bottom-auth-container.orders-email-content {
    background-color: #f9f9f9;
    padding: 20px !important;
    margin-bottom: 20px !important;
    display: none
}

.bottom-auth-container.orders-email-content.active {
    display: block
}

@media (min-width: 768px) {
    .bottom-auth-container.orders-email-content {
        display:none !important
    }
}

.bottom-auth-container.orders-email-content .login-header {
    text-align: center
}

.bottom-auth-container.orders-email-content .line-bg .text {
    background-color: #f9f9f9
}

.bottom-auth-container.orders-email-content .form-label {
    text-align: left
}

.bottom-auth-container.orders-email-content .auth__form__input {
    background-color: transparent !important;
    outline: none
}

.register-text {
    color: #636363;
    font-size: 12px;
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    font-family: 'montserrat'
}

.register-badge-img {
    font-size: 28px
}

.register-badge-img.icon-truck {
    font-size: 38px
}

.info-container {
    margin-top: 30px !important;
    margin-bottom: 40px !important;
    text-align: center
}
.center-text-container {
    margin-top: 30px
}

@media (max-width: 767px) {
    .center-text-container:before {
        content:' ';
        width: 118px;
        height: 1px;
        background-color: #ababab;
        position: absolute;
        left: 50%;
        margin-left: -59px
    }
}

.form-label {
    font-family: 'montserrat_semibold';
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    display: block;
    margin-bottom: 4px
}

.date-of-birth-register {
    display: flex
}

.profile_select_wrapper {
    margin-right: 5px;
    width: 100%;
    position: relative
}

.profile_select_wrapper:after {
    content: "\F078";
    position: absolute;
    display: block;
    right: 0;
    top: 15px;
    z-index: -1;
    width: 40px;
    font-family: 'icomoon';
    color: #000;
    font-size: 12px;
    text-align: center;
    font-family: 'montserrat';
    transform: translateY(-50%)
}

.profile_select_wrapper:last-child {
    margin-right: 0
}

.date-of-birth-register__select {
    width: 100%;
    padding-right: 10px;
    padding-left: 10px;
    height: 35px;
    border: 1px solid #9b9b9b;
    font-weight: 200;
    z-index: 2;
    background: transparent !important;
    appearance: none
}



.auth-form__checklist {
    font-family: 'montserrat';
    line-height: 1.5
}

.auth-form__checklist>div {
    margin-bottom: 10px
}

.auth-form__checklist>p {
    margin-bottom: 10px
}

@media (max-width: 767px) {
    .auth-form__checklist input {
        display:inline-block;
        vertical-align: middle
    }
}

@media (max-width: 767px) {
    .auth-form__check {
        padding:5px 0;
        display: block
    }
}

.auth-form__check a {
    font-family: 'montserrat';
    font-weight: 300
}




.tab-title-item.active .tab-title {
    top: 1px;
    color: #A6408F;
    padding: 28px 25px 14px 25px;
    border-right: 1px solid #d8d8d8
}

.tab-title-item.active+.tab-title-item .tab-title {
    border-left: 0 none
}


.date-of-birth-register {
    display: flex
}

.profile_select_wrapper {
    margin-right: 5px;
    width: 100%;
    position: relative
}

.profile_select_wrapper:after {
    content: "\F078";
    position: absolute;
    display: block;
    right: 0;
    top: 15px;
    z-index: -1;
    width: 40px;
    font-family: 'icomoon';
    color: #000;
    font-size: 12px;
    text-align: center;
    font-family: 'montserrat';
    transform: translateY(-50%)
}

.profile_select_wrapper:last-child {
    margin-right: 0
}

.date-of-birth-register__select {
    width: 100%;
    padding-right: 10px;
    padding-left: 10px;
    height: 35px;
    border: 1px solid #9b9b9b;
    font-weight: 200;
    z-index: 2;
    background: transparent !important;
    appearance: none
}




.auth-form__checklist {
    font-family: 'montserrat';
    line-height: 1.5
}

.auth-form__checklist>div {
    margin-bottom: 10px
}

.auth-form__checklist>p {
    margin-bottom: 10px
}

@media (max-width: 767px) {
    .auth-form__checklist input {
        display:inline-block;
        vertical-align: middle
    }
}

@media (max-width: 767px) {
    .auth-form__check {
        padding:5px 0;
        display: block
    }
}



</style>