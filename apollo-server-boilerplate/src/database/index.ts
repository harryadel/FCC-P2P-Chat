import { createConnection } from 'typeorm';
import { log } from '../util';

import Room from '../entities/room/model';

const connection = (app) =>
  createConnection({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: "postgres",
    password: "",
    database: 'p2pdb',
    synchronize: true,
    logging: true,
    entities: [Room],
  })
    .then(() => {
      log('Successfully connected to database', 'DATABASE');

      app();
    })
    .catch((error) => {
      log(`Failure to connect to database: ${error}`, 'Error', true);
    });

export default connection;
