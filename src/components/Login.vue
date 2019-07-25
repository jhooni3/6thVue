<template>
    <div>
        <h4> Login </h4>
        <p>
            ID : <input :value="id" @keyup.enter="login"/>
        </p>
        <p>
            PASSWORD : <input :value="password" type="password" @keyup.enter="login"/>
        </p>
        <p>
            <button @click="login"> 로그인 </button>
        </p>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                id: "",
                password: ""
            }
        },
        methods:{
            login(){
                this.$store.dispatch("Login", {
                    id: this.id,
                    password: this.password,
                    router: this.$router
                })
            }
        }

    }
</script>

<style scoped>

</style>
