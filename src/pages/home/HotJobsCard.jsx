import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { TbCoinTakaFilled } from "react-icons/tb";
import { Link } from "react-router-dom";

const HotJobsCard = ({ job }) => {
  const {
    title,
    _id,
    company,
    company_logo,
    requirements,
    description,
    salaryRange,
    location,
  } = job;

  return (
    <div className="card bg-base-300 rounded-md w-80 cursor-pointer hover:bg-blue-400 shadow-xl">
      <div className="flex justify-center items-center gap-4 m-2">
        <figure>
          <img className="w-20" src={company_logo} />
        </figure>
        <div>
          <h4 className="text-2xl">{company}</h4>
          <div className="flex justify-center items-center gap-1">
            <FaMapMarkerAlt></FaMapMarkerAlt>
            <p>{location}</p>
          </div>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="flex gap-2 flex-wrap">
          {requirements.map((skill, index) => (
            <p
              key={skill.index}
              className="badge badge-outline rounded-md text-center m-2 hover:bg-blue-900 hover:text-white font-bold">
              {skill}
            </p>
          ))}
        </div>
        <div className="card-actions justify-start mt-4">
          <p>
            Salary: {salaryRange.min} - {salaryRange.max}
            <div className="flex items-center gap-1">
              {salaryRange.currency}
              <TbCoinTakaFilled />
            </div>
          </p>
          <Link to={`/jobs/${_id}`}>
            <div className="badge badge-outline">Apply</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HotJobsCard;
