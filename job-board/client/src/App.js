import React, { useEffect, useState } from 'react';

const App = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/jobs')
      .then(res => res.json())
      .then(data => setJobs(data));
  }, []);

  return (
    <div>
      <h1>Job Listings</h1>
      <ul>
        {jobs.map(job => (
          <li key={job._id}>
            <h3>{job.title}</h3>
            <p>{job.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;