<template>
    <div>
      
      <div class="container p-3 mt-5">
        <div class="row">
          <router-link
            class="col-lg-3 col-md-4 col-6 g-2"
            v-for="product in products"
            :key="product.id"
            :to="{
              name:'product',
              params:{
                id:product.id
              }
            }"
          >
          <div class="d-flex flex-column  card">
  <div class="d-flex align-items-center justify-content-center p-2">
    <img :src="product.image" alt="" class="img">
  </div>
  <div class="">
    <p class="mx-3 title text-truncate">{{ product.title }}</p>
    <TheRating :rating = "product.rating.rate"/>
    <p ><span class="mx-3 price">Price:</span> {{ product.price}} RS</p>
  </div>
</div>
          </router-link>
        </div>
      </div>
    </div>
  </template>

<script setup>
import axios from 'axios'
import { ref,onBeforeMount } from 'vue';
import TheRating from './TheRating.vue';



const products = ref([])



const getProducts =()=>{
    axios.get('https://fakestoreapi.com/products')
    .then(response => products.value = response.data)
}

onBeforeMount(()=>{
    getProducts()
}) 


</script>


<style scoped>

.price{
   font-weight: 600;
   font-size: 20px;
}

.title{
     width:  150px;
     max-width: 200;
     font-weight: 600;
     font-size: 1rem;


    }
    .img{
      width: 150px;
      max-width: 200px;
      height: 200px;
      max-height: 250px;

    }
a{
  text-decoration: none;
}
.myproduct{
  border: 1px solid black;

}
.card {
  /* Add a shadow to the card */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  
}


</style>