
<template>
	<div id="API">
   <section v-if="errored">
    <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
  </section>

  <section v-else>
    <div v-if="loading">Loading...</div>
    
    <div v-else>
    <h3>Lambda Call:</h3>
     <ul>
      <li>message: {{ posts.msg }}</li>
      <li>key: {{ posts.key }} </li>
    </ul>
    </div>
</section>
</div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ApiComponent',
   data() {
    return {
      posts: [],
      errors: [],
      errored: false,
      loading: true
    }
  },
 // Fetches posts when the component is created.
  created() {
    axios
    .get(`http://127.0.0.1:3000/hello`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.posts = response.data
      this.loading = false
    })
    .catch(e => {
      this.errors.push(e)
      this.errored = true
    })
  },
}
    // async / await version (created() becomes async created())
    //
    // try {
    //   const response = await axios.get(`http://jsonplaceholder.typicode.com/posts`)
    //   this.posts = response.data
    // } catch (e) {
    //   this.errors.push(e)
    // }

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
	padding: 10px	
	
}

</style>
