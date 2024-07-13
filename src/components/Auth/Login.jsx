import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import EyeIcon from "../icons/EyeIcon";

function Login(props) {
  const [continueWithEmail, setContinueWithEmail] = useState(false);
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // saved login id to loacal storage
  const addToLocalStorage = (token) => {
    localStorage.setItem("auth-token", token);
  };

  // handle form validator
  const validateForm = () => {
    const errors = {};

    if (!user.email) {
      errors.email = "email required...!";
    }
    if (!user.password) {
      errors.password = "Password required...!";
    }

    return errors;
  };

  // Handle Show Password and Confirm Password
  const handlePassword = () => {
    setPassword((prev) => !prev);
  };

  // Handle Change
  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    const errorsValues = Object.values(formErrors);
    setLoading(true);
    const data = {
      email: user.email,
      password: user.password,
    };
    const url = `https://zenia.applematch.com/login/`;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    try {
      if (Object.keys(formErrors).length === 0) {
        const response = await fetch(url, params);

        const resObj = await response.json();

        // if the response was false
        if (!response.ok) {
          throw new Error(resObj.detail);
          // setLoading(false);
        }
        toast.success("Login successful");
        setLoading(false);
      } else {
        toast.error(errorsValues[0]);
        setLoading(false);
      }
    } catch (err) {
      toast.error(err.message);
      setLoading(false);
    }
  };
  const handleShow = (e) => {
    e.preventDefault();
    setContinueWithEmail((prev) => !prev);
  };
  return (
    <div className="auth-wrapper">
      <Toaster position="top-center" reverseOrder={false}></Toaster>

      <section className="auth-section">
        <div className="auth-container">
          <div className="form-container">
            <Link className="logo" to="/">
              <h1>zenia</h1>
            </Link>
            <form onSubmit={handleSubmit}>
              <h2>login to zenia</h2>
              <div className="continue-btns">
                <div className="btn-container">
                  <button className="cta-btn google-btn">
                    <span>continue with google</span>
                  </button>
                </div>
                <div className="btn-container">
                  <button
                    className="cta-btn"
                    style={{
                      display: `${continueWithEmail ? "none" : "block"}`,
                    }}
                    onClick={handleShow}
                  >
                    <span>continue with email</span>
                  </button>
                </div>
              </div>
              {continueWithEmail && (
                <div className="other-btns">
                  <div className="form-field">
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      id="email"
                      value={user.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-field">
                    <input
                      type={password ? "text" : "password"}
                      placeholder="Password"
                      name="password"
                      id="password"
                      value={user.password}
                      onChange={handleChange}
                    />
                    <span
                      className={`eye-icon-container ${password ? "active" : ""}`}
                      onClick={handlePassword}
                    >
                      <EyeIcon />
                    </span>
                  </div>
                  <div className="btn-container">
                    <button className="cta-btn">
                      <span>{loading ? "sending..." : "login"}</span>
                    </button>
                  </div>
                </div>
              )}
              <div className="form-footer">
                <p className="text-center">
                  Do not have an account{" "}
                  <Link className="inline-block text-[#0c8ce9]" to="/register">
                    sign up
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
      <div className="animated-video">
        <div className="video-container">
          <video
            src={`/assets/videos/auth-animation.mp4`}
            loop={true}
            autoPlay={true}
            muted={true}
          ></video>
        </div>
      </div>
    </div>
  );
}

export default Login;
