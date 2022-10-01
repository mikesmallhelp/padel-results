export type TeamResult = {
    player1Id: number;
    player2Id: number;
    result: number;
}

export type Result = {
    date: Date;
    team1Result: TeamResult;
    team2Result: TeamResult;
}