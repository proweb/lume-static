import lumeCMS from "lume/cms/mod.ts";


const config = {
  site: {
    name: "Static CMS",
    description: "Here I can edit the content of my blog",
  },
  log: {
    filename: "errors.log",
  },
};
const cms = lumeCMS(config);

cms.collection(
    "posts", 
    "src:posts/*.md", 
    ["title: text", "content: markdown"]
);

export default cms;
