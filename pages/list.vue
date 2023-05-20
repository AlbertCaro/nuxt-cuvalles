<template>
    <v-container>
        <v-form v-model="validForm" ref="form" @submit.prevent="(editIndex !== null) ? editElement() : saveElement()">
            <v-column>
                <v-row>
                    <v-text-field label="Name" v-model="newIngredient.name" :rules="[$validations.notEmpty]" />
                    <v-switch label="Mandatory" v-model="newIngredient.mandatory" />
                    <v-switch label="Deletable" v-model="newIngredient.showDelete" />
                </v-row>
                <v-row>
                    <v-spacer />
                    <v-btn type="submit" v-text="'Guardar'" />
                </v-row>
            </v-column>
        </v-form>
        <!-- v-card class="my-4" v-for="ingredient in ingredients" :key="ingredient.name" -->
        <v-card class="my-4" v-for="(ingredient, i) in ingredients" :key="i">
            <v-card-title v-text="ingredient.name" />

            <v-card-text v-if="ingredient.mandatory">Obligatorio</v-card-text>
            <v-card-text v-else>Opcional</v-card-text>

            <v-card-actions>
                <v-spacer />
                <v-btn color="blue" text v-text="'Editar'" @click="editIndex = i, newIngredient = Object.assign({ }, ingredient)" />
                <v-btn v-show="ingredient.showDelete" color="error" text v-text="'Eliminar'" @click="deleteElement(i)" />
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script lang="ts">
export default {
    name: "List",

    data: () => ({
        editIndex: null,
        validForm: false,
        newIngredient: {
            name: '',
            mandatory: false,
            showDelete: false
        },
        ingredients: [
            {
                name: 'Huevo',
                mandatory: false,
                showDelete: true,
            },
            {
                name: 'Leche',
                mandatory: true,
                showDelete: true,
            },
            {
                name: 'Azucar',
                mandatory: false,
                showDelete: false,
            },
            {
                name: 'Canela',
                mandatory: true,
                showDelete: true,
            },
            {
                name: 'Chocolate',
                mandatory: false,
                showDelete: true,
            },
        ]
    }),

    methods: {
        deleteElement(index: number) {
            this.ingredients.splice(index, 1)
        },

        saveElement() {
            this.$refs.form.validate()

            if (!this.validForm) return

            this.ingredients.push(this.newIngredient)

            this.newIngredient = {
                name: "",
                mandatory: false,
                showDelete: false
            }

            this.$refs.form.resetValidation()
        },

        editElement() {
            this.$refs.form.validate()

            if (!this.validForm) return

            this.ingredients[this.editIndex] = this.newIngredient

            this.newIngredient = {
                name: "",
                mandatory: false,
                showDelete: false
            }

            this.$refs.form.resetValidation()
            this.editIndex = null
        }
    }
}
</script>

<i18n lang="json">
{
    "es": {},
    "en": {}
}
</i18n>