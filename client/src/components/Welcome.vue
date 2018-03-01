<template>
  <div class="jumbotron jumbotron-fluid" style="background-color: #263238; color: white;">
    <div class="row">
  	  <div class="col-md-6">
    	<img src="https://media.giphy.com/media/POhUrasz0fbDW/giphy.gif" style="width: 425px; height: 410px">
    </div>
  	<div class="col-md-6">
    	<div class="row" style="width: 100%;">
         	<div class="container">
            	<div class="panel panel-default">
                	<div class="panel-body">
                        <div class="form-group">
                            <label for="inputEmail3" class="control-label">Username</label>
                                <input class="form-control" id="inputEmail3" placeholder="username" required="" type="text" v-model="username">
                        </div>
                        <div class="form-group">
                            <label for="inputPassword3" class="control-label">Password</label>
                                <input class="form-control" id="inputPassword3" placeholder="Password" required="" type="password" v-model="password">                            
                        </div>
                        <div class="form-group">  
                                <div class="checkbox">
                                    <label class="">
                                        <input class="" type="checkbox">Remember me</label>
                                </div>
                        </div>
                        <div class="form-group last">
                                <button type="submit" class="btn btn-success btn-sm" @click="login">Login</button>
                                <button type="reset" class="btn btn-default btn-sm">Reset</button>
                        </div>
                	</div>
						<div class="panel-footer">Not Registered? <button class="btn btn-primary" @click="goToRegister"> Register here </button> 
						</div>
            		</div>
    		</div>
		</div> 
     </div>
      <div class="container">
          <h1 class="display-4">
              {{message}}
          </h1>
		  <button class="btn btn-primary" @click="goTo">{{submessage}}</button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Welcome',
  data( ) { 
    return {
      username: '',
      password: '',
      message: 'Welcome',
      submessage: 'sementara klik ini dulu buat ke home click me!'
    }
  },
  methods: {
    goTo( ) {
      this.$router.push('/home')
	  },
	  goToRegister(){
		  this.$router.push('/register')
    },
    login(){
      console.log('A')
      this.$http.post('users/login', {
        username: this.username,
        password: this.password
      })
      .then(response => {
        console.log(response.data.token)
        localStorage.setItem('token', response.data.token)
        this.$router.push('/home')
      })
      .catch(err => {
        this.$router.push('/')
      })
    },
  }
}
</script>