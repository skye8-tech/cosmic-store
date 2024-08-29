import Button from "@components/Button";
import { useAuth } from "@hooks";
import { LocalStorage } from "@util";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const authEndpoint = "http://localhost:8000/v1/api/auth/login";
function LoginForm() {
  const auth = useAuth();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();

    const data = {
      email: name,
      password: password,
    };

    // post this on the server via our api.
    fetch(authEndpoint, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        LocalStorage.save("token", res.access_token);
        auth.logIn();
        navigate("/account");
      });
  };

  return (
    <>
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-8 w-full p-8 lg:p-0"
      >
        <div className="flex flex-col gap-4">
          <p className="text-4xl font-medium">Log in to Exclusive</p>
          <p className="font-medium"> Enter your details below </p>
        </div>
        <div className="flex flex-col gap-4">
          <input
            type="email "
            placeholder="Email"
            className="p-2 text-sm border-b-2 border-gray-400 w-full"
            value={name}
            onChange={(event) => {
              const value = event.target.value;
              // console.log(value);
              setName(value);
            }}
          />
          <input
            value={password}
            onChange={(event) => {
              const value = event.target.value;
              setPassword(value);
            }}
            type="password"
            placeholder="Password"
            className="p-2  border-b-2 text-sm border-gray-400 w-full"
          />
        </div>

        <div className="flex flex-row justify-between">
          {/* buttons */}
          <Button
            text="Login "
            variant="primary"
            width="w-fit"
            href="#"
            funct=""
            icon=""
          ></Button>
          <Link to="/reset-password" className="text-secondary2 p-2 ">
            Forgot Password ?
          </Link>
        </div>
        <p className="font-light text-center">
          Don't have an account?
          <span className="font-normal">
            <a href="/register">Sign UP </a>
          </span>
        </p>
      </form>
    </>
  );
}

export default LoginForm;
