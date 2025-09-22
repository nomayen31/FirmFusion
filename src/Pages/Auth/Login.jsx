import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FaGoogle, FaGithub } from "react-icons/fa"; // 👈 Icons
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet";

export default function Login({ onSubmit }) {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { signInUser, setUser, signInWithGithub, signInWithGoogle } =
    useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = {
      email: form.get("email")?.trim(),
      password: form.get("password"),
    };

    onSubmit?.(payload);

    signInUser(payload.email, payload.password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        alert("Login successful!");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        setError(error.code);
      });
  };

  //  Google Provider
  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        setUser(result.user);
        alert("Google login successful!");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((err) => setError(err.code));
  };

  //  GitHub Provider
  const handleGithubLogin = () => {
    signInWithGithub()
      .then((result) => {
        setUser(result.user);
        alert("GitHub login successful!");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((err) => setError(err.code));
  };

  return (
    <div className="min-h-[70vh] w-full grid place-items-center px-4 py-12 bg-gray-900">
      <Helmet>
        <title>Login | JobFinder</title>
        <meta
          name="description"
          content="Login to access your JobFinder account."
        />
      </Helmet>
      <div className="w-full max-w-xl rounded-3xl mt-12 bg-white p-8 sm:p-12 shadow-2xl border-4 border-purple-500 transform transition-all duration-300 hover:scale-[1.01]">
        <h1 className="mb-2 text-3xl font-extrabold text-center text-gray-800 sm:text-4xl">
          Welcome Back!
        </h1>
        <p className="mb-8 text-base text-center text-gray-500">
          Login to your account
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Input */}
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-base font-semibold text-gray-800"
            >
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Enter your email address"
              className="w-full px-6 py-3 text-black placeholder-gray-400 transition-all bg-gray-100 rounded-full outline-none ring-2 ring-transparent focus:ring-purple-500"
            />
          </div>

          {/* Password Input */}
          <div className="space-y-2">
            <label
              htmlFor="password"
              className="block text-base font-semibold text-gray-800"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                required
                placeholder="Enter your password"
                className="w-full px-6 py-3 pr-12 text-black placeholder-gray-400 transition-all bg-gray-100 rounded-full outline-none ring-2 ring-transparent focus:ring-purple-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute inset-y-0 flex items-center text-gray-500 transition right-4 hover:text-purple-600"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <FiEyeOff className="w-5 h-5" />
                ) : (
                  <FiEye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 font-bold tracking-wide shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl active:scale-[0.99]"
          >
            Login
          </button>
        </form>

        {/* Error Message */}
        {error && (
          <p className="mt-4 text-sm font-semibold text-center text-red-500">
            {error}
          </p>
        )}

        {/* Divider */}
        <div className="flex items-center gap-4 my-6">
          <hr className="flex-1 border-gray-300" />
          <span className="text-gray-500">OR</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        {/* Social Login Buttons */}
        <div className="flex flex-col space-y-4">
          <button
            onClick={handleGoogleLogin}
            className="flex items-center justify-center w-full py-3 text-white transition bg-red-500 rounded-full shadow-md hover:bg-red-600"
          >
            <FaGoogle className="mr-2" /> Continue with Google
          </button>
          <button
            onClick={handleGithubLogin}
            className="flex items-center justify-center w-full py-3 text-white transition bg-gray-800 rounded-full shadow-md hover:bg-gray-900"
          >
            <FaGithub className="mr-2" /> Continue with GitHub
          </button>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-6">
          <a
            href="#"
            className="text-sm font-medium text-purple-600 hover:underline"
          >
            Forgot Password?
          </a>
          <p className="text-sm text-gray-600">
            New here?{" "}
            <Link
              to="/auth/register"
              className="font-bold text-red-500 hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
