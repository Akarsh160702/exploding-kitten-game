// netlify/functions/getLeaderboard.js
const redis = require("redis");

const client = redis.createClient({
  url: "redis://your-auth-token@your-cluster-endpoint.amazonaws.com:6379",
  // Note: Replace 'your-auth-token' and 'your-cluster-endpoint' with your actual values.
});

exports.handler = async function (event, context) {
  try {
    await client.connect();
    const data = await client.get("leaderboard"); // Replace 'leaderboard' with your Redis key
    await client.quit();

    return {
      statusCode: 200,
      body: JSON.stringify({ leaderboard: data }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch leaderboard data" }),
    };
  }
};
