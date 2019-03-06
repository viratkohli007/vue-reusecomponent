<template>
    <div class="filter">
      <label for="basic-dropdown">Basic dropdown: </label>
      <select name="basic-dropdown" class="search_categories">
         <option v-for="fruit in data">{{fruit}}</option>         
      </select>
</div>
</template>

<script>
export default {
   props: ['data'],
    data() {
        return{     
        }
    }
}
</script>

<style>
.search_categories{
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


