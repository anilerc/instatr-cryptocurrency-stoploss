
<template>
  <div id="container">
    <div id="switchwrap">
      <div
        class="switchs greensw"
        @click="activateLong"
        :class="{ disabled: !nowLong }"
      >
        Long
      </div>
      <div
        class="switchs redsw"
        id="shortswitch"
        @click="activateShort"
        :class="{ disabled: nowLong }"
      >
        Short
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    activateLong() {
      this.$store.commit("setLong");
    },

    activateShort() {
      this.$store.commit("setShort");
    },
  },

  computed: {
    nowLong() {
      return this.$store.getters.getIsLong;
    },
  },
};
</script>



<style>
.disabled {
  background-color: gray !important;
}

#container {
  background-color: rgb(0, 0, 0);
  display: flex;
  justify-content: center;
}

#switchwrap {
  display: flex;
  height: 25px;
  width: 30%;
  text-align: center;
  color: white;
}

.switchs {
  width: 50%;
  cursor: pointer;
  height: 100%;
}

.greensw {
  background-color: green;
}

.redsw {
  background-color: red;
}
</style>