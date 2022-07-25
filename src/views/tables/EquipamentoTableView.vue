<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    
    class="elevation-1 mr-10 ml-10 mt-10"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>Tabela de equipamentos</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >
              Adicionar equipamento
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>
            


    <!-- Span de criação -->
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.name"
                      label="Name"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.id"
                      label="Id"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="8"
                  >
                    <v-text-field
                      v-model="editedItem.data"
                      label="Data"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.qtd_consertos"
                      label="Qtd_Consertos"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="6"
                  >
                    <v-combobox
                      v-model="editedItem.status"
                      label="status Equipamentos"
                      :items="statusType"
                      outlined
                     ></v-combobox>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                
                @click="close"
              >
                Cancelar
              </v-btn>
              <v-btn
                color="blue darken-1"
                
                @click="save"
              >
                Salvar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        
        <!-- Span delete -->
        <v-dialog v-model="dialogDelete" max-width="550px">
          <v-card>
            <v-card-title class="text-h5">Tem certeza que deseja excluir esse item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1"  @click="closeDelete">Cancelar</v-btn>
              <v-btn color="red"  @click="deleteItemConfirm">Excluir</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>

    <!-- Icones de ações -->
    <template v-slot:[`item.actions`]="{ item }">
      <v-icon
        large
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        color="red"
        large
        class="mr-2"
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>

    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>
    </template>

  </v-data-table>
</template>

<script>
  export default {
    data: () => ({
      //vcard de criação 
      dialog: false,
      //vcard de esclusao
      dialogDelete: false,

      headers: [
        {
          text: 'Nome Equipamento',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Id', value: 'id' },
        { text: 'Data Aquisição', value: 'data' },
        { text: 'Qtd_Consertos', value: 'qtd_consertos' },
        { text: 'Status', value: 'status' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
       statusType : [
        'Disponível',
        'Em emprestimo',
        'Em Conserto',
        'Separado'
      ],

      desserts: [],

      editedIndex: -1,

      editedItem: {
        name: '',
        id:0,
        data: '',
        qtd_consertos: '',
        status: '',
      },
      defaultItem: {
        name: '',
        id:0,
        data:'',
        qtd_consertos: '',
        status: '',
      },
    }),
    
    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Novo Equipamento' : 'Editar Equipamento'
      },
    },
    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },
    created () {
      this.initialize()
    },
    methods: {
      initialize () {
        this.desserts = [
          {
            name: 'DataShow',
            id: 159,
            data: '22/07/2021',
            qtd_consertos: '8',
            status: 'Em Conserto',
          },
          {
            name: 'Headset',
            id: 19,
            data: '22/07/2022',
            qtd_consertos: '0',
            status: 'Disponivel',
          },
          {
            name: 'Microfone',
            id: 82,
            data: '10/03/2022',
            qtd_consertos: '0',
            status: 'Em emprestimo',
          }
        ]
      },
      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },
      deleteItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },
      deleteItemConfirm () {
        this.desserts.splice(this.editedIndex, 1)
        this.closeDelete()
      },
      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },
      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },
      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>