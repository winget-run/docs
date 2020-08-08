module.exports = {
  title: "winget.run",
  tagline: "Finding winget packages made easy.",
  url: "https://docs.winget.run",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "winget-run",
  projectName: "docs",
  themeConfig: {
    navbar: {
      title: "winget.run",
      logo: {
        alt: "Stay home!",
        src: "img/logo.svg",
      },
      links: [
        {
          to: "/docs/introduction",
          activeBasePath: "/docs",
          label: "Package API",
          position: "left",
        },
        {
          href: "https://github.com/winget-run",
          label: "GitHub",
          position: "left",
        },
        {
          href: "https://ko-fi.com/wingetdotrun",
          label: "Ko-fi",
          position: "left",
        },
      ],
    },
    footer: {
      style: "dark",
      // links: [
      //   {
      //     title: "Docs",
      //     items: [
      //       {
      //         label: "Style Guide",
      //         to: "docs/",
      //       },
      //       {
      //         label: "Second Doc",
      //         to: "docs/doc2/",
      //       },
      //     ],
      //   },
      //   {
      //     title: "Community",
      //     items: [
      //       {
      //         label: "Stack Overflow",
      //         href: "https://stackoverflow.com/questions/tagged/docusaurus",
      //       },
      //       {
      //         label: "Discord",
      //         href: "https://discordapp.com/invite/docusaurus",
      //       },
      //       {
      //         label: "Twitter",
      //         href: "https://twitter.com/docusaurus",
      //       },
      //     ],
      //   },
      //   {
      //     title: "More",
      //     items: [
      //       {
      //         label: "Blog",
      //         to: "blog",
      //       },
      //       {
      //         label: "GitHub",
      //         href: "https://github.com/facebook/docusaurus",
      //       },
      //     ],
      //   },
      // ],
      copyright: `© 2017 - ${new Date().getFullYear()} Copyright: Feinwaru Software`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: "api",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/winget-run/docs/tree/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
