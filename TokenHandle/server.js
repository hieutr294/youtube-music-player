/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
import { join, dirname } from 'path';
import { Low, JSONFile } from 'lowdb';
import { fileURLToPath } from 'url';
import express from 'express';
import getToken from './GetToken.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

const file = join(__dirname, 'db.json');
const adapter = new JSONFile(file);
const db = new Low(adapter);
await db.read();

const app = express();

const port = 8080;

app.get('/', (req, res) => {
  getToken(req.query.code);
  console.log('You can close this tab');
  process.exit(0);
});

app.listen(port, () => {
  console.log(
    'Paste this link to your browser: https://accounts.google.com/o/oauth2/v2/auth?scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fyoutube.readonly&access_type=offline&redirect_uri=http://localhost:8080&response_type=code&client_id=577713440279-pg4tslrdn24c3v62pvd2avlpmkk1uf09.apps.googleusercontent.com'
  );
});
