<template>
  <div id="calculateWrapper">
    <div class="inputtaker">
      <p>Entry price $...</p>
      <input type="text" v-model="price" />
    </div>
    <div class="inputtaker">
      <p>Current ATR $...</p>
      <input type="text" v-model="baseATR" />
    </div>

    <div class="inputtaker">
      <p>Custom ATR level...</p>
      <input type="text" v-model="customATR" />
    </div>

</template>

<script>
export default {
  computed: {
    customATR: {
      get() {
        return this.$store.getters.getCustomATR;
      },

      set(value) {
        this.$store.commit("setCustomATR", value);
      },
    },

    portfoyBuyuk: {
      get() {
        return this.$store.getters.getPortfoyBuyuk;
      },

      set(value) {
        this.$store.commit("setPortfoyBuyuk", value);
      },
    },

    baseATR: {
      get() {
        return this.$store.getters.getBaseATR;
      },

      set(value) {
        this.$store.commit("setBaseATR", value);
      },
    },
    price: {
      get() {
        return this.$store.getters.getPrice;
      },

      set(value) {
        this.$store.commit("setPrice", value);
      },
    },
  },
};
</script>

<style>
#calculateWrapper {
  display: flex;
  padding-top: 49px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
  background-color: rgb(247, 247, 247);
  z-index: 999;
}

.inputtaker {
  display: flex;
  width: 350px;
  margin-bottom: 2rem;
}

.inputtaker p {
  width: 50%;
}
.inputtaker input {
  width: 50%;
  outline: none;
  transition: 0.7s;
}

.inputtaker input:hover {
  border: 2px solid rgb(153, 0, 133);
  border-radius: 2px;
}
</style>



