import lumeCMS from "lume/cms/mod.ts";

const config = {
  site: {
    name: "Статические сайты",
    description: "админка для управления сайтом",
  },
  log: {
    filename: "errors.log",
  },
};
const cms = lumeCMS(config);
// Collection for blog posts
cms.collection({
  name: "posts",
  description: "Записи в блоге",
  store: "src:posts/*.md",
  fields: [
    {
      name: "title",
      type: "text",
      label: "Заголовок",
      attributes: {
        required: true,
        maxlength: 100,
      },
    },
    {
      name: "date",
      type: "date",
    },
    {
      name: "draft",
      type: "checkbox",
      label: "Черновик",
      view: "editor",
    },
    {
      name: "content",
      type: "markdown",
      label: "Текст статьи",
      attributes: {
        required: true,
      },
    },
  ],
});
// Collection for pages
cms.collection({
  name: "pages",
  description: "Статические страницы сайта",
  store: "src:pages/*.md",
  fields: ["title: text", "content: markdown"],
});

cms.collection({
  name: "posts",
  description: "Записи в блоге",
  store: "src:posts/**/*.md",
  fields: [
    {
      name: "title",
      type: "text",
      label: "Заголовок",
      attributes: {
        required: true,
        maxlength: 100,
      },
    },
    {
      name: "date",
      type: "date",
    },
    {
      name: "draft",
      type: "checkbox",
      label: "Черновик",
      view: "editor",
    },
    {
      name: "content",
      type: "markdown",
      label: "Текст статьи",
      attributes: {
        required: true,
      },
    },
  ],
});
// Collection for pages
cms.collection({
  name: "pages", 
  description: "Страницы сайта",
  store: "src:pages/*.md", 
  fields:["title: text", "content: markdown"]
});

cms.upload("images", "src:images");

export default cms;
