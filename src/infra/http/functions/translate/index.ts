import schema from './schema/schema';
import { handlerPath } from '@libs/handler-resolver';

export default {
  handler: `${handlerPath(__dirname)}/handler/index.main`,
  events: [
    {
      http: {
        method: 'post',
        path: 'handler',
        require: {
          schemas: {
            'appication/json': schema
          }
        }
      },
    },
  ],
};
