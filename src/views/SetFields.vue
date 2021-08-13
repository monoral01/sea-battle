<template>
  <div id="main">
    <div id="field-left">
      <div>
        <form>
          <button id="back" @click="$router.push('/')">
            <p>Назад</p>
          </button>
        </form>
      </div>
      <div>
        <table id="field">
          <tr v-for="x in 10" :key="x">
            <td
              id="mycell"
              v-for="y in 10"
              :key="y"
              v-bind:class="{
                emptycell:
                  getCellState(x, y) === '0' ||
                  getCellState(x, y) === '3' ||
                  getCellState(x, y) === '1' ||
                  getCellState(x, y) === '2',
              }"
            ></td>
          </tr>
        </table>
      </div>
    </div>
    <div id="field-right">
      <div>
        <img width="82" height="102"
        src="../../public/player_logo.png" />
      </div>
      <div id="number"><p>Игрок №</p></div>
      <div>
        <div class="icon"></div>
        <div class="icon"></div>
      </div>
      <div id = "port">
      </div>
    </div>
  </div>
</template>
<style>
#port{
  
}
#field{
  margin-left: 50px;
  margin-top:100px;
}
#main {
  display: flex;
  justify-content: space-between;
}
#mycell {
  width: 30px;
  height: 30px;
}
.ship {
  background-color: rgb(151, 145, 145);
}
.icon {
}
.player_logo {
}
#field-left{
  flex-direction: column;
}
#field-right {
  margin-right:100px;
}
#number {
  color: #002f6c;
  font-family: "myfont";
  font-size: 30px;
  text-align: center;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  background-color: #e1f5fe;
}
.emptycell {
  background-color: #025696;
}
#main {
  display: flex;
  flex-direction: row;
}
#back {
  cursor: pointer;
  font-style: normal;
  font-family: "myfont";
  font-weight: normal;
  font-size: 17px;
  color: cornsilk;
  background-color: #01579b;
  box-shadow: -1.7px 1.7px 0px #002f6c;
}
@font-face {
  font-family: "myfont";
  src: url("../../fonts/myfont.ttf") format("truetype");
}
</style>
<script>
export default {
  name: "SetFields",
  data() {
    return {
      fieldState: {
        ships: [],
        hitCells: [],
      },
    };
  },
  methods: {
    addShip() {
      const a = 2;
      return a;
    },
    getCellState(x, y) {
      const isHitCell = this.fieldState.hitCells.some(
        (el) => el.x === x && el.y === y
      );
      if (isHitCell) {
        //промах
        return "1";
      }

      for (const ship of this.fieldState.ships) {
        for (const cell of ship) {
          if (cell.x === x && cell.y === y) {
            //целая клетка корабля
            if (!cell.hit) {
              return "3";
            }
            //подбитая клетка корабля
            return "2";
          }
        }
      }
      //пустая клетка
      return "0";
    },
  },
};
</script>
