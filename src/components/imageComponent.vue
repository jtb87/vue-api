<template>
    <md-card>
      <md-card-header><h2>Image uploader</h2></md-card-header>
      <md-card-content>
        <p> filename: {{name}} </p>
        <p> status: {{resp}} </p>
    <div>
<!--     <form enctype="multipart/form-data" novalidate>
 -->        <input type="file" @change="changeImage">

<!--       <md-field>
      <label>Upload image</label>
      <md-file v-model="file" accept="image/*" @change="tester" ref="file"/>
    </md-field> --->
   <!--  <md-field> 
      <label>text here</label>
      <md-input v-model="text"></md-input>
    </md-field> -->
    <!-- </form> -->
    </div>
      <md-button @click="submitImage">Submit image</md-button>
      <div>
    </div>
      </md-card-content>
  </md-card>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CardComponent',
  data() {
    return {
      name: null, 
      content: null,
      object: null,
      errors: null, 
      body: null,
      resp: null, 
      
    }
    },
    methods: {
      submitImage: function(){
        this.body = {
          Name: this.name,
          Content: this.content,

      }
        axios
        .post(`http://localhost:9090/exp/file`, this.body)
        .then(response => {
          // JSON responses are automatically parsed.
          this.resp = response.data
        })
        .catch(e => {
          this.errors = e
          this.resp = e.response.data.error
        })
  },
  changeImage(e){
    let files = e.target.files;
    let reader = new FileReader();
    reader.onload = (event) => {
      // file contains some extra data that needs to be removed
      // var base64Img = "data:image/png;base64,AAA=";
      this.content = event.target.result.replace("data:image/png;base64,", "");
    }
    reader.readAsDataURL(files[0])
    this.name = files[0].name
  },  
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

.md-button{

}




</style>
