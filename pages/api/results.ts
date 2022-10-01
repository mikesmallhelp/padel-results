import type { NextApiRequest, NextApiResponse } from 'next';
import type { Result } from '../../types/types';
import { promises as fs } from 'fs';
import path from 'path';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Result[]>
) {
  const jsonDirectory = path.join(process.cwd(), 'public');
  const fileContents = await fs.readFile(jsonDirectory + '/results.json', 'utf8');
  res.status(200).json(JSON.parse(fileContents));
}
