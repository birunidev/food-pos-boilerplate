import FormInput from "../../../components/atoms/FormInput";
import AuthWrapper from "../components/organisms/AuthWrapper";
import { useClientLoginForm } from "./use-client-login-form";

export default function Login() {
  const { values, errors, handleSubmit, handleChange, handleBlur, touched } =
    useClientLoginForm();
  return (
    <AuthWrapper>
      <div className="space-y-6 lg:space-y-12">
        <div className="space-y-2 lg:space-y-3">
          <h1 className="font-bold text-2xl">Welcome to My Food</h1>
          <p className="text-body text-sm">
            Taste various food and beverages! Increase your mood
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-3 lg:space-y-6">
          <FormInput
            label="Your Mobile Phone"
            type="text"
            value={values.phone}
            name="phone"
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.phone}
            touched={touched.phone}
            leftIcon={<img src="/assets/icons/ic-phone.svg" alt="" />}
          />

          <button className="btn btn-warning btn-block">
            Sign In with Mobile Phone
          </button>
        </form>
      </div>
    </AuthWrapper>
  );
}
