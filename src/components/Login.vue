<template>
    <div>
<!--        <h4> Login </h4>-->
<!--        <p>-->
<!--            ID : <input :value="id" @keyup.enter="login"/>-->
<!--        </p>-->
<!--        <p>-->
<!--            PASSWORD : <input :value="password" type="password" @keyup.enter="login"/>-->
<!--        </p>-->
<!--        <p>-->
<!--            <button @click="login"> 로그인 </button>-->
<!--        </p>-->



        <form>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input :value="id" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input :value="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
            </div>
            <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button @click="login" type="submit" class="btn btn-primary">Submit</button>
        </form>
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
