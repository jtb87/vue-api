<template>
    <md-card>
      <md-card-header><h2>Image uploader</h2></md-card-header>
      <md-card-content>
        <p> {{file}} </p>
    <div>
    <md-field>
      <label>Upload image</label>
      <md-file v-model="file" accept="image/*" />
    </md-field>
    </div>
      <md-button @click="submitImage">Submit image</md-button>
      </md-card-content>
  </md-card>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CardComponent',
  data() {
    return {
      file: null,
      response: null, 
      errors: null, 
      body: null,
      resp: null
    }
    },
    methods: {
      submitImage: function(){
        this.body = {Name: 'Fred'}
        axios
        .post(`http://localhost:9090/exp/file`, this.body)
        .then(response => {
          // JSON responses are automatically parsed.
          this.resp = response.data
        })
        .catch(e => {
          this.errors = e
        })
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
