import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import EyeIcon from "../icons/EyeIcon";

function Register(props) {
  const [continueWithEmail, setContinueWithEmail] = useState(false);
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  // handle form validator
  const validateForm = () => {
    const errors = {};

    if (!user.username) {
      errors.username = "username required...!";
    }
    if (!user.email) {
      errors.email = "email required...!";
    }
    if (!user.password) {
      errors.password = "Password required...!";
    }
    if (!user.confirm_password) {
      errors.confirm_password = "confirm password required...!";
    }

    return errors;
  };

  // Handle Show Password and Confirm Password
  const handlePassword = () => {
    setPassword((prev) => !prev);
  };

  const handleConfirmPassword = () => {
    setConfirmPassword((prev) => !prev);
  };

  // Handle Change
  const handleChange = (e) => {
    // const [name, value] = e.target;
    // setUser((prev) => {
    //   return {
    //     ...prev,
    //     [name]: value,
    //   };
    // });
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    const errorsValues = Object.values(formErrors);
    setLoading(true);
    const data = {
      username: user.username,
      email: user.email,
      password: user.password,
      confirm_password: user.confirm_password,
    };
    const url = `https://zenia.applematch.com/register/`;
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

        // if the response was false
        if (!response.ok) {
          throw new Error(
            "Something went wrong..\n Confrim if userame exist..!",
          );
          // setLoading(false);
        }
        const resObj = await response.json();
        toast.success(resObj.detail);
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
    <>
      <div className="auth-wrapper">
        <Toaster position="top-center" reverseOrder={false}></Toaster>

        <section className="auth-section">
          <div className="auth-container">
            <div className="form-container">
              <Link className="logo" to="/">
                <h1>zenia</h1>
              </Link>
              <form onSubmit={handleSubmit}>
                <h2>create an account</h2>
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
                        type="text"
                        placeholder="username"
                        name="username"
                        id="username"
                        value={user.username}
                        onChange={handleChange}
                      />
                    </div>
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
                    <div className="form-field">
                      <input
                        type={confirmPassword ? "text" : "password"}
                        placeholder="Confirm Password"
                        name="confirm_password"
                        id="confirm_password"
                        value={user.confirm_password}
                        onChange={handleChange}
                      />
                      <span
                        className={`eye-icon-container ${confirmPassword ? "active" : ""}`}
                        onClick={handleConfirmPassword}
                      >
                        <EyeIcon />
                      </span>
                    </div>
                    <div className="btn-container">
                      <button className="cta-btn">
                        <span>{loading ? "sending..." : "register"}</span>
                      </button>
                    </div>
                  </div>
                )}
                <div className="form-footer">
                  <p className="text-center">
                    Already have an account{" "}
                    <Link className="inline-block text-[#0c8ce9]" to="/login">
                      login
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>
        <div className="animated-video relative">
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
    </>
  );
}

export default Register;
