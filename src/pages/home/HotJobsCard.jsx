import React from "react";

const HotJobsCard = ({ job }) => {
  const {
    title,
    company,
    company_logo,
    requirements,
    description,
    salaryRange,
    location,
  } = job;

  return (
    <div className="card bg-base-300 rounded-md w-80 shadow-xl">
      <div className="flex justify-center items-center gap-4 m-2">
        <figure>
          <img className="w-20" src={company_logo} />
        </figure>
        <div>
          <h4 className="text-2xl">{company}</h4>
          <p>{location}</p>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">
          Shoes!
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

export default HotJobsCard;
