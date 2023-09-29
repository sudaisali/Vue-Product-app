<template>
    <div class="container">
      <div class="rating-wrap">
        <div class="center">
          <fieldset class="rating">
            <template v-for="starValue in 5"  :key="starValue">
              <input
                type="radio"
                :id="`star${starValue}`"
                name="rating"
                :value="starValue"
                v-model="selectedRating"
                disabled
               
              />
              <label
              :for="`star${starValue}`"
              class="full"
              :title="`${starValue} star(s)`"
              :class="{ 'filled': starValue <= selectedRating }"
            ></label>
            </template>
          </fieldset>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
   import { ref, defineProps} from 'vue'
   const props = defineProps({
     rating:{
        type: Number,
        required: true
     }
   })
   const selectedRating = ref(Math.round(props.rating)) 
 
  </script>
  



<style scoped>
@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css);







.container{
	display: flex;

}

.rating-wrap{
	max-width: 480px;
	
	text-align: center;
}






/*styling star rating*/
.rating{
	border: none;
	float: left;
}

.rating > input{
	display: none;
}

.rating > label:before{
	content: '\f005';
	font-family: FontAwesome;
	margin: 2px;
	font-size: 1.5rem;
	display: inline-block;
	cursor: pointer;
}

.rating > .half:before{
	content: '\f089';
	position: absolute;
	cursor: pointer;
}


.rating > label{
	color: #ddd;
	float: left;
	cursor: pointer;
}
.rating > label.filled {
  color: #e3e62c; /* Change the color for filled stars */
}



</style>