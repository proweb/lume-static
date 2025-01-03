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
<<<<<<< HEAD
site.copy("images");
=======

site.use(basePath());
site.copy("images");

>>>>>>> 435a2b617e6d1c67c657b5647dc8898bcc2e3364
export default site;
