"use client";

import React, { useState } from "react";
import Button from "../Static/atoms/Button";

export default function RightHalf() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();

    const headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");

    const body = new URLSearchParams();
    body.append("username", email);
    body.append("password", password);

    const requestOptions = {
      method: "POST",
      headers: headers,
      body: body,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "http://localhost:3000/login",
        requestOptions
      );

      if (response.status === 200) {
        const result = await response.json();
        localStorage.setItem("token", result.access_token);
        localStorage.setItem("user", JSON.stringify(result.user));
        console.log(result);
      } else if (response.status === 401) {
        console.log("unauthed: incorrect username or password");
      }
    } catch (error) {
      console.error("Login error", error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-1/2">
      <form
        className="bg-[#FBFCFC] p-12 rounded-2xl w-3/4 max-w-md shadow-md"
        onSubmit={handleLogin}
      >
        <h2 className="text-3xl font-semibold mb-8">Log ind</h2>
        <input
          type="text"
          placeholder="Email"
          className="w-full p-3 rounded-lg border border-[#DCDBDD] mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="relative mb-6">
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-lg border border-[#DCDBDD] pr-10"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="absolute inset-y-0 right-3 flex items-center">
            <img src="/eye.svg" alt="show/hide" />
          </span>
        </div>
        <div className="justify-center">
          <Button variant="filled" type="submit">
            Log ind
          </Button>
        </div>
      </form>
    </div>
  );
}
