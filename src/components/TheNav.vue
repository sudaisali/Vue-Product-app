<template>
  <nav class="navbar navbar-dark bg-dark justify-content-between fixed-top">
    <router-link class="navbar-brand mx-5" to="/">ShopNow</router-link>
    <p class="navbar-brand mx-5" @click="toggleCart">Cart
      <span  v-if="cart.itemlength>0"  class="badge">{{ cart.itemlength }}</span></p>
  </nav>

  <!-- Cart modal -->
  <div v-if="isCartOpen" class="modal">
    <div class="modal-content">
     <div v-for="item in items" :key="item.id">
       <div class="container d-flex my-2">
        <img :src="item.image" alt="" width="80" height="80" class="rounded">
        <div class="container d-flex flex-column">
          <h6>{{ item.title }}</h6>
          <h3>Rs :<span class="price">{{ item.price }}</span></h3>
        </div>

       </div>

      </div>
      <!-- Add your cart items here -->
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {useAddToCart} from '../store/addToCart.js'

const cart = ref(useAddToCart())
const isCartOpen = ref(false)

const items = ref(cart.value.CartItems)




const toggleCart = () => {
  isCartOpen.value = !isCartOpen.value
  if (isCartOpen.value) {
    document.body.style.overflow = 'hidden'; 
  } else {
    document.body.style.overflow = 'auto';
  }
}
</script>

<style scoped>

.modal {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.modal-content {
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  margin-top: 65px;
  width: 500px;
  height: 100%;
  position: absolute;
  top: -100;
  right: 0; 
  transition: right 0.3s ease-in-out;
}
.navbar-brand {
  cursor: pointer;
}
.show-modal .modal-content {
  top: 0;
}

.price{
  color: greenyellow;
}
.badge {
  position: absolute;
  width: 20px;
  height: 20px;
  top: 10;
  right: -15;
  background-color: rgba(61, 156, 77, 0.788);
  color: white;
  border-radius: 50%;
 text-align: center;
 padding-left: 1px;
 padding-right: 1px;
 justify-content: center;
  font-size: 10px;
}
</style>
