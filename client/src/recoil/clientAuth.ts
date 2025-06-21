import { atom } from "recoil";

const clientAuthState = atom({
  key: "clientAuth",
  default: localStorage.getItem("FP__AUTH_PHONE")
    ? JSON.parse(localStorage.getItem("FP__AUTH_PHONE"))
    : null,
});

export default clientAuthState;
