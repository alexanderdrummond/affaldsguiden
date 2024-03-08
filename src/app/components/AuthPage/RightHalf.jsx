"use client";

import { useState } from "react";
import Button from "../Static/atoms/Button";
import { useNotification } from "@/app/context/NotificationContext";
import { useRouter } from "next/navigation";

export default function RightHalf() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { showNotification } = useNotification();
  const [showPassword, setShowPassword] = useState(false);

  // Funktion til display af password i feltet.

  const toggleVisibility = () => {
    setShowPassword(!showPassword);
  };

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

        // decode af JWT token fra response
        const payloadEncoded = result.access_token.split(".")[1];
        const payloadDecoded = atob(payloadEncoded);
        const payload = JSON.parse(payloadDecoded);

        // konverterer til date
        const expiryDate = new Date(payload.exp * 1000);

        // store token, user og expiry i localStorage
        localStorage.setItem("token", result.access_token);
        localStorage.setItem(
          "user",
          JSON.stringify({ ...result.user, tokenExpiry: expiryDate })
        );
        showNotification("success", "Du er nu logget ind");
        const lastPage = localStorage.getItem("lastPage") || "/";
        router.push(lastPage);
        localStorage.removeItem("lastPage");
      } else if (response.status === 401) {
        showNotification("error", "Forkert brugernavn eller kode");
      }
    } catch (error) {
      console.error("Login error", error);
      showNotification("error", "Der opstod en fejl ved login");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full sm:w-1/2 px-4 sm:px-0">
      <form
        className="bg-[#FBFCFC] p-4 sm:p-12 rounded-2xl w-full max-w-md shadow-md"
        onSubmit={handleLogin}
      >
        <h2 className="text-xl sm:text-3xl font-semibold mb-4 sm:mb-8">
          Log ind
        </h2>
        <input
          type="text"
          placeholder="Email"
          className="w-full p-3 rounded-lg border border-[#DCDBDD] mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="relative mb-4 sm:mb-6">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full p-3 rounded-lg border border-[#DCDBDD] pr-10"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
            onClick={toggleVisibility}
          >
            <img src="/icons/eye.svg" alt="show/hide" />
          </span>
        </div>
        <div className="flex justify-center">
          <Button variant="filled" type="submit">
            Log ind
          </Button>
        </div>
      </form>
    </div>
  );
}
