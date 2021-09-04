<template>
    <form @submit.prevent="submit">

        <h1 class="h3 mb-3 fw-normal">Logout</h1>
        <button class="w-100 btn btn-lg btn-primary" type="submit" v-on:click="logout">Logout</button>
    </form>
</template>

<script lang="ts">
    export default {
        methods: {
            logout: function () {
                localStorage.removeItem("token");
            }
        }
    }</script>

<style scoped>
</style>