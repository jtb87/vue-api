<template>
    <md-card>
      <md-card-header><h2>Image uploader</h2></md-card-header>
      <md-card-content>
        <p> name: {{name}} </p>
        <p> object: {{object}} </p>
        <p> status: {{status}} </p>
        <p> status: {{status2}} </p>
        <p> content: {{content}} </p>
    <div>
<!--     <form enctype="multipart/form-data" novalidate>
 -->        <input type="file" @change="tester">

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
      </md-card-content>
  </md-card>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CardComponent',
  data() {
    return {
      // files: new FormData(),
      name: null, 
      text: null,
      content: null,
      status: null,
      object: null,
      status2: "",
      // unrelaed
      response: null, 
      errors: null, 
      body: null,
      resp: null, 
      
    }
    },
    methods: {
      submitImage: function(){
        this.body = {
          Name: this.name,
          Content: btoa(this.object),

      }
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
  tester(e){
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = function(event){
      this.object = event.target.result
      this.status2 = "done"
    }
    reader.onprogress = function(event){
      this.status2 = "progress"
    }
    reader.onloadstart = e => this.$emit("load", e.target.result)
    
    reader.addEventListener("onload", function (event) { 
         this.status2 = "start"
    })

    reader.readAsDataURL(e.target.files[0])
    this.status = reader.readyState
    this.status = " ... "
    // this.content = e.target.files[0]
    // this.name = this.content.name
    // var fileReader = new FileReader();
    // fileReader.readAsArrayBuffer(event.target.files[0]);
    // fileReader.addEventListener("onload", function (e) {
    // // fileReader.onload = function(event){
    //       this.status2 = fileReader.readyState
    //       this.object = fileReader.result
    //   }); 
    // this.status = fileReader.readyState
    
  },
//   tester2(event){
//     var reader = new FileReader();
//     reader.onload = function(e) {
//       fileDisplayArea.innerHTML = "";
//    // Create a new image.
//       var img = new Image();
//    // Set the img src property using the data URL.
//    img.src = reader.result;

//    // Add the image to the page.
//    fileDisplayArea.appendChild(img);
//  }

//  reader.readAsDataURL(file); 
// } else {
//  fileDisplayArea.innerHTML = "File not supported!";
// }
//   },



 

   // upload() {
   //        axios
   //        .post( 'http://localhost:9090/exp/file',
   //        formData,
   //        {
   //          headers: {
   //              'Content-Type': 'multipart/form-data'
   //          }
   //        }
   //      ).then(function(){
   //        console.log('SUCCESS!!');
   //      })
   //      .catch(function(){
   //        console.log('FAILURE!!');
   //      });
   //    },
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
