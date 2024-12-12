import React, { useContext } from "react";
import AuthContext from "../../Context/AuthContext";
import google from "../../assets/logo/google.png";
import { useNavigate } from "react-router-dom";

const SocialAuth = () => {
  const { signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    signInWithGoogle().then((result) => {
      console.log(result.user).then((error) => {
        console.log(error.message);
      });
    });
  };

  return (
    <div className="border-4 rounded-md">
      <button className="btn btn-ghost w-full" onClick={handleGoogleSignIn}>
        <img className="w-7" src={google} alt="" />
        SignIn With Google
      </button>
    </div>
  );
};

export default SocialAuth;
