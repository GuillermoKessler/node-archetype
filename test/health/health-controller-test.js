'use strict';

/**
 * Health Test.
 *
 * @module
 * @author Guillermo A. Fernández Kessler
 */

const should = require('chai').Should();
const request = require('supertest');
const app = require('../../middlewares/express');


describe('Health Controller Test :: Keep Alive', () => {

  it('Should get OK', (done) => {
    request(app)
      .get('/node-archetype/keep-alive')
      .expect(200)
      .end((err, res) => {
        should.not.exist(err);
        should.exist(res.body);
        done();
      });
  });

});

