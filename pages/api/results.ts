import type { NextApiRequest, NextApiResponse } from 'next';
import type { Result } from '../../types/types';
import fs from 'fs';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Result[]>
) {

  fs.readFile('./results.json', 'utf8', (err, jsonString) => {
    if (err) {
      console.log('File read failed:', err);
      return;
    }
    res.status(200).json(JSON.parse(jsonString));
  });
}
