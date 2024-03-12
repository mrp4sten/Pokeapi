import { assert, use } from 'chai';
import superagent from 'chai-superagent';
import request from 'supertest';
import app from '../index.js';

use(superagent());

describe('Test suite for auth', () => {
    it('should return 401 when no jwt token available', (done) => {
        request(app)
            .get('/team')
            .end((err, res) => {
                assert.equal(res.statusCode, 401)
                done()
            });

    })
    it('should return 400 when data is not provided', (done) => {
        request(app)
            .post('/login')
            .end((err, res) => {
                assert.equal(res.statusCode, 400)
                done()
            });
    });
    it('should return 200 and token for succesfull login', (done) => {
        request(app)
            .post('/login')
            .set('Content-Type', 'application/json')
            .send({ username: 'mrp4sten', password: '1234' })
            .end((err, res) => {
                assert.equal(res.statusCode, 200)
                done()
            });
    });
    it('should return 200 when jwt is valid', (done) => {
        request(app)
            .post('/login')
            .set('Content-Type', 'application/json')
            .send({ username: 'mrp4sten', password: '1234' })
            .end((err, res) => {
                assert.equal(res.statusCode, 200)
                request(app)
                    .get('/team')
                    .set('Authorization', `JWT ${res.body.token}`)
                    .end((err, res) => {
                        assert.equal(res.statusCode, 200)
                        done()
                    });
            })
    })
});