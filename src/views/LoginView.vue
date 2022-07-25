
<template>
   <v-app >
      <v-main>
         <v-container fluid fill-height>
            <v-layout align-center justify-center>
               <v-flex xs12 sm8 md4>
                  <v-card class="elevation-12">
                     <v-toolbar dark color="green">
                        <v-toolbar-title>Login Audiovisual</v-toolbar-title>
                     </v-toolbar>
                     <v-card-text>
                     <form >
                            <v-text-field
                              v-model="username"
                              name="username"
                              label="Usuário"
                              type="text"
                              placeholder="username"
                              required
                           ></v-text-field>
                           
                            <v-text-field
                              v-model="password"
                              name="password"
                              label="Senha"
                              type="password"
                              placeholder="password"
                              required
                           ></v-text-field>
                           <router-link :to="{ name: 'mudarsenha' }" class="mt-1 mr-10">
                             Esqueceu sua senha?
                          </router-link>
                          
                           <v-btn 
                           
                           @click="login"

                            class="mt-4" 
                            color="green" 
                            dark
                            >Entrar
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
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      if(this.username=='adm@teste.com' && this.password =='123456'){
        alert("Bem vindo Administrador")
        localStorage.setItem('token',9090)
        router.push("adm")
      }else if(this.username =='func@teste.com'){
        alert("Bem vindo funcionário")
        //router.push("/funcPage")
      }else{
          alert("Nao foi possível realizar seu login")
      }
    },
  },
};
</script>