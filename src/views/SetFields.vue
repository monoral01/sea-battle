<template>
  <div>
    <div class="field-left">
      <form>
        <button id = "back"  @click="$router.push('/')">
          <p>Назад</p>
        </button>
      </form>
    </div>
    <div v-show = "isGameStarted" class = "field-right">
      <p>Игра началась!{{getField}}</p>
    </div>
  </div>
</template>
<script>
  export default {
    name: "App",
    data(){
      return {
        isGameStarted:false
      };
    },
    methods:{
      getField:function(){
        return this.isGameStarted = 'biba';
      }
    }
  };
</script>