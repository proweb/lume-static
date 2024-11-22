import lume from "lume/mod.ts";
import basePath from "lume/plugins/base_path.ts";

const config = {
  site: {
    name: "Статические сайты",
    description: "админка для управления сайтом",
  },
  location: new URL("https://proweb.github.io/lume-static/"),
  src: "./src",
};

const site = lume(config);

site.use(basePath());
site.copy("images");

export default site;
