<template>
<div>
<div id='choice'>
<label for='fchoice'>Enter Your Favourite Food</label>
<input type='text' id='fchoice' v-model="choice" @input="getResults">
<br><br>
<p v-if='length()>1'>We have {{length()}} types of {{this.choice}} in our recipes</p>
<p v-else-if='length()==1'>We have {{length()}} type of {{this.choice}} in our recipes</p>
<p v-else-if='this.choice==""'>Waiting For Your Input</p>
<p v-else>Sorry, {{this.choice}} is not in our recipe</p>
</div><br>
<div id='result'>
<div v-for="f in food" :key="f.idMeal">
<span id='strmeal'>{{f.strMeal}}</span><br>
<span id='strtitle'>Country of Origin:</span> {{f.strArea}}<br>
<span id='strtitle'>Ingredients:</span>
{{comma(f.strIngredient1)}}
{{comma(f.strIngredient2)}}
{{comma(f.strIngredient3)}}
{{comma(f.strIngredient4)}}
{{comma(f.strIngredient5)}}
{{comma(f.strIngredient6)}}
{{comma(f.strIngredient7)}}
{{comma(f.strIngredient8)}}
{{comma(f.strIngredient9)}}
{{comma(f.strIngredient10)}}
{{comma(f.strIngredient11)}}
{{comma(f.strIngredient12)}}
{{comma(f.strIngredient13)}}
{{comma(f.strIngredient14)}}
{{comma(f.strIngredient15)}}
{{comma(f.strIngredient16)}}
{{comma(f.strIngredient17)}}
{{comma(f.strIngredient18)}}
{{comma(f.strIngredient19)}}
{{comma(f.strIngredient20)}}
<br><span id='strtitle'>Cooking Instructions:</span> {{f.strInstructions}} <hr><br>
</div>
 </div>
<!--<img :src='lin'>-->
</div>
</template>
<script>
import axios from 'axios'
export default ({
  data () {
    return {
      food: {},
      choice: '',
      lin: 'https://www.cbronline.com/wp-content/uploads/2016/06/what-is-URL-770x503.jpg'
    }
  },
  methods: {
    getResults () {
      if (this.choice.length > 3) {
        axios
          .get('https://www.themealdb.com/api/json/v1/1/search.php?s=' + this.choice)
          .then(response => (this.food = response.data.meals))
          .catch(err => console.log('error adalah' + err))
      }
    },
    length () {
      if (this.food === null) {
        return 0
      } else {
        return this.food.length
      }
    },
    comma (ingerdients) {
      if ((ingerdients !== '') && (ingerdients !== null)) {
        return ingerdients + ',' + ' '
      } else {
        return ''
      }
    }

  },
  watch: {
    choice: function (newChoice) {
      if (newChoice.length > 3) {
        this.getResults()
      }
    }
  },
  created () {
    if (this.food != null) {
      return this.food
    } else {
      console.log('food not found')
    }
  }

})

</script>

<style>
#strmeal{
  color:darkmagenta;
  -webkit-text-stroke: 0.5px magenta;
  font-size: large;
  font-weight: bold
}
#strtitle{
  font-weight:bold;
  color:darkblue;
  background-color:#FFFF00;
}
#choice{
  font-size: 20px;
  font-weight: bold;
  background-color:darkblue ;
  color:ghostwhite;
  margin-left: 1cm;
  padding:0.5cm;
  width: 40cm
}
#result{
  margin-left: 1cm;
  padding:0.2cm;
  width: 40cm;
  background-color:wheat;
}
</style>
