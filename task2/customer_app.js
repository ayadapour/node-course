const { argv } = require('yargs')
const mymethods=require('./myfunctions')
yargs=require('yargs')
yargs.command({
    command:"addcustomer",
    describe:'add new customer',
    builder: {
        id:{type:'number',demandOption:true},
        name:{type:'string',demandOption:true},
        balance:{type:'number',demandOption:true},
        newbalance:{type:'number'}
    },
    handler:function(argv){
        // console.log(`add customer,${argv}`)
        customer={id:argv.id,
            name:argv.name,
            balance:argv.balance
        }
        mymethods.addNewcustomer(customer)
    }
})
yargs.command({
    command:"showall",
    handler:function(){
        mymethods.showdata()
    }
    
})
yargs.command({
    command:"deletecustomer",
    builder: {
        id:{type:'number',demandOption:true}
    },
    handler:function(argv){
        // console.log('delete')
        mymethods.deleteCustomer(argv.id)
    }
})
yargs.command({
    command:"addbalance",
    builder: {
        id:{type:'number',demandOption:true},
        newbalance:{type:'number'}

    },  
    handler:function(argv){
        // customer={id:argv.id,
        //    // name:argv.name,
        //     newbalance:argv.newbalance
        // }
        mymethods.editBalance(argv.id,argv.newbalance)
    }
})


yargs.argv