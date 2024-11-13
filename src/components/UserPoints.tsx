import React, { useEffect, useState } from "react";
import {
  getUserPoints,
  updateUserPoints,
  getLeaderboard,
} from "../api/pointsApi";

interface LeaderboardEntry {
  username: string;
  score: number;
}

const UserPoints: React.FC<{ userId: string }> = ({ userId }) => {
  const [points, setPoints] = useState<number | null>(null);
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);

  const fetchPointsFromRedis = async () => {
    const fetchedPoints = await getUserPoints(userId);
    setPoints(fetchedPoints);
  };

  const fetchLeaderboard = async () => {
    const leaderboardData = await getLeaderboard();
    setLeaderboard(leaderboardData);
  };

  useEffect(() => {
    fetchPointsFromRedis();
    fetchLeaderboard();
  }, [userId]);

  const handleGameWin = async () => {
    await updateUserPoints(userId, 1); // Increment score by 1 point
    fetchPointsFromRedis(); // Refresh user's points
    fetchLeaderboard(); // Refresh leaderboard to show updated scores
  };

  return (
    <div>
      <h1>User Points</h1>
      <p>Current Points: {points !== null ? points : "Loading..."}</p>
      <button onClick={handleGameWin}>Add Point</button>

      <h2>Leaderboard</h2>
      <div>
        {leaderboard.map((entry, index) => (
          <p key={entry.username}>
            {index + 1}. {entry.username}: {entry.score}
          </p>
        ))}
      </div>
    </div>
  );
};

export default UserPoints;
