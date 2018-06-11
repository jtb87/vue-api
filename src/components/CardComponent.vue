<template>
  <div id=API>
    <form @submit.prevent="HandleForm">
      <input type="text" v-model="user" placeholder="username">
      <input type="text" v-model="password" placeholder="password">
      <button type="submit">Click</button>
	</form>
 <p> {{ formdata }} </p>
  </div>
</template>

<script>
export default {
  name: 'CardComponent',
  data() {
    return {
      formdata: "data",
      password: "",
      user: "",
    }
    },
    methods: {
      HandleForm: function(){
        this.formdata = this.password + " - " + this.user
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#API{
	/*background-color: #ccc;*/
	max-width: 50%;
	text-align: left;
	border-style: solid;
	border-color: #ccc;
	border-width: 2px;
	margin-left: 25%;
	margin-right: 25%;
	padding: 10px;
	margin-bottom: 10px;	
	
}

</style>
