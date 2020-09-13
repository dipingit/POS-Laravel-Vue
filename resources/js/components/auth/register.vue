<template>
    <div>
         <div id="layoutAuthentication_content">
            <main>
                <div class="container pb-5">
                    <div class="row justify-content-center">
                        <div class="col-lg-7">
                            <div class="card shadow-lg border-0 rounded-lg mt-5">
                                <div class="card-header"><h3 class="text-center font-weight-light my-4">Create Account</h3></div>
                                <div class="card-body">
                                    <form @submit.prevent="signup">
                                        <div class="form-row">
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label class="small mb-1" for="inputFullName">Full Name</label>
                                                    <input class="form-control py-4" id="inputFullName" type="text" placeholder="Enter Full name" v-model="form.name"/>
                                                    <small class="text-danger" v-if = "errors.name" style="color:red;"> {{ errors.name[0] }} </small>
                                                </div>
                                            </div>
                                            
                                        </div>
                                        <div class="form-group">
                                            <label class="small mb-1" for="inputEmailAddress">Email</label>
                                            <input class="form-control py-4" id="inputEmailAddress"  type="email" aria-describedby="emailHelp" placeholder="Enter email address" v-model="form.email" />
                                            <small class="text-danger" v-if = "errors.email" style="color:red;"> {{ errors.email[0] }} </small>
                                        </div>
                                        <div class="form-row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="small mb-1" for="inputPassword">Password</label>
                                                    <input class="form-control py-4" id="inputPassword" type="password" placeholder="Enter password" v-model="form.password" />
                                                    <small class="text-danger" v-if = "errors.password" style="color:red;"> {{ errors.password[0] }} </small>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="small mb-1" for="inputConfirmPassword">Confirm Password</label>
                                                    <input class="form-control py-4" id="inputConfirmPassword" type="password" placeholder="Confirm password" v-model="form.password_confirmation"/>
                                                    <small class="text-danger" v-if = "errors.password_confirmation" style="color:red;"> {{ errors.password_confirmation[0] }} </small>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group mt-4 mb-0"><button type="submit" class="btn btn-primary btn-block">Create Account</button></div>
                                    </form>
                                </div>
                                <div class="card-footer text-center">
                                    <div class="small"><router-link to="/">Have an account? Go to login</router-link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
            
    </div>
</template>


<script type="text/javascript">
 export default { 
  created(){
    if (User.loggedIn()) {
      this.$router.push({name : 'home'})
    }
  },
  data(){
    return {
      form:{
        name: null,
        email: null,
        password: null,
        confirm_password: null
      },
     errors:{},
    }
  },
  methods:{
    signup(){
      axios.post('/api/auth/signup',this.form)
      .then(res => { 
        User.responseAfterLogin(res)
        Toast.fire({
          type: 'success',
          title: 'Signed in successfully'
        })
        this.$router.push({ name : 'home'})
      })
      .catch(error => this.errors = error.response.data.errors)
    }

 }

 }
</script>

<style type="text/css">
	
</style>