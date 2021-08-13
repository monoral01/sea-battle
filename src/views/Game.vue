<template>
  <div id="battlefield">
    <div id="myfield">
      <p class="fieldtext">Ваше поле</p>
      <table>
        <tr v-for="x in 10" :key="x">
          <td
            id="mycell"
            v-for="y in 10"
            :key="y"
            v-bind:class="{
              emptycell: getCellState(x, y) === '0',
              hitcell: getCellState(x, y) === '1',
              shipcell: getCellState(x, y) === '3',
              shiphit: getCellState(x, y) === '2',
            }"
          ></td>
        </tr>
      </table>
    </div>
    <div id="enemyfield">
      <p class="fieldtext">Поле противника</p>
      <table>
        <tr v-for="x in 10" :key="x">
          <td
            id="enemycell"
            v-for="y in 10"
            :key="y"
            v-bind:class="{
              emptycell:
                getCellState(x, y) === '0' || getCellState(x, y) === '3',
              hitcell: getCellState(x, y) === '1',
              shiphit: getCellState(x, y) === '2',
            }"
          ></td>
        </tr>
      </table>
    </div>
  </div>
</template>
<style>
.fieldtext {
  text-align: center;
  font-style: normal;
  font-family: "myfont";
  font-weight: normal;
  font-size: 17px;
  line-height: 0px;
  color: #01579b;
}
#enemycell {
  cursor: pointer;
  width: 30px;
  height: 30px;
}
#mycell {
  width: 30px;
  height: 30px;
}
#myfield {
  margin-top: 120px;
  margin-left: 30px;
  align-items: center;
}
#enemyfield {
  margin-top: 120px;
  margin-right: 30px;
  align-items: center;
}
#battlefield {
  display: flex;
  justify-content: space-between;
}
.emptycell {
  background-color: #01579b;
}
.shipcell {
  background-color: rgb(151, 145, 145);
}
.shiphit {
  background-color: crimson;
}
.hitcell {
  background-color: #e1f5fe;
}
@font-face {
  font-family: "myfont";
  src: url("../../fonts/myfont.ttf") format("truetype");
}
</style>
<script>
// @ is an alias to /src
export default {
  name: "Game",
  data() {
    return {
      fieldState: {
        ships: [
          [
            {
              x: 5,
              y: 7,
              hit: false,
            },
            {
              x: 5,
              y: 8,
              hit: false,
            },
          ],

          [
            {
              x: 1,
              y: 1,
              hit: true,
            },
            {
              x: 1,
              y: 2,
              hit: true,
            },
          ],
        ],
        hitCells: [
          {
            x: 6,
            y: 2,
          },
        ],
      },
    };
  },
  methods: {
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
