import FormInput from "../../../components/atoms/FormInput";
import AuthWrapper from "../components/organisms/AuthWrapper";

export default function Login() {
  return (
    <AuthWrapper>
      <div className="space-y-6 lg:space-y-12">
        <div className="space-y-2 lg:space-y-3">
          <h1 className="font-bold text-2xl">Welcome to My Food</h1>
          <p className="text-body text-sm">
            Taste various food and beverages! Increase your mood
          </p>
        </div>
        <form action="/" className="space-y-3 lg:space-y-6">
          <FormInput
            label="Your Mobile Phone"
            type="text"
            value=""
            onChange={() => {}}
            onBlur={() => {}}
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
