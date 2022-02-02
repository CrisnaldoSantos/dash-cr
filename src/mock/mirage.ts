/* eslint-disable @typescript-eslint/ban-types */
import { createServer, Model, Response, Registry } from 'miragejs';
import { ModelDefinition } from 'miragejs/-types';
import Schema from 'miragejs/orm/schema';
import { UserData } from 'models/userData';

export type User = {
  firstName: string;
  lastName: string;
  email: string;
  document: string;
  password: string;
  password_confirmation: string;
  role: string;
};

const UserModel: ModelDefinition<User> = Model.extend({});

type AppRegistry = Registry<
  {
    user: typeof UserModel;
  },
  {}
>;
type AppSchema = Schema<AppRegistry>;

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
            firstName: 'Poderoso',
            lastName: 'Chefão',
            email: 'poderoso.chefao@gmail.com',
            document: '757.675.110-04',
            password: '123456',
            role: 'ADMIN',
          },
          {
            id: 2,
            firstName: 'Crisnaldo',
            lastName: 'Carvalho',
            email: 'crisnaldo72@gmail.com',
            document: '538.399.030-50',
            password: '123456',
            role: 'ADMIN',
          },
          {
            id: 3,
            firstName: 'Usuario',
            lastName: 'Comum',
            email: 'usuario3@user.com',
            document: '654.958.070-65',
            password: '123456',
            role: 'USER',
          },
          {
            id: 4,
            firstName: 'Usuario',
            lastName: 'Quarto',
            email: 'usuario4@user.com',
            document: '654.958.070-65',
            password: '123456',
            role: 'ADMIN',
          },
        ],
      });
    },
    routes() {
      this.namespace = 'api';

      this.post('/auth', (schema: AppSchema, request) => {
        interface RequestProps {
          email: string;
          password: string;
        }

        const data: RequestProps = JSON.parse(request.requestBody);
        const { email, password } = data;

        const user = schema.findBy('user', { email, password });
        if (!user) {
          return new Response(
            401,
            { some: 'header' },
            { error: ['user not authorized'] }
          );
        }
        return { user, token: 'ta-autorizado-meu-chapa!' };
      });

      this.get('/users', () => {
        return this.schema.all('user');
      });

      this.get('/users/:id', (schema, request) => {
        const { id } = request.params;
        return schema.find('user', id);
      });

      this.post('/users', (schema: AppSchema, request) => {
        type CreateUserData = Omit<UserData, 'id'>;
        const data: CreateUserData = JSON.parse(request.requestBody);
        const { document, email } = data;
        const existsEmail = schema.findBy('user', { email });
        const existsDocument = schema.findBy('user', { document });
        if (existsEmail) {
          return new Response(
            400,
            { some: 'header' },
            { error: ['This email already exists'] }
          );
        }
        if (existsDocument) {
          return new Response(
            400,
            { some: 'header' },
            { error: ['This CPF already exists'] }
          );
        }

        return schema.create('user', data);
      });

      this.put('/users/:id', (schema, request) => {
        const { id } = request.params;
        const data = JSON.parse(request.requestBody);
        const user = schema.find('user', id);
        if (!user) {
          return new Response(
            404,
            { some: 'header' },
            { error: ['user not exists'] }
          );
        }
        user?.update(data);
        return user;
      });

      this.delete('/users/:id', (schema, request) => {
        const { id } = request.params;
        const user = schema.find('user', id);

        if (!user) {
          return new Response(
            404,
            { some: 'header' },
            { error: ['user not exists'] }
          );
        }
        user?.destroy();
        return null;
      });
    },
  });
