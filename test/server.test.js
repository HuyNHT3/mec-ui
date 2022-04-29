const request = require('supertest');
const app = require('../app');

  describe('GET /health', function() {
    it('test health check for bff server', async ()=> {
      const res=await request(app).get('/health');
      expect(res.statusCode).toEqual(200);
    });
  });