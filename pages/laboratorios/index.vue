<template>
    <v-container>
        <v-row>
            <v-spacer />
            <v-btn to="/laboratorios/create">Alta laboratorio</v-btn>
        </v-row>

        <v-card>
            <v-data-table :items="laboratorios" :headers="headers">
                <template v-slot:item.actions="{ i, item }">
                    <v-btn v-text="'Editar'" color="blue" text small :to="`/laboratorios/${item.id}`"/>
                    <DeleteDialog 
                        :description="`¿Está seguro de querer eliminar el laboratorio '${item.nombre}'? Esta acción no se puede deshacer.`" 
                        :itemUrl="`/laboratorios/${item.id}`"
                        />
                </template>
            </v-data-table>
        </v-card>
    </v-container>
</template>

<script lang="ts">

export default {
    name: 'Laboratorios',
    middleware: 'auth',


    data: () => ({
        laboratorios: [],
        headers: [
            { text: 'ID', value: 'id' },
            { text: 'Nombre', value: 'nombre' },
            { text: 'Edificio', value: 'edificio' },
            { text: 'Capacidad', value: 'capacidad' },
            { text: 'Acciones', value: 'actions' },
        ]
    }),

    async beforeMount() {
        this.$nuxt.$on('remove-from-list', this.deleteElement)

        this.$store.commit('setTitle', 'Laboratorios')
        try {
            const response = await this.$axios.get('/laboratorios')

            this.laboratorios = response.data.data
        } catch (error) {

        }
    },

    methods: {
        deleteElement(index: number) {
            this.laboratorios.pop(index)
        }
    }
}

</script>