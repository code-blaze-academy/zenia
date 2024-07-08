import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register(props) {
  const navigate = useNavigate();
  const [continueWithEmail, setContinueWithEmail] = useState(false);
  const handleShow = (e) => {
    e.preventDefault();
    setContinueWithEmail((prev) => !prev);
  };
  return (
    <>
      <div className="auth-wrapper">
        <section className="auth-section">
          <div className="auth-container">
            <div className="form-container">
              <Link className="logo" to="/">
                <h1>zenia</h1>
              </Link>
              <form>
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
                        type="email"
                        placeholder="Email"
                        name="email"
                        id="email"
                      />
                    </div>
                    <div className="form-field">
                      <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        id="password"
                      />
                    </div>
                    <div className="btn-container">
                      <button
                        className="cta-btn"
                        onClick={navigate("/dashboard")}
                      >
                        <span>register</span>
                      </button>
                    </div>
                  </div>
                )}
                <div className="form-footer">
                  <p className="text-center">
                    Already have an account{" "}
                    <Link
                      className="inline-block text-[#0c8ce9]"
                      to="/dashboard"
                    >
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
