import { assert, use } from 'chai';
import superagent from 'chai-superagent';
import request from 'supertest';
import app from '../index.js';

use(superagent());

describe('Test suite for teams', () => {
  it('should return team of given user', (done) => {
    let team = [{ name: 'Charizard' }, { name: 'Blastoise' }]
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
          .send({ team })
          .set('Authorization', `JWT ${jwt}`)
          .end((err, res) => {
            request(app)
              .get('/teams')
              .set('Authorization', `JWT ${jwt}`)
              .end((err, res) => {
                assert.equal(res.statusCode, 200)
                assert.equal(res.body.trainer, 'mrp4sten')
                assert.equal(res.body.team.length, 2)
                assert.equal(res.body.team[0].name, team[0].name)
                assert.equal(res.body.team[1].name, team[1].name)
                done()
              });
          });
      })
  })
  it('should return the pokedex number', (done) => {
    let pokemonName = 'Bulbasaur'
    request(app)
      .post('/auth/login')
      .set('Content-Type', 'application/json')
      .send({ username: 'mrp4sten2', password: '1234' })
      .end((err, res) => {

        let jwt = res.body.token

        // Expect valid login
        assert.equal(res.statusCode, 200)
        request(app)
          .post('/teams/pokemons')
          .send({ name: pokemonName })
          .set('Authorization', `JWT ${jwt}`)
          .end((err, res) => {
            request(app)
              .get('/teams')
              .set('Authorization', `JWT ${jwt}`)
              .end((err, res) => {
                assert.equal(res.statusCode, 200)
                assert.equal(res.body.trainer, 'mrp4sten2')
                assert.equal(res.body.team.length, 1)
                assert.equal(res.body.team[0].name, pokemonName)
                assert.equal(res.body.team[0].pokedexNumber, 1)
                done()
              });
          });
      })
  })
})