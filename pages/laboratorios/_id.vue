<template>
    <v-container>
        <v-form @submit.prevent="guardar">
            <v-card>
                <v-card-title>
                    Editar laboratorio
                </v-card-title>
                <v-card-text>
                    <v-text-field v-model="laboratorio.nombre" label="Nombre"></v-text-field>
                    <v-text-field v-model="laboratorio.edificio" label="Edificio"></v-text-field>
                    <v-text-field v-model="laboratorio.capacidad" label="Capacidad" type="number"></v-text-field>
                </v-card-text>
                <v-card-actions>
                    <v-spacer />
                    <v-btn type="submit">
                        Guardar
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-form>
    </v-container>
</template>

<script lang="ts">

export default {
    name: 'LaboratoriosUpdate',
    middleware: 'auth',
    data: () => ({
        laboratorio: {
            nombre: "",
            edificio: "",
            capacidad: "",
            usuario_codigo: 1,
        }
    }),

    async beforeMount() {
        const id = this.$route.params.id
        
        try {
            const response = await this.$axios.get(`/laboratorios/${id}`)

            this.laboratorio = response.data.data
        } catch (error) {
            this.$nuxt.$emit('show-snackbar', 'red', error.message)
        }
    },

    methods: {
        async guardar() {
            try {
                const response = await this.$axios.put(`/laboratorios/${this.laboratorio.id}`, this.laboratorio)
                this.$nuxt.$emit('show-snackbar', 'green', response.data.message)
                this.$router.push('/laboratorios')
            } catch (error) {
                this.$nuxt.$emit('show-snackbar', 'red', error.message)
            }
        }
    }
}

</script>