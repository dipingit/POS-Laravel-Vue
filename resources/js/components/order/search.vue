<template>
    <div class="section-body">
        <div class="row">
            <div class="col-12 col-md-12 col-lg-12">
                <div class="row">
                    <div class="col-md-7">
                        <div class="card">
                            <div class="card-body">
                                <form @submit.prevent="searchDate">
                                    <label>Search For Date</label>
                                    <input type="date" class="form-control" v-model="form.date">
                                    <button class="btn btn-success mt-2" type="submit">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div class="card">
                    <div class="card-header">
                        <div class="d-flex">
                            <div>
                                <h4>Product Details</h4>
                            </div>
                        </div>

                    </div>
                    <div class="card-body p-0">
                        <div class="table-responsive">
                            <table class="table table-striped table-md">
                                <tbody><tr>
                                    <th>Customer Name</th>
                                    <th>Total Quantity</th>
                                    <th>Total Price</th>
                                    <th>Pay</th>
                                    <th>Due</th>
                                    <th>Pay By</th>
                                </tr>
                               <tr v-for="order in orders" :key="order.id">
                                    <td>{{order.name}}</td>
                                    <td>{{order.qty}}</td>
                                    <td>{{order.total}} tk</td>
                                    <td>{{order.pay}} tk</td>
                                    <td>{{order.due}} tk</td>
                                    <td>{{order.payby}}</td>
                                </tr>
                                </tbody></table>
                        </div>
                    </div>
                </div>
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
            return {
                orders:[],
                details:[],
                form:{
                    date:'',
                    month:'',
                },
                searchFillter:'',
            }
        },
        methods:{
           
            searchDate(){
                axios.post('api/search/order',this.form)
                    .then(res=>{
                        this.orders = res.data;
                        console.log(res.data)
                    }).catch(error=>{console.log(error.response.data)});
            },
        },

    	
    }



  
</script>

<style>
	
#add_new{
	float: right;
}

</style>
