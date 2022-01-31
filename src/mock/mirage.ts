import { createServer, Model } from 'miragejs';

export const mock = () =>
  createServer({
    models: {
      user: Model,
    },
    seeds(server) {
      server.db.loadData({
        users: [
          {
            id: 1,
            firstName: 'Thomas',
            lastName: 'Hudson',
            email: 'thomas.hudson@gmail.com',
            document: '52254883070',
            password: '123456',
            role: 'ADMIN',
          },
          {
            id: 2,
            firstName: 'Crisnaldo',
            lastName: 'Carvalho',
            email: 'crisnaldo72@gmail.com',
            document: '52254883070',
            password: '123456',
            role: 'ADMIN',
          },
        ],
      });
    },
    routes() {
      this.namespace = 'api';

      this.post('/auth', (schema, request) => {
        const { email, password } = JSON.parse(request.requestBody);
        return { email, password };
        // this.schema.where('user', { email });
        // return schema.findBy('user', { email, password });
      });

      this.get('/users', () => {
        return this.schema.all('user');
      });

      this.post('/users', (schema, request) => {
        const data = JSON.parse(request.requestBody);
        return schema.create('user', { ...data, createdAt: new Date() });
      });
    },
  });
