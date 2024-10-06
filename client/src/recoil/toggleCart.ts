import { atom } from "recoil";

const toggleCartState = atom({
  key: "OpenCart",
  default: false,
});

export default toggleCartState;
