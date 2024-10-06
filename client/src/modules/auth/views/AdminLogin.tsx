import FormInput from "src/components/atoms/FormInput";
import AuthWrapper from "../components/organisms/AuthWrapper";
import { Link } from "react-router-dom";

export default function AdminLogin() {
  return (
    <AuthWrapper>
      <div className="space-y-6">
        <form action="/admin" className="space-y-3">
          <div className="space-y-2">
            <FormInput
              label="Email"
              type="text"
              value=""
              onChange={() => {}}
              onBlur={() => {}}
            />
            <FormInput
              label="Password"
              type="password"
              value=""
              onChange={() => {}}
              onBlur={() => {}}
            />
          </div>

          <button className="btn btn-warning btn-block">Login</button>
        </form>
        <div className="text-center">
          <Link to="/" className="text-sm underline text-error">
            Go To Client App
          </Link>
        </div>
      </div>
    </AuthWrapper>
  );
}
