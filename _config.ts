import lume from "lume/mod.ts";

const config = {
  site: {
    name: "Статические сайты",
    description: "админка для управления сайтом",
  },
  src: "./src",
};

const site = lume(config);
site.copy("images");

export default site;
