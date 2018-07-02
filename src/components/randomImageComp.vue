<template>
    <md-card>
      <md-card-header><h2>Random Image</h2></md-card-header>
      <md-card-content>
        <p> filename: {{ imagename }} </p>
    <div>
      <md-button @click="getImage">get image</md-button>
    </div>
      <div>
        <img :src="this.imageurl">
      </div>
      </md-card-content>

  </md-card>
</template>


<script>
  import axios from 'axios';
  export default{ 
  name: 'randomImageComp',
  data() {
    return {
      imageurl: null,
      imagename: null, 
      errors: null, 
      body: null,
      resp: null, 
      
    }
    },
    methods: {
      getImage: function(){
        axios
        .get(`http://localhost:9090/exp/randompicture`)
        .then(response => {
          // JSON responses are automatically parsed.
          this.resp = response.data
          this.imagename = this.resp.imgname
          this.imageurl = this.resp.img
        })
        .catch(e => {
          this.errors = e
        })
  }, 

}
}

</script>

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

.md-button{

}




</style>
