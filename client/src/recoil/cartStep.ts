import { atom } from "recoil";

const cartStepState = atom({
  key: "cartStep",
  default: 1,
});

export default cartStepState;
