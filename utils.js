
import { scrollTo } from "seamless-scroll-polyfill";

export const scrollToTop = ()=>{
    scrollTo(window, { behavior: "smooth", top: 0});
  }