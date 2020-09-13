 <template>
    <div>
        <!-- Breadcrumbs-->
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="#">Dashboard</a>
          </li>
          <li class="breadcrumb-item active">Expense</li>
        </ol>
        <!-- Icon Cards-->
       <div class="row container">
         <div class="card col-lg-12">
          <div class="card-header">
            <i class="fas fa-chart-area"></i>
            All Expense 
            <router-link :to="{name: 'expense'}" class="btn btn-sm btn-info" id="add_new"> All Expense</router-link>
          </div>
          <form @submit.prevent="expenseInsert">
            <div class="card-body">
                <div class="form-group">
	              <div class="form-row">
	               <div class="col-md-12">
	               	<div class="form-group">
				       <label for="exampleFormControlTextarea1">Details Of Expense</label>
				       <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="form.details"></textarea>
				       <small class="text-danger" v-if="errors.details">{{ errors.details[0] }}</small>
				     </div>
	               </div>
	               <div class="col-lg-12">
	               	<div class="form-label-group">
	                  <label for="firstName">Expense Amount</label>
	                  <input type="text" v-model="form.amount" class="form-control"   required="">
	                  <small class="text-danger" v-if="errors.amount">{{ errors.amount[0] }}</small>
	                </div>
	               </div>
	             </div>
	            </div>     
	          </div>
              <button type="submit" class="btn btn-success">Submit</button>
            </form>
          </div>
         </div>
       </div>
</template>

<script>

    export default {
    	mounted(){
            if (!User.loggedIn()) {
               this.$router.push({ name:'/' })
            } 
        },
        data(){
        	return{
        		form:{
        			details :'',
        			amount:''
        		},
        		errors:{},
        	}
        },
        

        methods:{ 	
        	expenseInsert(){
        		axios.post('/api/expense/',this.form)
        		.then(() => {
        			this.$router.push({ name: 'expense' })
        			Notification.success()
        		})
        		.catch(error => this.errors = error.response.data.errors)
        	},
        	
        }

    	
    }

</script>

<style>
	
#add_new{
	float: right;
}

</style>
