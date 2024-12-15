import React from "react";
import { useLoaderData } from "react-router-dom";

const ViewApplications = () => {
  const applications = useLoaderData();
  return (
    <div>
      <h2 className="text-xl font-semibold text-center">
        Applications For This Job:{applications.length}
      </h2>
    </div>
  );
};

export default ViewApplications;
