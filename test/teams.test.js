import { assert, use } from 'chai';
import superagent from 'chai-superagent';
import request from 'supertest';
import app from '../index.js';

use(superagent());

describe('Test suite for teams', () => {
  it('should return team of given user', (done) => {
    request(app)
      .post('/auth/login')
      .set('Content-Type', 'application/json')
      .send({ username: 'mrp4sten', password: '1234' })
      .end((err, res) => {

        let jwt = res.body.token

        // Expect valid login
        assert.equal(res.statusCode, 200)
        request(app)
          .put('/teams')
          .send({ team: [{ name: 'Charizard' }, { name: 'Blastoise' }] })
          .set('Authorization', `JWT ${jwt}`)
          .end((err, res) => {
            request(app)
              .get('/teams')
              .set('Authorization', `JWT ${jwt}`)
              .end((err, res) => {
                assert.equal(res.statusCode, 200)
                assert.equal(res.body.trainer, 'mrp4sten')
                assert.equal(res.body.team.length, 2)
                assert.equal(res.body.team[0].name, 'Charizard')
                assert.equal(res.body.team[1].name, 'Blastoise')
                done()
              });
          });
      })
  })
})