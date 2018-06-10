<template>
  <div id=API>
 	<form id="form1" @submit="HandleForm" method="POST">
  			<input type="text" name="username" placeholder="username">
  			<input type="text" name="password" placeholder="password">
  			<input type="submit" value="Set Cookie">
	</form>
<button v-on:click="HandleForm"> Click</button>
 <p> {{ formdata }} </p>
  </div>
</template>

<script>
export default {
  name: 'CardComponent',
  data() {
    return {
      formdata: "data"
  }},
  methods: {
  	HandleForm: function(){
  		this.formdata = "Transformed Data"
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
