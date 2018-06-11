<template>
  <div id=API>
    <section v-if="cookie.loggedin != 'true'">
    <form @submit.prevent="HandleForm">
      <input type="text" v-model="user" placeholder="username">
      <input type="text" v-model="password" placeholder="password">
      <button type="submit">Click</button>
	 </form>
  </section>
  <p> {{ formdata }} </p>
  <p> {{ cookie.username }} </p>
  <p> {{ cookie }} </p>
  <button @click="removeCookie">removeCookie</button>
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
      cookie: this.getCookie(),

    }
    },
    // created(){
    //   this.testuser = this.getCookie()

    // },
    methods: {
      HandleForm: function(){
        this.formdata = this.password + " - " + this.user
        document.cookie = "username=" + this.user + ";"
        document.cookie = "loggedin=" + true + ";"
      },
      getCookie: function(){
        let cookie = {};
        document.cookie.split(';').forEach(function(el) {
          let [k,v] = el.split('=');
          cookie[k.trim()] = v;
      })
        return cookie;
      }, 
      removeCookie: function(){
        document.cookie = "loggedin=" + false + ";"
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
