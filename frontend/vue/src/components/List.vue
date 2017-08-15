<template>
  <div class="list">
    <h1>{{title}}</h1>
    <h2>{{desc}}</h2>
    <ul>
      <li><a href="#/detail?tab=0">陈八两</a></li>
      <li><a href="#/detail?tab=1">卤人甲</a></li>
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
  },
  mounted: function(){
    // alert('render complete')
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