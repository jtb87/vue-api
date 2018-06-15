<template>
  <div>
    <md-card>
      <md-card-header><div class="md-title">Login Form</div></md-card-header>
      <md-card-content>
        <section v-if="cookie.loggedin != 'true'">
          <form @submit.prevent="HandleForm">
            <div class="md-layout md-gutter">
                <div class="md-layout-item">
                  <md-field>
                    <label>Name</label>
                    <md-input type="text" v-model="user" placeholder="username"></md-input>
                  </md-field>
                </div>
                <div class="md-layout-item">
                  <md-field>
                    <label>Password</label>
                    <md-input type="text" v-model="password" placeholder="password">
                    </md-input>
                  </md-field>
                </div>
              </div>
            <md-button type="submit">Click</md-button>
	         </form>
        </section>
      </md-card-content>
  <p> {{ formdata }} </p>
  <p> {{ cookie.username }} </p>
  <p> {{ cookie }} </p>
  <md-button @click="LogOut">logout</md-button>
  </md-card>

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
        this.cookie = this.getCookie();
      },
      getCookie: function(){
        let cookie = {};
        document.cookie.split(';').forEach(function(el) {
          let [k,v] = el.split('=');
          cookie[k.trim()] = v;
      })
        return cookie;
      }, 
      LogOut: function(){
        document.cookie = "loggedin=" + false + ";"
        this.cookie = this.getCookie()
      }

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
md-card{
  max-width: 50%;
}
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
