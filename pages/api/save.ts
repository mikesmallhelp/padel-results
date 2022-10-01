import type { NextApiRequest, NextApiResponse } from 'next';
import type { Result } from '../../types/types';
import { promises as fs } from 'fs';
import path from 'path';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Result[]>
) {
  const jsonDirectory = path.join(process.cwd(), 'data');
  const fileContents = await fs.readFile(jsonDirectory + '/results.json', 'utf8');
  const results: Result[] = JSON.parse(fileContents);

  const result = {
    date: new Date(),
    team1Result: {
      player1Id: 11,
      player2Id: 22,
      result: 3
    },
    team2Result: {
      player1Id: 33,
      player2Id: 44,
      result: 6
    }
  }

  results.push(result);

  await fs.writeFile(jsonDirectory + '/results.json', JSON.stringify(results));
  res.status(200).json(results);
}
