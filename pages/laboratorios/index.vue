<template>
    <v-container>
        <v-row>
            <v-spacer />
            <v-btn to="/laboratorios/create">Alta laboratorio</v-btn>
        </v-row>

        <v-card>
            <v-data-table :items="laboratorios" :headers="headers">

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
        ]
    }),

    async beforeMount() {
        try {
            const response = await this.$axios.get('/laboratorios')

            this.laboratorios = response.data.data
        } catch (error) {

        }
    }
}

</script>