import type { NextApiRequest, NextApiResponse } from 'next';
import type { Result } from '../../types/types';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Result[]>
) {
  res.status(200).json(
    [{
      date: new Date(),
      team1Result: {
        player1Id: 1,
        player2Id: 2,
        result: 3
      },
      team2Result: {
        player1Id: 3,
        player2Id: 4,
        result: 6
      }
    }])
}
