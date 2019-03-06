<template>
  <div>
    <!-- <h1>Reuseable components</h1>
    <hr>
    <h3>Buttons</h3>
    <v-btn btnName="Click" :fn="a"></v-btn>
    <v-btn btnName="Hello" :fn="b"></v-btn>
    <hr>
    <v-dropdown :data="fruits"></v-dropdown>
    <hr>
    <v-radio :options="radioOption"></v-radio>
    <hr>
    <v-multiselect :options="cars" :fun="a" :opt="options"></v-multiselect>
    <hr>
    <v-input :placeholder="placeholder"></v-input> -->
    <form>
      <v-input placeholder="First Name" :vmodel="fname" @vmodelupdated="getupdated"></v-input>
      <v-input placeholder="Last Name" :vmodel="lname" @vmodelupdated="getupdated2"></v-input>
       <v-radio :options="radioOption"  @timeupdated="radio" :rname="rname"></v-radio>
        <v-radio :options="choise"  @timeupdated="radio2" :rname="rname2"></v-radio>
       <v-multiselect :options="books" :opt="options" @multiselectchanged="multisel"></v-multiselect>
       <v-multiselect :options="choise" :opt="options" @multiselectchanged="multisel2"></v-multiselect>
       <br><br>
        <v-btn btnName="Submit" :fn="a"></v-btn>
    </form>
  </div>
</template>

<script>
import Button from "./Button/Button";
import Dropdown from "./Dropdown/Dropdown";
import Radio from "./Radio/Radio";
import MultiSelect from "./MultiSelect/Multiselect";
import Input from "./Input/Input";
export default {
  name: "HelloWorld",
  data() {
    return {
      fruits: [
        "Apple",
        "Banana",
        "Blueberry",
        "Kiwi",
        "Pear",
        "Pineapple",
        "Watermelon"
      ],
      radioOption: ["Day Shift", "Night Shift"],
      choise: ['A', 'B'],
      books: ["Rich dad Poor dad", "Avaken the giant within", "Start with why", "The power of focus", "The brief history of time"],
      options: {
        groups: false,
        multi: true,
        btnLabel: 'Select',
        renderTemplate(elem) { return `number : ${elem.name}`; }
      },
      placeholder: "First Name",
      fname: '',
      lname: '',
      time: '',
      values: [],
      values2: [],
      time2: '',
      rname: 'books',
      rname2: 'r2'
    };
  },
  methods: {
    a() {
     console.log(this.fname)
     console.log(this.lname)
     console.log(this.time)
      console.log(this.time2)
     console.log(this.values)
     console.log(this.values2)
    },
    b() {
      alert("Hello");
    },
    printSelectVal() {
      console.log(event.target.value);
    },
    getupdated (value) {
      this.fname = value
    },
     getupdated2 (value) {
      this.lname = value
    },
    radio(value){
      this.time = value
    },
    radio2(value){
      this.time2 = value
    },
    multisel(value){
      this.values = value
    },
    multisel2(value){
      this.values2 = value
    }
  },
  components: {
    "v-btn": Button,
    "v-dropdown": Dropdown,
    "v-radio": Radio,
    "v-multiselect": MultiSelect,
    "v-input": Input
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
