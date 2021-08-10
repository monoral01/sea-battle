<template>
  <div id = "main">
    <div id = "left">
      <div id = "ship">
        <img src = "../../public/ship.png" width = "240" height = "240">
      </div>
      <div id = "start_text">
        <p>Морской Бой 2021</p>
      </div>
    </div>
      <!--Правая часть: кнопка-->
    <div id = "right">
      <div>
        <form><button id = "start" @click="$router.push('/setfields')">
          <p>Начать </p>
        </button></form>
      </div>
    </div>
  </div>
</template>
<style src = "../style.css">
</style>