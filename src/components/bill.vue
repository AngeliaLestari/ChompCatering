<template>
  <div>
    <h2>Summary of Your Selection</h2><br>
    <p>Order On: {{orderdate()}}</p>
    <p>Main Menu: {{this.$parent.$options.methods.properCase(this.main)}}</p>
    <p>Meat: {{this.$parent.$options.methods.properCase(this.meat)}}</p>
    <p>Vegetable: {{this.$parent.$options.methods.properCase(this.vegetable)}}</p>
    <p>Dessert: {{this.$parent.$options.methods.properCase(this.dessert)}}</p>
   <p>Quantity Ordered: {{this.quantity}}</p>
   <p>TOTAL BILL: ${{totalBill()}}</p>
    <p>TOTAL BILL W GST: ${{billwithGST()}}</p>
  </div>
</template>
<script>
export default {
  props: ['main', 'meat', 'vegetable', 'dessert', 'quantity', 'harga'],
  data () {
    return {
      billed: 0
    }
  },
  methods: {

    orderdate: function () {
      var today = new Date()
      var monthname = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      var monthorder = monthname[(today.getMonth())]
      today = String(today.getDate()) + ' ' + monthorder + ' ' + String(today.getFullYear())
      return today
    },
    totalBill: function () {
      if (this.main !== ' ') {
        this.billed += this.harga[0].price
      }
      if (this.meat !== ' ') {
        this.billed += this.harga[1].price
      }
      if (this.vegetable !== ' ') {
        this.billed += this.harga[2].price
      }
      if (this.dessert !== ' ') {
        this.billed += this.harga[3].price
      }

      this.totalb = Math.round((this.billed * this.quantity), 2)
      this.billed = 0
      return this.totalb
    },
    billwithGST: function () {
      var aftergst = Math.round(this.totalb + (this.totalb * 0.07), 2)
      return aftergst
    },
    arry: function () {
      return this.harga[0].type
    }
  }
}

</script>

<style>

</style>
