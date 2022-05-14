// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Stats, Video } = initSchema(schema);

export {
  Stats,
  Video
};