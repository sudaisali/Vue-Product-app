import { defineStore } from "pinia";
import { ref, computed } from "vue";

export  const useAddToCart =defineStore('cart',()=>{

    const CartItems = ref([])

    const addToCart = (product) => {
        CartItems.value.push(product);
      };

      const itemlength = computed(()=>{
        return  CartItems.value.length
      })
    
    return{CartItems , addToCart , itemlength}

})