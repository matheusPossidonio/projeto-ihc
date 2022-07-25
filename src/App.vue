<template>
  <v-app id="inspire">
    
    <v-navigation-drawer 
      v-if="showElements == false "
      v-model="drawer"
      app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h5">
            Menu Aplicação
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar 
    v-if="showElements == false "
    app
    color="green"
    dark>
      <v-app-bar-nav-icon  @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Sistema Audiovisual</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="mr-2">
         <v-btn 
      @click="logout"
      left
      color="red"
      >Sair</v-btn>
      </v-toolbar-items>
     
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import router from './router'

export default {
  data: () => ({
    showElements: true,
    drawer: null,
    items: [
      { title: 'Administradores', icon: 'mdi-view-dashboard', to: '/adm' },
      { title: 'Funcionários', icon: 'mdi-view-dashboard', to: '/funcionario' },
      { title: 'Equipamentos', icon: 'mdi-view-dashboard', to: '/equipamento' },
      { title: 'Acessórios', icon: 'mdi-view-dashboard', to: '/acessorio' },
      { title: 'Empréstimos', icon: 'mdi-view-dashboard', to: '/emprestimo' },
      { title: 'Consertos', icon: 'mdi-view-dashboard', to: '/conserto' }
    ]
  }),
  methods: {
      logout(){
        this.showElements = true 
        localStorage.removeItem( 'token' )
        console.log('finalizou')
        router.push('/')
      }
  },
  updated() {
    if (localStorage.getItem('token') != null) {
      this.showElements = false
    } else {
      this.showElements = true
      //router.push('/')
    }
  }
}
</script>