import Swal from "sweetalert2";
import UseAuth from "../../hooks/UseAuth";
import { useNavigate } from "react-router-dom";

const AddJob = () => {
  const { user } = UseAuth();
  const navigate = useNavigate();

  const handleAddJob = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    // console.log(formData.entries());
    const initialData = Object.fromEntries(formData.entries());
    console.log(initialData);
    const { min, max, currency, ...newJob } = initialData;
    newJob.salaryRange = { min, max, currency };
    newJob.requirements = newJob.requirements.split("\n");
    newJob.responsibility = newJob.responsibility.split("\n");
    console.log(newJob);

    // send data to the backend
    fetch("http://localhost:3000/jobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newJob),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your job circulation has been added",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/myPostedJob");
        }
      });
  };

  // const JobTitle = title;
  // const JobLocation = location;
  // const requirement = requirements;
  // const responsibility = responsibility;
  // const JobType  = type;
  // const rangeMin = min;
  // const rangeMax = max;
  // const companyName = companyName;
  // const companyLogo = logo;
  // const JobDescription = description;
  // const hrName = hrName;
  // const hrEmail = hrEmail;

  return (
    <div className="">
      <h2 className="text-3xl text-center font-semibold mt-6">
        Post A New Job
      </h2>
      <div className="divider h-1 bg-black w-3/4 mx-auto"></div>

      <form onSubmit={handleAddJob} className="card-body w-3/4 mx-auto">
        {/* job title */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl font-semibold">Job Title</span>
          </label>
          <input
            type="text"
            placeholder="Job Title"
            name="title"
            className="input input-bordered"
            required
          />
        </div>
        {/* job Location */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl font-semibold">
              Job Location
            </span>
          </label>
          <input
            type="text"
            placeholder="Job Location"
            name="location"
            className="input input-bordered"
            required
          />
        </div>
        {/* Requirements */}
        <div className="form-control ">
          <label className="label">
            <span className="label-text text-xl font-semibold">
              Job Requirements
            </span>
          </label>
          <textarea
            className="textarea textarea-bordered"
            name="requirements"
            placeholder="Put each requirements in a new line "></textarea>
        </div>
        {/* Responsibility */}
        <div className="form-control ">
          <label className="label">
            <span className="label-text text-xl font-semibold">
              Job Responsibilities
            </span>
          </label>
          <textarea
            className="textarea textarea-bordered"
            name="responsibility"
            placeholder="Write each responsibility in a new line "></textarea>
        </div>
        {/* job Type */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-semibold">Job Type</span>
            </label>
            <select
              defaultValue="Pick A Job"
              className="w-full select select-bordered"
              name="type">
              <option disabled>Pick A Job Type</option>
              <option>Full Time</option>
              <option>Intern</option>
              <option>Part Time</option>
            </select>
          </div>
          {/* job Category */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-semibold">
                Job Field
              </span>
            </label>
            <select
              defaultValue="Select A Job"
              className="w-full select select-bordered ">
              <option disabled>Select A Job Field</option>
              <option>Engineering</option>
              <option>Marketing</option>
              <option>Management</option>
              <option>Finance</option>
              <option>Banking</option>
              <option>Consultancy</option>
            </select>
          </div>
        </div>
        {/* salary range */}
        <div className="grid grid-cols-1 lg:grid-cols-3 items-end">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-semibold">
                Salary Range Min
              </span>
            </label>
            <input
              type="text"
              placeholder="min"
              name="min"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-semibold">
                Range Max
              </span>
            </label>
            <input
              type="text"
              placeholder="max"
              name="max"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-2">
            <select
              defaultValue="Currency"
              name="currency"
              className="w-full select select-bordered">
              <option disabled>Currency</option>
              <option>BDT</option>
              <option>USD</option>
              <option>INR</option>
              <option>Euro</option>
            </select>
          </div>
        </div>
        {/* company name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl font-semibold">
              Company Name
            </span>
          </label>
          <input
            type="text"
            placeholder="Company Name"
            name="company"
            className="input input-bordered"
            required
          />
        </div>
        {/* company logo */}
        <div className="grid grid-cols-1 lg:grid-cols-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-semibold">Job Logo</span>
            </label>
            <input
              type="url"
              placeholder="Job Logo"
              name="company_logo"
              className="input input-bordered"
              required
            />
          </div>
          {/* hr email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-semibold">
                Email (hr)
              </span>
            </label>
            <input
              type="email"
              placeholder="hr Email"
              defaultValue={user?.email}
              name="hrEmail"
              className="input input-bordered"
              required
            />
          </div>
          {/* application deadline */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-semibold">
                Application Deadline
              </span>
            </label>
            <input
              type="date"
              placeholder="Deadline"
              name="applicationDeadline"
              className="input input-bordered"
              required
            />
          </div>
          {/* hr name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-semibold">Hr Name</span>
            </label>
            <input
              type="text"
              placeholder="hr Name"
              name="hrName"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        {/* Job description */}
        <div className="form-control ">
          <label className="label">
            <span className="label-text text-xl font-semibold">
              Job Description
            </span>
          </label>
          <textarea
            className="textarea textarea-bordered"
            name="description"
            placeholder="Description"></textarea>
        </div>
        {/* submit button */}
        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddJob;
