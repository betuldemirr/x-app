"use client";

import { useState, useEffect } from "react";
import axios from "axios";

interface Tweet {
  id: string;
  text: string;
  created_at: string;
  author_id: string;
}

const Home = () => {
  const [tweets, setTweets] = useState<Tweet[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTweets = async () => {
      try {
        const response = await axios.get("/api/tweets", {
          params: {
            query: "#Nextjs",
          },
        });

        setTweets(response.data.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching tweets:", err);
        setError("Failed to fetch tweets.");
        setLoading(false);
      }
    };

    fetchTweets();
  }, []);

  if (loading) {
    return <p>Loading tweets...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Recent Tweets about #Nextjs</h1>
      <ul>
        {tweets.map((tweet) => (
          <li key={tweet.id}>
            <p>{tweet.text}</p>
            <small>
              Posted at: {new Date(tweet.created_at).toLocaleString()}
            </small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
