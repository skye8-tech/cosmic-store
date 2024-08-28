import Button from "@components/Button";
import { Link } from "react-router-dom";

function LoginForm() {
  return (
    <>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col gap-8 w-full p-8 lg:p-0"
      >
        <div className="flex flex-col gap-4">
          <p className="text-4xl font-medium">Log in to Exclusive</p>
          <p className="font-medium"> Enter your details below </p>
        </div>
        <div className="flex flex-col gap-4">
          <input
            type="text "
            placeholder="Email or Phone Number "
            className="p-2 text-sm border-b-2 border-gray-400 w-full"
          />
          <input
            type="text"
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
            <Link to="/register">Sign UP</Link>
          </span>
        </p>
      </form>
    </>
  );
}

export default LoginForm;
