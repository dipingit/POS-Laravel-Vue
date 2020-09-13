<template>
<div>
    <main>
        <div class="container-fluid">
            <h1 class="mt-4">Dashboard</h1>
            <ol class="breadcrumb mb-4">
                <li class="breadcrumb-item active">Dashboard</li>
            </ol>
            <div class="row">
                <div class="col-xl-3 col-md-6">
                    <div class="card bg-primary text-white mb-4">
                        <div class="card-body">{{ todaysell }} BDT </div>
                        <div class="card-footer d-flex align-items-center justify-content-between">
                            <a class="small text-white stretched-link" href="#">Today's Sell</a>
                            <div class="small text-white"><i class="fas fa-angle-right"></i></div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-md-6">
                    <div class="card bg-warning text-white mb-4">
                        <div class="card-body">{{ income }} BDT</div>
                        <div class="card-footer d-flex align-items-center justify-content-between">
                            <a class="small text-white stretched-link" href="#">Today's Income</a>
                            <div class="small text-white"><i class="fas fa-angle-right"></i></div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-md-6">
                    <div class="card bg-success text-white mb-4">
                        <div class="card-body">{{due}} BDT</div>
                        <div class="card-footer d-flex align-items-center justify-content-between">
                            <a class="small text-white stretched-link" href="#">Today's Due</a>
                            <div class="small text-white"><i class="fas fa-angle-right"></i></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-md-6">
                                <div class="card bg-danger text-white mb-4">
                                    <div class="card-body">{{ expense }} BDT</div>
                                    <div class="card-footer d-flex align-items-center justify-content-between">
                                        <a class="small text-white stretched-link" href="#">Today's Expense</a>
                                        <div class="small text-white"><i class="fas fa-angle-right"></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xl-12">
                                <div class="card mb-4">
                                    <div class="card-header">
                                        <i class="fas fa-chart-area mr-1"></i>
                                        Stock Out Products
                                    </div>
                                    <div class="card-body">
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-bordered" id="" width="100%" cellspacing="0">

                  <thead>
                    <tr>
                      <th>Name</th> 
                      <th>Code</th>
                      <th>Photo</th>
                      <th>Buying Price</th>
                      <th>Status</th>
                      <th>Quantity</th>
                    </tr>
                  </thead>
                
                  <tbody>

                    <tr v-for="product in products" :key="product.id">
                      <td>{{ product.product_name}}</td>
                      <td>{{ product.product_code}}</td>
                      <td><img :src="product.image" id="em_photo"></td>
                      
                      <td>{{ product.buying_price }} tk</td>
                      <td v-if="product.product_quantity >= 1"><span class="badge badge-success">Availble</span></td>
                      <td v-else ><span class="badge badge-danger">Stock Out</span></td>
                      <td>{{product.product_quantity}}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
    </div>
    
</div>
</div>
</main>
</div>


    
</template>


<script type = "text/javascript">
export default{
    created()
    {
        if(!User.loggedIn()){
            this.$router.push({name: '/'})
        }
    },
    data(){
        return{ 
        todaysell:'',
        income:'',
        expense:'',
        due:'',
        products:'',

    }
    },

    mounted(){
        this.TodaySell();
        this.TodayIncome();
        this.TodayDue();
        this.TodayExpense();
        this.StockOut();
    },


    methods:{
        TodaySell()
        {
             axios.get('/api/today/sell')
             .then(({data}) => (this.todaysell = data))
             .catch()
        },
    
        TodayIncome()
        {
             axios.get('/api/today/income')
             .then(({data}) => (this.income = data))
             .catch()
        },
        TodayDue()
        {
             axios.get('/api/today/due')
             .then(({data}) => (this.due = data))
             .catch()
        },
        TodayExpense()
        {
             axios.get('/api/today/expense')
             .then(({data}) => (this.expense = data))
             .catch()
        },
        StockOut()
        {
             axios.get('/api/stockout')
             .then(({data}) => (this.products = data))
             .catch()
        },
    }
}
</script>

<style scoped>

</style>