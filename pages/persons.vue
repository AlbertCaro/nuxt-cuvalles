<template>
    <v-container>
        <PersonInformation :name="nameData" :age="ageData"/>
    </v-container>
</template>

<script lang="ts">
export default {
    name: "Persons",

    data: () => ({
        nameData: "Alberto Caro",
        ageData: 25
    }),
}
</script>

<i18n lang="json">
{
    "es": {},
    "en": {}
}
</i18n>