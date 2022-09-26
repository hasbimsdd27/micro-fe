import React, { useState } from "react";
import { useLoggedIn, login } from "./Cart";

const LoginPage = () => {
  const loggedIn = useLoggedIn();
  const [showLogin, setShowLogin] = useState(false);

  const [username, setUsername] = useState("sally");
  const [password, setPassword] = useState("123");

  if (loggedIn) return null;
  return (
    <>
      <span onClick={() => setShowLogin((prev) => !prev)}>
        <i
          className="ri-fingerprint-line text-2xl font-normal"
          id="showlogin"
        ></i>
      </span>
      {showLogin && (
        <div
          className="absolute p-5 border-4 border-blue-800 bg-white rounded-md"
          style={{
            width: 300,
            top: "2rem",
            left: -250,
          }}
        >
          <input
            type={"text"}
            placeholder="User name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border text-sm border-gray-400 rounded-md w-full p-2 text-black"
          />
          <input
            type={"password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border text-sm border-gray-400 rounded-md w-full p-2 text-black"
          />
          <button
            className="bg-green-900 text-white py-2 px-5 rounded-md w-full text-sm"
            id="loginBtn"
            onClick={() => login(username, password)}
          >
            Login
          </button>
        </div>
      )}
    </>
  );
};

export default LoginPage;
