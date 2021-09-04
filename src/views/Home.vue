<template>
    Home
</template>

<script lang="ts">
    import { onMounted } from 'vue';
    export default {
        name: "Home"
    };
    var token = localStorage.getItem("token");
    console.log("This is the token: ", token);
</script>