"use client";

// react components
import React, { useState, useEffect } from "react";

export default function Page() {
  // Initialize a state variable and a setter function for it
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Function to fetch user data
  const fetchUserData = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://randomuser.me/api/");
      const data = await response.json();
      setUserData(data.results[0]);
    } catch (error) {
      console.error("Error fetching user data:", error);
    } finally {
      setLoading(false);
    }
  };

  // useEffect to run fetchUserData when the component mounts
  useEffect(() => {
    fetchUserData();
  }, []); // Empty dependency array ensures this runs only once

  return (
    <>
      <h1>Random User Data</h1>
      {loading ? (
        <p>Loading...</p>
      ) : userData ? (
        <div>
          <p>
            <strong>Name:</strong> {userData.name.first} {userData.name.last}
          </p>
          <p>
            <strong>Email:</strong> {userData.email}
          </p>
          <img
            src={userData.picture.large}
            alt={`${userData.name.first} ${userData.name.last}`}
          />
        </div>
      ) : (
        <p>No user data found.</p>
      )}
      <button onClick={fetchUserData}>Fetch new random user</button>
    </>
  );
}
