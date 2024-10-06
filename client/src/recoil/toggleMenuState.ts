import { atom } from "recoil";

const toggleMenuState = atom({
  key: "OpenMenu",
  default: false,
});

export default toggleMenuState;
