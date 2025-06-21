import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "react-use";
import { useRecoilState } from "recoil";
import clientAuthState from "src/recoil/clientAuth";
import * as Yup from "yup";

export const useClientLoginForm = () => {
  const navigate = useNavigate();
  const [, setAuth] = useRecoilState(clientAuthState);
  const [, setStoredAuth] = useLocalStorage("FP__AUTH_PHONE");
  const formik = useFormik({
    initialValues: {
      phone: "",
    },
    onSubmit: (values) => {
      setAuth(values.phone);
      setStoredAuth(values.phone);
      navigate("/");
    },
    validationSchema: Yup.object({
      phone: Yup.string()
        .required("Phone number is required")
        .matches(
          /^(\+62|62|0)8[1-9][0-9]{6,10}$/,
          "Please enter a valid Indonesian phone number"
        ),
    }),
  });

  return { ...formik };
};
