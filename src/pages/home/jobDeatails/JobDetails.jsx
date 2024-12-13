import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const { _id, title, company, deadline, company_logo } = useLoaderData();

  return (
    <div className="m-10">
      <h2 className="text-2xl font-semibold text-center">
        Job Details For: {title}
      </h2>
      <div className="border-2 mt-2 w-3/4 p-4">
        <div className="flex justify-center items-center gap-2">
          <p className="font-semibold">{title}</p>
          <img src={company_logo} alt="" />
        </div>
        <p>Applying For: {company}</p>
        <p>Deadline: {deadline}</p>
      </div>
      <Link to={`/jobApply/${_id}`}>
        <button className="btn btn-accent mt-2">Apply Now</button>
      </Link>
    </div>
  );
};

export default JobDetails;
