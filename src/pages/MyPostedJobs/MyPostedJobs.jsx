import React, { useEffect, useState } from "react";
import UseAuth from "../../hooks/UseAuth";

const MyPostedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const { user } = UseAuth();

  useEffect(() => {
    fetch(`http://localhost:3000/jobs?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, [user?.email]);

  return (
    <div>
      <h2 className="text-3xl text-center font-semibold">
        My Posted Jobs:{jobs.length}
      </h2>
    </div>
  );
};

export default MyPostedJobs;
