const fs =require('fs')
function readdata(){
    try {
        customers=JSON.parse(fs.readFileSync("customers.json").toString())
        
    } catch (e) {
        customers=[]
        
    }
    return customers
}
// customers=[
//     {id:1,name:'Aya',balance:1000},
//     {id:1,name:'Aya',balance:1000}
// ]
// // fs.writeFileSync('customers.json',JSON.stringify(customers) )
// const data=fs.readFileSync("customers.json")
// const datatostring=data.toString()
// const finaldata=JSON.parse(datatostring) 
// console.log(finaldata)

function addNewcustomer(customer){
    customers=readdata()
    customers.push(customer)
    fs.writeFileSync('customers.json',JSON.stringify(customers) )
    console.log('Customer added ')

}
function showdata(){
    try {
        customers=JSON.parse(fs.readFileSync("customers.json").toString())
        
    } catch (e) {
        customers=[]
        
    }
    customers.forEach(customer => {
        // console.table(customer)
        console.log(`Customer name ${customer.name} and balance is ${customer.balance}`)
    });

}
function deleteCustomer(customerID){
    
    let customers=readdata()
    index=customers.findIndex(customer=>{
         return customer.id==customerID
    })
    if (index==-1)console.log("Customer not found")
    else{
   customers.splice(index,1)
   console.log("Customer deleted")
   fs.writeFileSync('customers.json',JSON.stringify(customers) )
    }
}
function editBalance(customerID,newBalance){
    
    let customers=readdata()
    index=customers.findIndex(customer=>{
         return customer.id==customerID
    })
    if (index==-1)console.log("Customer not found")
    else{
   customers[index].balance=customers[index].balance+ newBalance
   console.log("Customer balance changed successfully")
   fs.writeFileSync('customers.json',JSON.stringify(customers) )
    }
}
module.exports={addNewcustomer,showdata,deleteCustomer,editBalance}