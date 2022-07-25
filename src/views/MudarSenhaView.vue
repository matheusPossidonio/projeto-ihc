
<template>
   <v-app >
      <v-main>
         <v-container fluid fill-height>
            <v-layout align-center justify-center>
               <v-flex xs12 sm8 md4>
                  <v-card class="elevation-12">
                     <v-toolbar dark color="green">
                        <v-toolbar-title>Mudança de senha</v-toolbar-title>
                     </v-toolbar>
                     <v-card-text>
                     <form >
                            <v-text-field
                              v-model="senha"
                              name="senha"
                              label="Nova senha"
                              type="text"
                              placeholder="senha"
                              required
                           ></v-text-field>
                           
                            <v-text-field
                              v-model="confirmSenha"
                              name="confirmSenha"
                              label="Confirme sua senha"
                              type="confirmSenha"
                              placeholder="confirmSenha"
                              required
                           ></v-text-field>
                        
                           <v-btn 
                           @click="mudarSenha"
                            type="submit" 
                            class="mt-4 ml-10" 
                            color="green" 
                            value="log in">Mudar senha
                            </v-btn>
                      </form>
                     </v-card-text>
                  </v-card>
                
               </v-flex>
            </v-layout>
         </v-container>
      </v-main>
   </v-app>
</template>

<script>
import router from '@/router'
export default {
  name: "mudarSenha",
  data() {
    return {
      senha: "",
      confirmSenha: "",
    };
  },
  methods: {
    mudarSenha() {
        if(this.confirmSenha ===this.senha){
            router.push('/login')
            alert("Sua senha foi alterada")
            router.push('/')
        }else{
            alert("As senhas devem ser iguais")
        }
      
    },
  },
};
</script>