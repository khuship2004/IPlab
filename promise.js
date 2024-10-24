//run in my-app
import React, { useState, useEffect } from "react";

const fetchUserData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true; 
            if (success) {
                resolve({ name: "Khushi", age: 20 });
            } else {
                reject("Failed to fetch user data");
            }
        }, 2000); 
    });
};

const App = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchUserData()
            .then((data) => {
                setUserData(data); // Update state with fetched data
                setLoading(false); // Set loading to false after data is fetched
            })
            .catch((err) => {
                setError(err); // Handle the error
                setLoading(false); // Stop loading if there's an error
            });
    }, []); // Empty dependency array ensures this runs only once after initial render

    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error: {error}</div>;
    }
    return (
        <div>
            <h1>User Information</h1>
            <p>Name: {userData.name}</p>
            <p>Age: {userData.age}</p>
        </div>
    );
};

export default App;
