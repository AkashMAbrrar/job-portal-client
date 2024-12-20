import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import MainLayout from "../layouts/MainLayout";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";
import JobDetails from "../pages/home/jobDeatails/JobDetails";
import PrivetRoute from "./PrivetRoute";
import JobApply from "../pages/JobApply/JobApply";
import MyApplications from "../pages/MyApplications/MyApplications";
import AddJob from "../pages/AddJob/AddJob";
import MyPostedJobs from "../pages/MyPostedJobs/MyPostedJobs";
import ViewApplications from "../pages/viewApplications/ViewApplications";
import { param } from "motion/react-client";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <h2>Route Not Found 404</h2>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/jobs/:id",
        element: (
          <PrivetRoute>
            <JobDetails></JobDetails>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/jobs/${params.id}`),
      },
      {
        path: "/jobApply/:id",
        element: (
          <PrivetRoute>
            <JobApply></JobApply>
          </PrivetRoute>
        ),
      },
      {
        path: "/myApplications",
        element: (
          <PrivetRoute>
            <MyApplications></MyApplications>
          </PrivetRoute>
        ),
      },
      {
        path: "/addJob",
        element: (
          <PrivetRoute>
            <AddJob></AddJob>
          </PrivetRoute>
        ),
      },
      {
        path: "/myPostedJob",
        element: (
          <PrivetRoute>
            <MyPostedJobs></MyPostedJobs>
          </PrivetRoute>
        ),
      },
      {
        path: "/viewApplications/:job_id",
        element: (
          <PrivetRoute>
            <ViewApplications></ViewApplications>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/job-applications/jobs/${params.job_id}`),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
    ],
  },
]);

export default router;
