<template>
    <md-card>
      <md-card-header><div class="md-title"></div></md-card-header>
      <md-card-content v-if="confirmed">
        <div class="succes">{{ message }}</div>
        <div style="margin-top:20px"> 
              <button @click="reset">RESET</button>
        </div>



      </md-card-content>      


      <md-card-content v-else>
            <div class="md-layout md-gutter">
                <div class="md-layout-item">
                    <button class="btn"
                    v-bind:class="{ active: show_edit_design }"
                    @click="edit_design">Ontwerp Aanpassen
                    <md-icon style="color:#f26322" v-if="show_edit_design">keyboard_arrow_down</md-icon>
                    <md-icon v-else style="color:white"> keyboard_arrow_up</md-icon>                    
                  </button>
                    

                </div>
                <div class="md-layout-item">
                    <button class="btn" 
                     v-bind:class="{ active: show_confirm_design }"@click="show_design"> Ontwerp Bevestigen 
                     <md-icon style="color:#f26322" v-if="show_confirm_design">keyboard_arrow_down</md-icon>
                      <md-icon style="color:white" v-else>keyboard_arrow_up</md-icon>
                    </button>
                </div>               
            </div>
            <section v-if="show_edit_design">
              <div class="pop-out">
                <div class="md-layout md-alignment-top-right">
                  <div class="md-layout-item md-size-100">
                    Heeft u opmerkingen voor de ontwerper?
                    <md-field style="background: white;">
                      <label>opmerkingen voor designer</label>
                      <md-textarea v-model="textarea"></md-textarea>
                    </md-field>
                  </div>
                  <div class="md-layout-item md-size-20">
                    <md-button class="input-button" @click="edit">Verstuur</md-button>
                  </div>
                </div>
                </div>
            </section>
            <section v-if="show_confirm_design">
              <div class="pop-out">
                <div class="md-layout md-alignment-bottom-right">
                  <div class="md-layout-item md-size-100">
                    Weet u zeker dat u tevreden bent met het gekozen ontwerp? 
                  </div>
                  <div class="md-layout-item md-size-25">
                    <md-button class="input-button" @click="confirm">JA, Bevestig</md-button>
                  </div>
                </div>
              </div>
            </section>
        </md-card-content>
  </md-card>
</template>


<script>

export default {
  name: 'CardComponent',
    data() {
      return {
        show_edit_design: false,
        show_confirm_design: false,
        textarea: null,
        confirmed: false,
        message:  null
      }
    },
    methods: {
      show_design(){
         this.show_edit_design = false
        this.show_confirm_design = !this.show_confirm_design
      },
      edit_design(){
        this.show_confirm_design = false
        this.show_edit_design = !this.show_edit_design
      },
      edit(){
        this.message = "Ontwerp aanpassen succesvol, we nemen zo snel mogelijk contact met u op"
        this.confirmed = true
      },
      confirm(){
        this.message = "Ontwerp Bevestigd, wij gaan zo snel mogelijk contact opnemen met u om een afspraak in te plannen"
        this.confirmed = true
      }, 
      reset(){
        this.confirmed = false
      }
    }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.pop-out{ 
  text-align: left;
  padding:10px;
  /*border: 1px solid  #ccc;*/
  border-radius: 4px;

 }

.active{
  background: white !important;
  border: 1px solid #f26322 !important;
  color: #5C6670 !important;
}

.btn{
    background: #f26322;
    color:white;
    display: inline-block;
    padding: .5rem 1rem;
    border: 1px solid transparent;
    border-radius: 4px;
    box-shadow: none;
    text-align: center;
    text-transform: uppercase;
    vertical-align: middle;
    transition: background .1s 0s ease-in,border .1s 0s ease-in,color .1s 0s ease-in;
}

.md-card{ 
  margin-bottom: 100px;

 }


 .input-button {
    float: right;
    text-align: center;
    color: #fff;
    display: block;
    width: 160px;
    height: 35px;
    font-size: .9em;
    margin-top: 22px;
    border: 1px solid #6dba5b;
    background: #7bce66;
        background-image: none;
    background-image: -webkit-linear-gradient(top,#7bce66,#71c05e);
    background-image: -moz-linear-gradient(top,#7bce66,#71c05e);
    background-image: -ms-linear-gradient(top,#7bce66,#71c05e);
    background-image: -o-linear-gradient(top,#7bce66,#71c05e);
    background-image: linear-gradient(to bottom,#7bce66,#71c05e);
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
}

.succes{
  background: #f26322;
  width: 100%;
  padding:10px 0px;
  color: white;



}
</style>
