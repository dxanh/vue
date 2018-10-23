<template>
    <div>
        <h1>Shopping Cart</h1>
        <ul>
            <li v-for="product in products">
                {{product.title}} - {{product.price | currency }} - {{product.quantity}}

            </li>
        </ul>
        <p>Total: {{total | currency}}</p>
        
        <!-- <button @click="$store.dispatch('checkout')">Checkout</button> -->
        <button @click="checkout">Checkout</button>
        <!-- <p v-if="$store.state.checkoutStatus">{{$store.state.checkoutStatus}}</p> -->
        <p v-if="checkoutStatus">{{checkoutStatus}}</p>
    </div>
</template>

<script>
import { mapState, mapGetter, mapActions, mapGetters } from "vuex";

export default {
  computed: {
    // products() {
    //   return this.$store.getters.cartProducts;
    // },

    // total() {
    //   return this.$store.getters.cartTotal;
    // }

    // Using mapGetters

    ...mapGetters('cart', {
      products: 'cartProducts',
      total: 'cartTotal'
    }),

    ...mapState('cart', {
      // checkoutStatus: "checkoutStatus"
      // checkoutStatus: state => state.cart.checkoutStatus
      checkoutStatus: state => state.checkoutStatus
    })
  },

  // Add methods and mapAction to replace $store.dispatch

  methods: {
    // ...mapActions(["checkout"])
    ...mapActions('cart', ['checkout'])
  }
};
</script>

<style>
</style>

