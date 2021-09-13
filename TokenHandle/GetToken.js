/* eslint-disable promise/always-return */
/* eslint-disable promise/catch-or-return */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/naming-convention */
import axios from 'axios';
import qs from 'qs';
import { join, dirname } from 'path';
import { Low, JSONFile } from 'lowdb';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const file = join(__dirname, 'db.json');
const adapter = new JSONFile(file);
const db = new Low(adapter);
await db.read();

function getToken(code) {
  const data = {
    code,
    client_id:
      '577713440279-pg4tslrdn24c3v62pvd2avlpmkk1uf09.apps.googleusercontent.com',
    client_secret: '999_tgPFU9_XHXZc3R_24pVR',
    redirect_uri: 'http://localhost:8080',
    grant_type: 'authorization_code',
  };

  const config = {
    url: 'https://oauth2.googleapis.com/token',
    method: 'post',
    data: qs.stringify(data),
  };

  axios(config).then((req) => {
    db.data.token = req.data;
  });
  return 1;
}

export default getToken;
