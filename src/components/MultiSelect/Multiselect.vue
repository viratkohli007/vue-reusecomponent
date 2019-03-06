<template>
  <div>
    <!-- <select name="cars" class="Multi_Select" multiple="multiple">
      <option>Select</option>
      <option v-for="option in options" v-bind:title="option" :value="option">{{option}}</option>
    </select>-->
    <br>
    <br>
    <div>
      <div @click="insert">
        <multi-select :selectOptions="options" :options="opt" v-model="selectedVal"></multi-select>
      </div>
    </div>
    <!-- <button @click="insert" type="button">A</button> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedVal: []
    };
  },
  props: {
    options: Array,
    opt: Object,
    fun: Function,
    arrvalue: Array
  },
  methods: {
    insert() {
      this.$emit("multiselectchanged", this.selectedVal);
    }
  }
};
</script>
<style>
.Multi_Select {
  font-family: cursive;
  font-size: 19px;
  padding: 10px 8px 10px 14px;
  background: rgb(182, 89, 89);
  border: 1px solid #ccc;
  border-radius: 6px;
  position: relative;
  font-style: italic;
  color: rgb(157, 157, 185);
}
</style>

