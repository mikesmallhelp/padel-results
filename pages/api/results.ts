import type { NextApiRequest, NextApiResponse } from 'next';
import type { Result, Results } from '../../types/types';
import fs from 'fs';
import path from 'path';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Result[]>
) {

  fs.readFile(path.resolve('./results.json'), 'utf8', (err, jsonString) => {
    if (err) {
      console.log('File read failed:', err);
      return;
    }
    res.status(200).json(JSON.parse(jsonString));
  });
}
