import { assert, use } from 'chai';
import superagent from 'chai-superagent';
import request from 'supertest';
import app from '../index.js'

use(superagent());

describe('Test suite for auth', () => {
    it('should return 403', (done) => {
        request(app)
            .get('/team')
            .end((err, res) => {
                assert.equal(res.statusCode, 403)
            });
    });
    it('should return 401', (done) => {
        request(app)
            .get('/team')
            .end((err, res) => {
                assert.equal(res.statusCode, 401)
            });
    });
    it('should return 200', (done) => {
        request(app)
            .post('/login')
            .end((err, res) => {
                request(app)
                    .get('/team')
                    .set('Áuthorization', `JWT ${res.body.token}`)
                    .end((err, res) => {
                        assert.equal(res.statusCode, 200)
                    });
            });
    });
});