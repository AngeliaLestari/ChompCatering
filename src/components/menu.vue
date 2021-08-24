<template>
  <div>
    <div id="title" class="w3-2020-sandstone">
    <h1>{{order}}</h1>
    <h2>Select Details</h2>
    </div>

    <div class="menu">
      <div id="main" class="w3-2020-brilliant-white">
        <label id="foodtitle">MAIN</label>
        <hr>
      <input type="radio" id="friedrice" value="kampong fried rice" v-model="main">
      <label for="friedrice">Kampong Fried Rice</label><br>
      <input type="radio" id="friedbeehoon" value="fried bee hoon" v-model="main">
      <label for="friedbeehoon">Fried BeeHoon</label><br>
      <input type="radio" id="thairice" value="thai pineapple rice" v-model="main">
      <label for="thairice">Thai Pineapple Rice</label><br>
      <input type="radio" id="ramen" value="stried fried superior soyu ramen" v-model="main">
      <label for="ramen">Stired Fried Superior Soyu Ramen</label>
      </div>
      <div id="meat" class="w3-2020-brilliant-white">
      <label id="foodtitle">MEAT</label><hr>
      <input type="radio" id="currychicken" value="nyonya curry chicken" v-model="meat">
      <label for="currychicken">Nyonya Curry Chicken</label><br>
      <input type="radio" id="lemonchicken" value="lemon chicken" v-model="meat">
      <label for="lemonchicken">Lemon Chicken</label><br>
      <input type="radio" id="prawn" value="prawn belacan" v-model="meat">
      <label for="prawn">Prawn Belacan</label><br>
      <input type="radio" id="fish" value="crispy fish" v-model="meat">
      <label for="fish">Crispy Fish</label><br>
     </div>
     <div id="vegetable" class="w3-2020-brilliant-white">
      <label id="foodtitle">VEGETABLE</label><hr>
      <input type="radio" id="xiaobaicai" value="xiao bai bai with mushroom" v-model="vegetable">
      <label for="">Xiao Bai Cai W Mushroom</label><br>
      <input type="radio" id="brocolli" value="brocolli" v-model="vegetable">
      <label for="">Brocolli</label><br>
      <input type="radio" id="spinach" value="spinach with egg" v-model="vegetable">
      <label for="">Spinach with egg</label><br>
      <input type="radio" id="kailan" value="hong kong kai lan" v-model="vegetable">
      <label for="kailan">Hong Kong Kai Lan</label><br>
      </div>
      <div id="pic">
      <img src="@/assets/pinerice.png" width="300" height="300"></div>
      <div id="dessert" class="w3-2019-sweet-lilac">
      <label id=foodtitle>DESSERT</label><hr>
      <input type="radio" id="jelly" value="honey lemon grass jelly" v-model="dessert">
      <label for="jelly">Honey Lemon Grass Jelly</label><br>
      <input type="radio" id="coconut" value="honey sea coconut with longan" v-model="dessert">
      <label for="coconut">Honey Sea Coconut With Longan</label><br>
      <input type="radio" id="chocolate" value="mini chocolate eclair" v-model="dessert">
      <label for="chocolate">Mini Chocolate Eclair</label><br>
      <input type="radio" id="vanilla" value="mini vanilla profiteroles" v-model="dessert">
      <label for="vanilla">Mini Vanilla Profiteroles</label><br>
      </div>
      <div id="priceinfo">
      <div v-if="visible">
          <li v-for='price in prices' :key="price.type">{{properCase(price.type)}}, ${{price.price}}</li><hr>
      </div>
      <h1><a href=# id='checkprice' class="link-success" @click="visible =! visible">CHECK PRICE</a></h1>
       <p>Enter Quantity</p><input type="number" id="quantity" min=0 max=1000 step=1 v-model='quantity'>
      <b-button variant="info" size="lg" id='submit' @click="validation">SUBMIT</b-button>&nbsp;&nbsp;
      <b-button variant="warning" id='reset' size="lg" @click="reset">RESET</b-button><br>
      </div>
    </div><br>
    <div v-if='valid'>
    <div id='summaries'>
    <bill
      :main="main"
      :dessert="dessert"
      :meat="meat"
      :vegetable="vegetable"
      :quantity="quantity"
      :harga="prices">
    </bill>
    </div>
    </div>
    </div>
</template>

<script>
import bill from './bill.vue'
export default {
  components: {
    bill
  },
  data () {
    return {
      order: 'ORDER MENU',
      main: ' ',
      meat: ' ',
      vegetable: ' ',
      dessert: ' ',
      quantity: 0,
      visible: false,
      valid: false,
      prices: [{type: 'main', price: 25.3}, {type: 'meat', price: 15.2}, {type: 'vegetable', price: 10}, {type: 'dessert', price: 8}]
    }
  },
  methods: {
    properCase: function (choosen) {
      if (choosen === ' ') {
        choosen = 'No Selection'
      }
      choosen = choosen.toLowerCase().split(' ')
      for (var i = 0; i < choosen.length; i++) {
        choosen[i] = choosen[i].charAt(0).toUpperCase() + choosen[i].slice(1)
      }
      return choosen.join(' ')
    },

    validation: function () {
      if (this.quantity > 100) {
        alert('Please Contact Main Office For a Special Discount')
        this.valid = false
        return
      }
      if (this.quantity === 0) {
        alert('Please enter a quantity')
        this.valid = false
        return
      }
      if ((this.main === ' ') && (this.meat === ' ') && (this.vegetable === ' ') && (this.dessert === ' ')) {
        alert('You need to select at least one selection')
        this.valid = false
        return
      }
      this.valid = true
    },
    reset: function () {
      this.main = ' '
      this.meat = ' '
      this.vegetable = ' '
      this.dessert = ' '
      this.quantity = 0
      this.valid = false
    }
  }

}

</script>
<style scoped>
#title {
  font-family: oldtown, fantasy;
  text-align: center;
  font-weight:900;
  font-size: 300px;
}
#main {
  display: inline-block;
  width: 30%;
  text-align: left;
  margin-left: 20px;
  border-style:solid;
  border-color: palevioletred;
  border-width: 3px;
  padding-left: 20px;

}
#meat {
  display: inline-block;
  width: 30%;
  text-align: left;
  margin-top: 20px;
  margin-left: 20px;
  border-style:solid;
  border-color: palevioletred;
  border-width: 3px;
  padding-left: 20px;

}

#vegetable
{
  display: inline-block;
  width: 30%;
  margin-top: 20px;
  text-align: left;
  margin-left: 20px;
  border-style:solid;
  border-color: palevioletred;
  border-width: 3px;
  padding-left: 20px;
}
#dessert {
   display: inline-block;
  width: 30%;
  text-align: left;
  margin-left: 10px;
  margin-top: 20px;
  border-style:solid;
  border-color: palevioletred;
  border-width: 3px;
  padding-left: 20px;

}
#priceinfo {
  display: inline-block;
  border-color: yellowgreen;
  border-style:dashed;
  border-width: 3px;
  width: 30%;
  text-align: center;
  font-family: "Comic Sans MS", "Comic Sans", cursive;
  color: rebeccapurple;
  margin-left: 20px;
  margin-top: 20px;
  }
#pic {
  float: left;
  margin-left:20px;
}
#summaries{
  float: right;
  width:50%;
  text-align: center;
  margin-top: 20px;
  border-block-style: dashed;
  background-color: black;
  color: yellow;
}
#foodtitle
{
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  color:blueviolet
}
</style>
