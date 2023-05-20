<template>
    <v-card>
        <v-card-title>
            {{ nameWithCaption }}
        </v-card-title>
        <v-card-text>
            {{ ageWithCaption }}
        </v-card-text>
    </v-card>
</template>

<script lang="ts">
export default {
    name: "PersonInformation",

    props: {
        name: {
            type: String,
            required: false,
            default: 'Alberto'
        },

        age: {
            type: Number,
            required: true,
        }
    },

    computed: {
        nameWithCaption() {
            return this.$t('name_caption') + this.name
        },

        ageWithCaption() {
            return this.$t('age_caption') + this.age
        }
    },
}
</script>

<i18n lang="json">
{
    "es": {
        "name_caption": "Nombre: ",
        "age_caption": "Edad: "
    },
    "en": {
        "name_caption": "Name: ",
        "age_caption": "Age: "
    }
}
</i18n>