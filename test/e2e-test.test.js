import { assert, use } from 'chai';
import superagent from 'chai-superagent';
import request from 'supertest';
import app from '../index.js'

use(superagent());

describe('Test suite', () => {
    it('should return hello world', (done) => {
        request(app)
            .get('/')
            .end((err, res) => {
                assert.equal(res.text, 'Hello World')
                done();
            });
    });
});