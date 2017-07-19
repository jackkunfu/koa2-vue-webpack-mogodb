<template>
  <div class="hello">
    <h1>{{name}}</h1>
    <h2>{{description}}</h2>
    <ul>
      <li><a href="#/buy" target="_blank">老坛酸菜牛肉面</a></li>
      <li><a href="#/buy" target="_blank">老坛酸菜牛肉面</a></li>
      <li><a href="#/buy" target="_blank">老坛酸菜牛肉面</a></li>
      <li><a href="#/buy" target="_blank">老坛酸菜牛肉面</a></li>
      <li><a href="#/buy" target="_blank">老坛酸菜牛肉面</a></li>      
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
