<template>
    <v-container>
        <v-card>
            <v-card-title>Alberto Caro Navarro {{ counter }}</v-card-title>
            <v-card-text>
                Desarrollador de software, actualmente ejerciendo en Sperantus.

                <br>
                <br>

                {{ counter }}

                <br>
                <br>

                {{ counterAndName }}

                <br>
                <br>

                {{ $t('help') }}
            </v-card-text>
            <v-card-actions>
                <v-spacer/>
                <v-btn @click="sumOneToCounter(2)">
                    Click Me!
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</template>
  
<script lang="ts">

export default {
    name: 'AboutMe',

    data: () => ({
        counter: 1
    }),

    watch: {
        counter() {

        }
    },

    computed: {
        counterAndName() {
            return this.counter + " Alberto"
        }
    },

    beforeMount() {
        this.counter++
    },

    methods: {
        sumOneToCounter(numToAdd: number) {
            this.counter = this.counter + numToAdd
        }
    }
}
</script>

<i18n lang="json">
{
    "es": {
        "help": "Ayuda"
    },
    "en": {
        "help": "Help"
    }
}
</i18n>