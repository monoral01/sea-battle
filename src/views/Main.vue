<template>
  <div id="main">
    <div id="left">
      <div id="ship">
        <img src="../../public/ship.png" width="240" height="240" />
      </div>
      <div>
        <p id="start_text">Морской Бой 2021</p>
      </div>
    </div>
    <!--Правая часть: кнопка-->
    <div id="right">
      <div>
        <form>
          <button id="start" @click="$router.push('/setfields')">
            <p>Начать</p>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  background-color: #e1f5fe;
}
#start_text {
  width: 200px;
  line-height: 1.5;
  box-sizing: content-box;
  font-style: normal;
  font-family: "myfont";
  font-weight: normal;
  font-size: 56px;
  color: #01579b;
  text-shadow: -6px 6px 0px #002f6c;
}
#main {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
#left {
  margin-left: 50px;
  justify-content: space-between;
  flex-direction: column;
}
#right {
  margin-right: 100px;
  margin-top: 150px;
  flex-direction: column;
}

#start {
  cursor: pointer;
  font-style: normal;
  font-family: "myfont";
  font-weight: normal;
  font-size: 34px;
  line-height: 52px;
  color: cornsilk;
  background-color: #01579b;
  box-shadow: -3px 3px 0px #002f6c;
}
#back {
  cursor: pointer;
  font-style: normal;
  font-family: "myfont";
  font-weight: normal;
  font-size: 17px;
  line-height: 26px;
  color: cornsilk;
  background-color: #01579b;
  box-shadow: -1.7px 1.7px 0px #002f6c;
}
@font-face {
  font-family: "myfont";
  src: url("../../fonts/myfont.ttf") format("truetype");
}
</style>
