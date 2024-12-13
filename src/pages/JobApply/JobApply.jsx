import React from "react";
import { useParams } from "react-router-dom";

const JobApply = () => {
  const { id } = useParams();
  console.log(id);

  const handleSubmitJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedIn = form.linkedIn.value;
    const gitHub = form.github.value;
    const resume = form.resume.value;
    const photo = form.photo.value;
    console.log({ linkedIn, gitHub, resume, photo });
    form.reset();
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Applying Here !</h1>
          <p className="py-6">
            Get Your Dream Job By Applying Here. We Always On Behalf of You.
            There Is A Few More Steps To Go.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmitJob} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">LinkedIn Url</span>
              </label>
              <input
                type="url"
                placeholder="LinkedIn Url"
                name="linkedIn"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">GitHub Url</span>
              </label>
              <input
                type="url"
                name="github"
                placeholder="Github url"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Resume Url</span>
              </label>
              <input
                type="url"
                name="resume"
                placeholder="Resume url"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="url"
                name="photo"
                placeholder="Photo url"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-accent">Apply</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobApply;