<template>
    <div>
       <input type="text" name="" :placeholder="placeholder" v-model="evaluateData" @change="qq">
    </div>
</template>

<script>
export default {
    data(){
        return{
            inputValue: ''
        }
    },
    computed: {
        evaluateData: {
            get: function() {
                return this.vmodel
            },
            set: function(value) {
                this.inputValue = value
            }
        }
    },
    props: {
        'placeholder': String,
        'bindVar': String,
        'vmodel': String
    },
    methods:{
        qq(){
           this.$emit('vmodelupdated', this.inputValue)
        }
    },
    // watch: {
    //     'vmodel':function (value) {
    //         this.mdata = value
    //     }
    // },
    // mounted () {
    //     console.log(this.placeholder, this.bindVar, this.vmodel)
    //     this.inputValue = this.vmodel
    // }
}
</script>

<style>
input {
    border: 5px solid white; 
    -webkit-box-shadow: 
      inset 0 0 8px  rgba(0,0,0,0.1),
            0 0 16px rgba(0,0,0,0.1); 
    -moz-box-shadow: 
      inset 0 0 8px  rgba(0,0,0,0.1),
            0 0 16px rgba(0,0,0,0.1); 
    box-shadow: 
      inset 0 0 8px  rgba(0,0,0,0.1),
            0 0 16px rgba(0,0,0,0.1); 
    padding: 15px;
    background: rgba(255,255,255,0.5);
    margin: 0 0 10px 0;
}
</style>

