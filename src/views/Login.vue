<template>
    <form @submit.prevent="submit">

        <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
            <input v-model="data.username" type="text" class="form-control" placeholder="Username">
            <input v-model="data.password" type="password" class="form-control" placeholder="Password">
        <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
    </form>
</template>

<script lang="ts">
    import { reactive } from 'vue';
    import { useRouter } from 'vue-router';
    export default {
        name: "Login",
        setup() {
            const data = reactive({
                username: '',
                password: ''
            });

            const router = useRouter();
            const submit = async () => {
                const response = await fetch('http://localhost:40063/api/Authenticate/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include',
                    body: JSON.stringify({
                        username: data.username,
                        password: data.password
                    })
                });

                await router.push('/');
                const response_data = await response.json();
                var token = response_data['token'];
                localStorage.setItem("token", token);
            }

            return {
                data,
                submit
            }
        }
    }</script>
<style scoped>
</style>