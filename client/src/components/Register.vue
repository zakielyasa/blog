<template>
<div class="container" style="margin-top: 60px;">
<div class="card">
    <div class="card-content login">
        <div class="field">
            <label class="label">Username</label>
            <div class="control">
                <input class="input" type="text" placeholder="Username" v-model="username">
            </div>
        </div>
        <div class="field">
            <label class="label">Password</label>
            <div class="control">
                <input class="input" type="password" placeholder="My password" v-model="password">
            </div>
        </div>
        <br>
        <button class="btn btn-primary" @click="register">Register</button>
    </div>
</div>
</div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    register () {
      this.$http.post('users/signup' , {
        username: this.username,
        password: this.password
      })
      .then(response => {
        console.log(response)
        this.$router.push('/home')
      })
      .catch(err => {
        this.$router.push('/signup')
      })
    }
  }
}
</script>

<style>
.button {
  border-radius: 2px;
  border: 2px;
}

.card-content.login {
  background-color: #f9f6f6;
  border: none;
  height: 400px;
  padding: 20px;
}
.card-footer-item.register {
  border-radius: 4px;
  background-color: #284863;
  color: white;
}

.input{
  border-width:1px;
  border-radius:15px;
}

.card-footer {
  border-radius: 4px;
  border: none;
}
.label {
  font-weight: lighter;
}
</style>
