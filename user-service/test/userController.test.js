const request = require('supertest');
const baseUrl = 'http://localhost:3102/user-service';

// Register
describe('POST /register', () => {
  describe('when email and password is missing', () => {
    test('should respond with status code 400 ', async () => {
      const response = await request(baseUrl).post('/register').send({
        firstName: 'Ricky',
        lastName: 'Ricky',
      });
      expect(response.statusCode).toBe(400);
    });
  });

  describe('when all input is valid', () => {
    const testData = {
      email: 'test3@gmail.com',
      password: '123456A',
      firstName: 'Test',
      lastName: 'Test User',
    };

    test('register successful should respond with status code 201 and id ', async () => {
      const response = await request(baseUrl).post('/register').send(testData);
      expect(response.statusCode).toBe(201);
      expect(response.body.result.id).toBeDefined();
    });

    test('user exits should respond with status code 400', async () => {
      const response = await request(baseUrl).post('/register').send(testData);
      expect(response.statusCode).toBe(400);
    });
  });
});
// Login
describe('POST /login', () => {
  describe('when input missing', () => {
    test('when email missing should respond with status code 400 ', async () => {
      const response = await request(baseUrl).post('/login').send({
        password: '123456A',
      });
      expect(response.statusCode).toBe(400);
    });
    test('when password missing should respond with status code 400 ', async () => {
      const response = await request(baseUrl).post('/login').send({
        email: 'abc@gmail.com',
      });
      expect(response.statusCode).toBe(400);
    });
  });

  describe('when all input is valid', () => {
    test('Login Success should respond with status code 200 and token', async () => {
      const response = await request(baseUrl)
        .post('/login')
        .send({ email: 'test1@gmail.com', password: '123456A' });
      expect(response.statusCode).toBe(200);
      expect(response.body.result.token).toBeDefined();
    });

    test('Login fail should respond with status code 400', async () => {
      const response = await request(baseUrl)
        .post('/login')
        .send({ email: 'test1@gmail.com', password: '1' });
      expect(response.statusCode).toBe(400);
      expect(response.body.result).toBeUndefined();
    });
  });
});
