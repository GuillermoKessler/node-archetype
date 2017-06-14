'use strict';

/**
 * Product Test.
 *
 * @module
 * @author Guillermo Fernández Kessler
 */

const should = require('chai').Should();
const request = require('supertest');
const app = require('../../../middlewares/express');

describe('Product', () => {

  it('Should get all Products', (done) => {

    request(app)
      .get('/node-archetype/v1/products')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        should.not.exist(err);
        res.body[0].should.have.property('id');
        res.body[0].id.should.equal(1);
        res.body[1].id.should.equal(2);
        done();
      });
  });

  it('Should get a Product', (done) => {

    request(app)
      .get('/node-archetype/v1/products/1')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        should.not.exist(err);
        res.body.should.have.property('id');
        res.body.id.should.equal(1);
        done();
      });
  });

  it('Should post a Product', (done) => {

    request(app)
      .post('/node-archetype/v1/products')
      .send({
        id: 2,
        name: 'Product'
      })
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        should.not.exist(err);
        res.body.should.have.property('id');
        res.body.id.should.equal(2);
        done();
      });
  });

  it('Should put a Product', (done) => {

    request(app)
      .put('/node-archetype/v1/products/4')
      .send({
        id: 4,
        name: 'Other Product'
      })
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        should.not.exist(err);
        res.body.should.have.property('id');
        res.body.id.should.equal(4);
        done();
      });
  });

  it('Should get Error when delete Product', (done) => {

    request(app)
      .delete('/node-archetype/v1/products/4')
      .expect('Content-Type', /json/)
      .expect(501)
      .end((err, res) => {
        should.not.exist(err);
        res.body.should.have.property('message');
        res.body.message.should.equal('Funcionalidad no implementada');
        done();
      });
  });

});
