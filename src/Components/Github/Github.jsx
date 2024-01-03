import React, { useState, useEffect } from 'react';

function Github() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.github.com/users/Amittiwari2004');

        if (!response.ok) {
          throw new Error('Failed to fetch Github data');
        }

        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching Github data:', error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Loading...</div>;
  }

  if (!data) {
    return <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Failed to fetch data</div>;
  }

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github followers: {data.followers}
      <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  );
}

export default Github;
