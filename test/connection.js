/**
 * Created by home on 25/8/17.
 */
const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/firstmongodb');

before(function(done){
    mongoose.connection.once('open', function(){
        console.log("connection established");
        done();
    }).on('error',function(error){
        console.log("error occured ", error);
    })
});

