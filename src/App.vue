<template>
  <div class="productPage uk-container">

    <div class="productContainer">
      <div class="productImage">
        <img :src="image" height="200" width="200">
      </div>

      <div class="productInfo">
        <h1>{{ title }}</h1>
        <p v-if="inStock > 10">In Stock</p>
        <p v-else>Out of Stock</p>
        <ul>
          <li v-for="detail in details" :key="detail"> {{ detail }}</li>
        </ul>
        <div class="colorBox">
          <div
              v-for="(variant, index) in variants"
              :key="variant.id"
              @mouseover="updateVariant(index)"
              class="colorCircle"
              :style="{ backgroundColor: variant.color }">
          </div>
        </div>
        <button
            class="uk-button uk-box-shadow-hover uk-card-hover"
            :class="{buttonDisabled: !inStock}"
            @click="addToCart"
            :disabled="!inStock"
        >{{ addToCartButton }}
        </button>
      </div>

      <div class="cart">
        <a href="" uk-icon="cart"></a>
        <span class="uk-margin-small-left">Cart</span>
        <span class="uk-margin-small-left cartCircle">{{ cart }}</span>
      </div>
    </div>

  </div>
</template>

<script>
import {computed, ref} from "vue";

export default {
  name: "ProductPage",
  components: {},
  setup() {
    const product = ref('Characters')
    const type = ref('Star Wars')
    const selectedVariant = ref(0)
    const details = ref(['collectible', 'ships today', 'movie'])
    const variants = ref([
      {
        id: 1,
        color: '#f5fbfd',
        image: 'https://cdn.pixabay.com/photo/2016/01/02/16/00/star-wars-1118389_1280.png',
        quantity: 20
      },
      {
        id: 2,
        color: 'rgb(2,2,2)',
        image: 'https://cdn.pixabay.com/photo/2016/01/02/16/39/darth-vader-1118454_1280.png',
        quantity: 0
      }, {
        id: 3,
        color: '#0e1f5b',
        image: 'https://cdn.pixabay.com/photo/2017/08/30/16/15/r2d2-2697680_1280.png',
        quantity: 15
      },
      {
        id: 4,
        color: '#d4af37',
        image: 'https://cdn.pixabay.com/photo/2017/08/30/16/15/c-3po-2697682_1280.png',
        quantity: 0
      },
    ])

    const cart = ref(0)
    const addToCartButton = ref('Add to Cart')

    const addToCart = () => {
      cart.value++
      setTimeout(() => {
        addToCartButton.value = 'Add to Cart'
      }, 2000)
      addToCartButton.value = 'Added to Cart'
    }

    const updateVariant = (index) => {
      selectedVariant.value = index
    }

    const title = computed(() => {
      return type.value + ' ' + product.value
    })

    const image = computed(() => {
      return variants.value[selectedVariant.value].image
    })

    const inStock = computed(() => {
      return variants.value[selectedVariant.value].quantity
    })

    return {
      addToCart,
      addToCartButton,
      cart,
      details,
      image,
      inStock,
      product,
      selectedVariant,
      title,
      type,
      updateVariant,
      variants,
    }
  }
}
</script>

<style scoped>

button {
  margin-top: 5rem;
  border-radius: .5rem;
  font-size: 15px;
  cursor: pointer;
  letter-spacing: .03em;
  background-color: #012b48 !important;
  color: #55fbff;
  font-weight: 700;
  max-width: 22rem;
}

button:hover {
  border-color: #ef0b0b;
  box-shadow: #49add3;
  transform: translateY(-0.15em);
  font-weight: bolder;
  background-color: #55fbff !important;
  color: #012b48 !important;
}

/*button::after {*/
/*  background: #f1ff5c;*/
/*}*/

.buttonDisabled {
  background-color: #d8d8d8 !important;
  cursor: not-allowed;
  pointer-events: none;
}

.cart {
  display: flex;
  flex-direction: row;
  border: 0 solid gray;
  height: 15px;
  width: 100px;
  padding: 15px;
  margin: 30px 10px 30px;
  float: right;
  /*background-color: #55fbff;*/
}

.cartCircle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: #012b48;
  color: #55fbff;
}

.colorCircle {
  width: 0.5rem;
  height: 0.5rem;
  border: 1px solid gray;
  border-radius: 50%;
  background-color: #67c25f;
  margin-top: 10px;
  margin-right: 10px;
  padding: 10px;
  cursor: pointer;
}

.colorBox {
  display: flex;
  flex-direction: row;
}


img {
  /*border: 1px solid #d8d8d8;*/
  width: 50%;
  height: 400px;
  margin: 40px;
  padding: 1px;
  /*-webkit-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);*/
  /*-moz-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);*/
  /*box-shadow: 2px 15px 12px rgba(0, 0, 0, 0.57);*/
  /*background-color: #55fbff;*/
  object-fit: cover;
}


.productContainer {
  margin-top: 5rem;
  display: grid;
  grid-template-columns: 40% 1fr 1fr;
}

.productInfo {
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: 20px -9px 20px;
}


</style>
