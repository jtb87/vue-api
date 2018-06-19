<template>
    <md-card>
      <md-card-header><div class="md-title"></div></md-card-header>
      <md-card-content>
            <div class="md-layout md-gutter">
                <div class="md-layout-item">
                    <md-button  
                    v-bind:class="{ active: show_edit_design }"
                    @click="edit_design">
                      Ontwerp Aanpassen
                    </md-button>
                    

                </div>
                <div class="md-layout-item">
                    <md-button 
                     v-bind:class="{ active: show_confirm_design }"
                    @click="show_design">Ontwerp Bevestigen</md-button>
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
                    <md-button style="background:#5faf34;">Verstuur</md-button>
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
                  <div class="md-layout-item md-size-20">
                    <md-button style="background:#5faf34;">JA, Bevestig</md-button>
                  </div>
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
        textarea: null
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
  background: #5faf34;
/*  border-top: 1px solid #ccc;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;*/
}

.md-button{
  margin-bottom: -1px;
}

</style>
