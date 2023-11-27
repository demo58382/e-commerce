// keepalive.jsx
import React, { useEffect } from 'react';

const KeepAlive = () => {
  useEffect(() => {
    const pingServer = () => {
      fetch(`https://e-commerce.demoaccount26.repl.co/`)
        .then((response) => {
          console.log('Keep alive!', response.status);
        })
        .catch((error) => {
          console.error('Keep alive failed:', error);
        });
    };

    // Ping the server every 5 minutes to keep it alive
    const intervalId = setInterval(pingServer, 1000); // 60000 milliseconds = 1 minute

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  return null;
};

export default KeepAlive;
