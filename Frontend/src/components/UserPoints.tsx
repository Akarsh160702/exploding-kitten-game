import React, { useEffect, useState } from "react";
import {
  getUserPoints,
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
  try {
    // Log the userId and incrementBy values
    console.log("Sending update for user:", userId, "increment by:", 1);

    const response = await fetch("http://localhost:8080/update-score", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId, incrementBy: 1 }), // Ensure userId is "Max Payne"
    });

    if (!response.ok) {
      throw new Error("Failed to update score");
    }

    const data = await response.json();
    console.log("Score updated:", data);

    await fetchPointsFromRedis(); // Refresh user's points
    await fetchLeaderboard(); // Refresh leaderboard to show updated scores
  } catch (error) {
    console.error("Error updating points or fetching leaderboard:", error);
  }
};
  return (
    <div>
      <h1>User Points</h1>
      <p>Current Points: {points !== null ? points : "Loading..."}</p>
      <button onClick={handleGameWin}>Win Game</button>
      <h2>Leaderboard</h2>
      <ul>
        {leaderboard.map((entry) => (
          <li key={entry.username}>
            {entry.username}: {entry.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserPoints;

// import React, { useEffect, useState } from "react";
// import {
//   getUserPoints,
//   updateUserPoints,
//   getLeaderboard,
// } from "../api/pointsApi";

// interface LeaderboardEntry {
//   username: string;
//   score: number;
// }

// const UserPoints: React.FC<{ userId: string }> = ({ userId }) => {
//   const [points, setPoints] = useState<number | null>(null);
//   const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);

//   const fetchPointsFromRedis = async () => {
//     const fetchedPoints = await getUserPoints(userId);
//     setPoints(fetchedPoints);
//   };

//   const fetchLeaderboard = async () => {
//     const leaderboardData = await getLeaderboard();
//     setLeaderboard(leaderboardData);
//   };

//   useEffect(() => {
//     fetchPointsFromRedis();
//     fetchLeaderboard();
//   }, [userId]);

//   // const handleGameWin = async () => {
//   //   await updateUserPoints(userId, 1); // Increment score by 1 point
//   //   fetchPointsFromRedis(); // Refresh user's points
//   //   fetchLeaderboard(); // Refresh leaderboard to show updated scores
//   // };

//   const handleGameWin = async () => {
//     try {
//       await updateUserPoints(userId, 1); // Increment score by 1 point
//       await fetchPointsFromRedis(); // Refresh user's points
//       await fetchLeaderboard(); // Refresh leaderboard to show updated scores
//     } catch (error) {
//       console.error("Error updating points or fetching leaderboard:", error);
//     }
//   };

//   return (
//     <div>
//       <h1>User Points</h1>
//       <p>Current Points: {points !== null ? points : "Loading..."}</p>
//       <button onClick={handleGameWin}>Add Point</button>

//       <h2>Leaderboard</h2>
//       <div>
//         {leaderboard.map((entry, index) => (
//           <p key={entry.username}>
//             {index + 1}. {entry.username}: {entry.score}
//           </p>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default UserPoints;
