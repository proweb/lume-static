import lume from "lume/mod.ts";

const config = {
  src: "./src",
};
const site = lume(config);
site.copy("images");
export default site;
