<template>
<!-- TODO: Add component template -->
<span>
   <button class="Button" @click="fn()" type="button">{{btnName}}</button>
</span>
</template>

<script>
export default {
  // TODO: Add component prop
  props: {
    'btnName': String,
    fn: Function
    }   
}
</script>

<style  scoped>
.Button {
  background: red;
  border: none;
   color: #fff;
  cursor: pointer;
  font-size: 0.75rem;
  padding: 10px 25px;
  text-transform: uppercase;
  transition: background .2s ease-in-out;
}
.Button:hover {
    background: blue;
  }

.Button:disabled {
    opacity: 0.5;
  }

  #container {
    visibility: hidden;
}

#loader {
  color: #008cff;
  height: 40px;
  left: 45%;
  position: absolute;
  top: 45%;
  width: 30%;
}
</style>