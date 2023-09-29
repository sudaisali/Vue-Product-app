<template>
   <TheNavVue/>
<div v-if="product" class="container mb-5">
    <div class="d-md-flex justify-content-center align-items-center" style="height: 100vh;">
        <div class="container d-md-flex flex-md-row flex-column">
            <div class="mx-auto mb-3 text-center">
                <img :src="product.image" alt="" class="myimg toppad">
            </div>
            <div class="container">
                <p class="title px-3">{{ product.title }}</p>
                <p class="description px-3">{{ product.description }}</p>
                <TheRating :rating = "product.rating.rate"/>
                <p class="px-3"><span class="price">Price:</span> {{ product.price}} RS</p>
                <button class="btn btn-dark mx-3" @click="addToCart">ADD TO CART</button>
                
            </div>
        </div>
    </div>
</div>





   <div  v-else class="d-flex justify-content-center align-items-center" style="height: 100vh;">
      <div class="spinner-border" role="status">
  <span class="sr-only">Loading...</span>
</div>
</div>



</template>

<script setup>
import { ref, onMounted,defineProps,computed } from 'vue';
import {useAddToCart} from '../store/addToCart.js'
import { onBeforeRouteLeave } from 'vue-router';
import TheRating from '../components/TheRating.vue'
import TheNavVue from '@/components/TheNav.vue';
import axios from 'axios'

const cartStore = ref(useAddToCart())



const props = defineProps({
  id:{
    type:Number,
    required:true,
  }
})

const products = ref([])




const getProducts=() => {
 axios.get('https://fakestoreapi.com/products')
    .then(response => products.value = response.data)
}

onMounted(()=>{
   getProducts()
})

const product = computed(()=>{
  return products.value.find(product =>product.id === props.id)
})
const addToCart =()=>{
   if(product.value){
   cartStore.value.addToCart({
      id:product.value.id,
      title:product.value.title,
      image:product.value.image,
      price:product.value.price
   })
}
}


onBeforeRouteLeave(()=>{
   const answer  = window.confirm('Do you really want to leave?')
   if(!answer) return false
})
</script>

<style scoped>

.price{
   font-weight: 900;
   font-size: 20px;
}

.myimg{

   height: 320px;
   width: 250px;
   
   
}
.card {
  /* Add a shadow to the card */
  width: 450px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  padding: 10px;
  
}
.title{
   font-weight: bold;
   font-size: 35px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
   margin: 0;
}
.description{
   text-align: justify;
}


@media Screen and (max-width:770px){
   .toppad{
      margin-top: 120px;
   }
   .description{
      text-align: start;
   }
   .title{
      font-size: 25px;
   }

   
   .myimg{
      height: 300px;
      width: 250;
   }

}

</style>