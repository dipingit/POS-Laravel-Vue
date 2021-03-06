//auth component
let login = require('./components/auth/login.vue').default;
let register = require('./components/auth/register.vue').default;
let forgot = require('./components/auth/forgot.vue').default;
let logout = require('./components/auth/logout.vue').default;
let home = require('./components/home.vue').default;


//employee component
let employee = require('./components/employee/index.vue').default;
let storeemployee = require('./components/employee/create.vue').default;
let editemployee = require('./components/employee/edit.vue').default;

//supplier component
let supplier = require('./components/supplier/index.vue').default;
let storesupplier = require('./components/supplier/create.vue').default;
let editsupplier = require('./components/supplier/edit.vue').default;

//category component
let category = require('./components/category/index.vue').default;
let storecategory = require('./components/category/create.vue').default;
let editcategory = require('./components/category/edit.vue').default;

//product component
let product = require('./components/product/index.vue').default;
let storeproduct = require('./components/product/create.vue').default;
let editproduct = require('./components/product/edit.vue').default;

//expense component
let storeexpense = require('./components/expense/create.vue').default;
let expense = require('./components/expense/expense.vue').default;
let editexpense = require('./components/expense/edit.vue').default;

//salary
let givensalary = require('./components/salary/all_employee.vue').default;
let paysalary = require('./components/salary/create.vue').default;
let allsalary = require('./components/salary/index.vue').default;
let viewsalary = require('./components/salary/view.vue').default;
let editsalary = require('./components/salary/edit.vue').default;

//stock
let stock = require('./components/product/stock.vue').default;
let editstock = require('./components/product/edit-stock.vue').default;

//customers
let storecustomer = require('./components/customer/create.vue').default;
let customer = require('./components/customer/index.vue').default;
let editcustomer = require('./components/customer/edit.vue').default;

//point of sale
let pos = require('./components/pos/pointofsale.vue').default;

//order

let order = require('./components/order/order.vue').default;
let vieworder = require('./components/order/vieworder.vue').default;
let searchorder = require('./components/order/search.vue').default;

//invoice

let invoice = require('./components/order/invoice.vue').default;


export const routes = [{
        path: '/',
        component: login, name:'/'
    },
    {
        path: '/register',
        component: register, name:'register'
    },
    {

        path: '/forgot',
        component: forgot, name:'forgot'
    },

    { path: '/home', component: home, name: 'home' },
    { path: '/logout', component: logout, name: 'logout' },

    //employee routes
    { path: '/store-employee', component: storeemployee, name: 'store-employee' },
    { path: '/employee', component: employee, name: 'employee' },
    { path: '/edit-employee/:id', component: editemployee, name: 'edit-employee' },

    //supplier routes
    { path: '/store-supplier', component: storesupplier, name: 'store-supplier' },
    { path: '/supplier', component: supplier, name: 'supplier' },
    { path: '/edit-supplier/:id', component: editsupplier, name: 'edit-supplier' },

    //category routes

    { path: '/store-category', component: storecategory, name: 'store-category' },
    { path: '/category', component: category, name: 'category' },
    { path: '/edit-category/:id', component: editcategory, name: 'edit-category' },

    //product routes

    { path: '/store-product', component: storeproduct, name: 'store-product' },
    { path: '/product', component: product, name: 'product' },
    { path: '/edit-product/:id', component: editproduct, name: 'edit-product' },

    //stock routes

      { path: '/stock', component: stock, name: 'stock' },
      { path: '/edit-stock', component: editstock, name: 'edit-stock' },

    //expense routes

    { path: '/store-expense', component: storeexpense, name: 'store-expense' },
    { path: '/expense', component: expense, name: 'expense' },
    { path: '/edit-expense/:id', component: editexpense, name: 'edit-expense' },

    //salary
    { path: '/given-salary', component: givensalary, name: 'given-salary' }, 
    { path: '/pay-salary/:id', component: paysalary, name: 'pay-salary' },
    { path: '/salary', component: allsalary, name: 'salary' },
    { path: '/view-salary/:id', component: viewsalary, name: 'view-salary' },
    { path: '/edit-salary/:id', component: editsalary, name: 'edit-salary'},

    //customers
    { path: '/store-customer', component: storecustomer, name: 'store-customer'}, 
    { path: '/customer', component: customer, name: 'customer'}, 
    { path: '/edit-customer/:id', component: editcustomer, name: 'edit-customer' },

    //point of sale

    { path: '/pos', component: pos, name: 'pos' },

    //order

   { path: '/order', component: order, name:'order' },
   { path: '/view-order/:id', component: vieworder, name:'view-order' },
   { path: '/searchorder', component: searchorder, name:'searchorder' },

   //invoice
   
   { path: '/invoice/:id', component: invoice, name:'invoice' },



]