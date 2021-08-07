<template id = "main">
  <div id = "left">
      <img src = "../public/ship.png" width = "250" height = "250">
    <div id = "start_text">
     <p>Морской Бой 2021</p>
    </div>
  </div>
  <div id = "right">
    <form><button id = "start">
      <p>Начать</p>
    </button></form>
  
  </div>
</template>
<script>
export default {
  name: "App",
  data(){
    return{
      ticker:"default"
    }
  },
  methods: {
    add(){
      alert("I am working!");
    }
  }
};
</script>
<style src="./style.css"></style>
