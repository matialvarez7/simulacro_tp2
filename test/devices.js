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
        it.skip('Si el dispositivo existe puedo eliminarlo', function(done){
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
});

describe('Canales favoritos', function(){
    describe('Adheris canales a favoritos de un sipositivo', function(){
        it.skip('Si el dispositvo no existe no puedo adherir a favoritos', function(done){
            request(app)
                .post('/devices/5/favorites')
                .send({
                    channelId: 1
                })
                .expect(404)
                .end(function(err, res){
                    assert.equal(res.body.message, "DEVICE_NOT_FOUND")
                    if(err) done(err)
                    return done()
                })

        })

        it.skip('Si el dispositivo no tiene el canal no puedo adherir a favoritos', function(done){
            request(app)
                .post('/devices/1/favorites')
                .send({channelId: 4})
                .expect(400)
                .end(function(err, res){
                    assert.equal(res.body.message, "DEVICE_DOES_NOT_HAVE_THE_CHANNEL")
                    if(err) done(err)
                    return done()
                })
        })

        it('Si el disposito no lo tiene en favoritos puedo agregarlo', function(done){
            request(app)
                .post('/devices/1/favorites')
                .send({channelId: 2})
                .expect(201)
                .end(function(err, res){
                    assert.equal(res.body.message, 'CHANNEL_ADDED_SUCCESSFULLY')
                    if(err) done(err)
                    return done()
                })

        })

        it.skip('Si el dispositivo ya lo tiene en favoritos no puedo agregarlo', function(done){
            request(app)
                .post('/devices/1/favorites')
                .send({channelId: 3})
                .expect(400)
                .end(function(err, res){
                    assert.equal(res.body.message, "CHANNEL_ALREADY_EXIST_IN_FAVORITES")
                    if(err) done(err)
                    return done()
                })
        })
    })
});