import axios from "axios";

const API_URL = "http://localhost:5000"; // Backend server URL

export const getUserPoints = async (userId: string) => {
  try {
    const response = await axios.get(`${API_URL}/points/${userId}`, {
      headers: {
        "Cache-Control": "no-store",
      },
    });
    console.log("Fetched points from backend:", response.data.points);
    return response.data.points;
  } catch (error) {
    console.error("Error fetching user points:", error);
    return 0;
  }
};

export const updateUserPoints = async (userId: string, incrementBy: number) => {
  try {
    const response = await axios.post(
      `${API_URL}/points/${userId}`,
      { incrementBy }, // Increment by the given value
      {
        headers: {
          "Cache-Control": "no-store",
        },
      }
    );
    console.log("Response from backend after updating points:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error updating user points:", error);
    throw error;
  }
};

export const getLeaderboard = async () => {
  try {
    const response = await axios.get(`${API_URL}/leaderboard`, {
      headers: {
        "Cache-Control": "no-store",
      },
    });
    console.log("Fetched leaderboard from backend:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching leaderboard:", error);
    return [];
  }
};
