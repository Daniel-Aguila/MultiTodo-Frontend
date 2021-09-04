<template>
    <form @submit.prevent="submit">

        <h1 class="h3 mb-3 fw-normal">Please register</h1>
        <input v-model="data.username" class="form-control" placeholder="Name" required>
        <input v-model="data.email" type="email" class="form-control" placeholder="Email">
        <input v-model="data.password" type="password" class="form-control" placeholder="Password">
        <button class="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
    </form>
</template>

<script lang="ts">
    import { reactive } from 'vue';
    import { useRouter } from 'vue-router';

    //send the information to the server
    export default {
        name: "Register",
        setup() {
            const data = reactive({
                username: '',
                email: '',
                password: ''
            });

            const router = useRouter();

            const submit = async () => {
                await fetch('http://localhost:40063/api/Authenticate/register', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        username: data.username,
                        email: data.email,
                        password: data.password
                    })
                });

                await router.push('/login');
            }
            return {
                data,
                submit
            }
        }
    }
</script>

<style scoped>
</style>