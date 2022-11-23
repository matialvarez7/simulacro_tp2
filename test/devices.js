const {assert} = require('chai');
const request = require('supertest');
const app = require('../app');

describe('Autenticacion de dispositivo', function(){
    describe('Creacion de un dispositivo', function(){
        it.skip('Si el dispositivo no existe puedo crearlo', function(done){
            request(app)
                .post('/devices')
                .send({
                    identifier: "M1A9T9I1A0S1"
                })
                .expect(201)
                .end(function(err, res){
                    assert.equal(res.body.message, "NEW_DEVICE_CREATED")
                    if(err) done(err)
                    return done()
                })
        })
    })

    describe('Eliminacion de un dispositivo', function(){
        it('Si el dispositivo existe puedo eliminarlo', function(done){
            request(app)
                .delete('/devices/M1A9T9I1A0S1')
                .expect(200)
                .end(function(err, res){
                    assert.equal(res.body.message, "DEVICE_DELETED")
                    if(err) done(err)
                    return done()
                })
        })
    })
})