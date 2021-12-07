<template>
  <div id="finalwrapper">
    <header-comp></header-comp>
    <calculator> </calculator>
    <longshort></longshort>

    <div id="results" v-if="!hasNaN && nullCheck">
      <ul>
        <li v-for="level in levels" :key="level">
          <p v-if="renderLevel(level) == 0"></p>
          <p v-else>Price for {{ level }} ATR : {{ renderLevel(level) }}.</p>
          <p>{{ karZarar(level) }}</p>
        </li>
      </ul>

      <p
        v-if="
          renderLevel($store.getters.getCustomATR) != 0 &&
          $store.getters.getCustomATR != 0 &&
          $store.getters.getCustomATR != null
        "
      >
        Price for the custom ATR ({{ $store.getters.getCustomATR }}) is :
        {{ renderLevel($store.getters.getCustomATR) }}
      </p>

      <p>Max pozisyon buyuklugu: {{ maxPozis }}</p>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Calculator from "./Main.vue";
import LongShort from "./Switch.vue";

export default {
  data: function () {
    return {
      levels: [-2, -1.5, -1, 2, 3, 4],
    };
  },

  methods: {
    renderLevel(level) {
      const atr = Number(this.$store.getters.getBaseATR);
      const price = Number(this.$store.getters.getPrice);
      const isLong = this.$store.getters.getIsLong;

      const result = isLong ? level * atr + price : price - level * atr;

      return result > 0 ? result : 0;
    },

    karZarar(level) {
      const girisFiyati = Number(this.$store.getters.getPrice);
      const buDuzeydekiFiyat = this.renderLevel(level);

      const fark = buDuzeydekiFiyat - girisFiyati;
      let yuzdelik = ((fark / girisFiyati) * 100).toFixed(2);

      const kaaleAlinacak =
        Number(this.maxPozis) > this.$store.getters.getPortfoyBuyuk
          ? this.$store.getters.getPortfoyBuyuk
          : Number(this.maxPozis);

      let fiyatKazanci = (kaaleAlinacak * (yuzdelik / 100)).toFixed(2);

      if (!this.$store.getters.getIsLong) {
        yuzdelik *= -1;
      }

      return `%${yuzdelik} , $${fiyatKazanci}`;
    },
  },

  computed: {
    hasNaN() {
      let evaluate = false;
      this.levels.forEach((level) => {
        if (isNaN(this.renderLevel(level))) evaluate = true;
      });

      return evaluate;
    },
    maxPozis() {
      const portfoyunYuzdeBiri =
        Number(this.$store.getters.getPortfoyBuyuk) * 0.01;

      console.log("yüzdebir" + portfoyunYuzdeBiri);
      const fiyatFarki =
        Number(this.$store.getters.getPrice) - this.renderLevel(-1.5);

      console.log("fiyatfark " + fiyatFarki);

      const alinacakAdet = portfoyunYuzdeBiri / fiyatFarki;

      const result = (
        alinacakAdet * Number(this.$store.getters.getPrice)
      ).toFixed(2);
      return result > 0 ? result : result * -1;
    },
    nullCheck() {
      if (
        this.$store.getters.getPrice == null ||
        this.$store.getters.getPrice == 0 ||
        this.$store.getters.getBaseATR == null ||
        this.$store.getters.getBaseATR == 0
      ) {
        return false;
      } else {
        return true;
      }
    },
  },

  components: {
    "header-comp": Header,
    calculator: Calculator,
    longshort: LongShort,
  },
};
</script>

<style>
* {
  background-color: rgb(247, 247, 247);
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Gowun Dodum", sans-serif;
  font-size: 18.5px;
}

@media screen and (max-width: 350px) {
  * {
    font-size: 16px;
  }

  .inputtaker {
    width: 280px !important;
  }

  .inputtaker input {
    width: 100px !important;
  }
}

#finalwrapper {
  height: 100vh;
  width: 100vw;
  display: block;
}

#results {
  height: 30%;
  text-align: center;
}

#results p {
  font-size: 1.2rem;
  padding-bottom: 3px;
  border-bottom: 1px dashed rgb(187, 187, 187);
}
</style>


