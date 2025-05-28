import FormInput from "src/components/atoms/FormInput";
import AuthWrapper from "../components/organisms/AuthWrapper";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useLocalStorage } from "react-use";
import { getResponseErrorMessage } from "src/utils/api";
import { usePerformLogin } from "src/config/mutators";

export default function AdminLogin() {
  const [, setJwt] = useLocalStorage("FP__JWT_AUTH", null);
  const {
    isPending: loading,
    mutateAsync: performLogin,
    error,
  } = usePerformLogin();
  const formik = useFormik({
    initialValues: {
      identifier: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        const response = await performLogin({
          identifier: values.identifier,
          password: values.password,
        });
        setJwt(response.jwt);
        window.location.href = "/admin";
      } catch (error) {
        console.log(error);
      }
    },
    validationSchema: Yup.object({
      identifier: Yup.string().required().email(),
      password: Yup.string()
        .required()
        .min(8, "Password must be at least 8 characters long"),
    }),
  });

  return (
    <AuthWrapper>
      <div className="space-y-6">
        <form
          onSubmit={formik.handleSubmit}
          action="/admin"
          className="space-y-3"
        >
          <div className="space-y-2">
            <FormInput
              label="Email"
              type="text"
              name="identifier"
              touched={formik.touched.identifier}
              error={formik.errors.identifier}
              value={formik.values.identifier}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <FormInput
              label="Password"
              type="password"
              name="password"
              touched={formik.touched.password}
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.password}
            />
          </div>
          {error && (
            <p className="text-red-600">{getResponseErrorMessage(error)}</p>
          )}
          <button type="submit" className="btn btn-warning btn-block">
            {loading ? "Logging in..." : "Login"}
          </button>
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
