<template>
    <md-card>
      <md-card-header><div class="md-title"></div></md-card-header>
      <md-card-content>
            <div class="md-layout md-gutter">
                <div class="md-layout-item">
                    <md-button class="md-raised" @click="edit_design">Ontwerp Aanpassen</md-button>
                    

                </div>
                <div class="md-layout-item">
                    <md-button class="md-raised md-toggle" @click="show_design">Ontwerp Bevestigen</md-button>
                </div>
            </div>
            <section v-if="show_edit_design">
              <div class="pop-out">
                edit design
              </div>
            </section>
            <section v-if="show_confirm_design">
              <div class="pop-out">
                Ontwerp Bevestigen
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
        show_confirm_design: false

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
  margin-top:25px;
  text-align: left;
  background: #ccc;
 }

</style>
