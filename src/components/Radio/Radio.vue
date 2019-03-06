<template>
  <div>
      <h3>Select Your time</h3>
    <label class="container" v-for="(a, key) in options" v-bind:title="a" v-bind:key="a">
      {{ a }}
      <input type="radio" :id="key" @click="qq(key)" :name="rname" :value="a" v-model="timeshift">
      <span class="checkmark"></span>
    </label>
  </div>
</template>
<script>
export default {
    props: {
        'options': Array,
        'rname': String
    },
    data(){
        return{
           inputVal: ''
           
        }
    },
    computed: {
      timeshift: {
        get(){
         return this.options
        },
        set(value){
          this.inputVal = value
           this.$emit('timeupdated', this.inputVal)
        }
      }
    },
    methods: {
      qq(key){
        var q= document.getElementById(key).value
        this.inputVal = q
       
      }
    }
}
</script>

<style>
/* The container */
.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default radio button */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* Create a custom radio button */
.checkmark {
  position: absolute;
  /* top: 0;
  left: 0; */
  margin-left: 10px;
  height: 25px;
  width: 25px;
  background-color: #eee;
  border-radius: 50%;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the radio button is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #2196F3;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.container .checkmark:after {
 	top: 9px;
	left: 9px;
	width: 8px;
	height: 8px;
	border-radius: 50%;
	background: white;
}
</style>

