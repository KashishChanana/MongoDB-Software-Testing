/**
 * Created by home on 26/8/17.
 */
const mocha=require('mocha');
const assert= require('assert');
const marioChar= require('../models/modelsandschema');

/*describe('some test', function(){

    it('adds two numbers together', function(){
        assert(2+4 === 5);
    });

   });

 */
describe('saving mongodb', function(){
    var char, onemore, hii;

    beforeEach(function(){
        char= new marioChar({
            name: 'kashish',
            weight: 45
        });
        onemore= new marioChar({
            name:'vidheep',
            weight:20
        });
        hii= new marioChar({
            name:'try',
            weight:20
        })
    });
    it("saves data to mongodb", function(done){

        hii.save();
       onemore.save();

       char.save().then(function(){
           assert(char.isNew==false)
           done();
    });

    });

    it("finds data in mongodb", function(){
        marioChar.findOne({name:'kashish'}).then(function(result){
            assert(result.name==='kashish');
        });
    });

    it("find data by id", function(){
    marioChar.findOne({_id:char._id}).then(function(){
       assert(_id.toString()=== char._id.toString());
    });
    });

    it("deletes records",function(done){
        marioChar.findOneAndRemove({name:'vidheep'}).then(function(){
            marioChar.find({name:'vidheep'},function(result){
                assert(result===null);
            });
        });
        done();
    });

    it("updates records", function(){
        marioChar.findOneAndUpdate({name:'try'},{name:'trynew'}).then(function(){
            marioChar.findOne({_id:hii._id},function(result){
                assert(result.name='trynew');
            })
        })
    })

    it("increases weight by one", function(){
        marioChar.update({},{$inc:{weight:1}}).then(function(){
            marioChar.find({name:'trynew'},function(result){
               assert(result.weight===21);
            })
        })
    })
});
