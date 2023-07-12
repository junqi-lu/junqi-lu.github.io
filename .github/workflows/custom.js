/**
 * @file: custom config
 */

let mainConfig = {
    vssueConfig: {
      owner: "junqi-lu",
      repo: "junqi-lu.github.io",
      clientId: "486b76a7d53947193688",
      clientSecret: "23b1c241ff9c06dc3748c2ca1c7de0c04b13fa82"
    },
  
    repoConfig: {
      owner: "junqi-lu",
      repo: "junqi-lu.github.io",
      pushBranch: "main",
      email: "jq_lu@outlook.com",
      filterUsers: ['junqi-lu']
    },
  
    title: "yulu's Blog",
    description: "TODO",
    customDomain: "",
    base: "/",
  
    slogan: {
      main: "TODO",
      sub: "TODO"
    },
  
    themeConfig: {
      nav: [
        {
          name: "首页",
          link: "/"
        },
        {
          name: "Github",
          link: "https://github.com/junqi-lu"
        },
        {
          name: "CV",
          link: "/cv"
        }
      ],
      headTitle: ["TODO"],
      friendLinks: [
        {
          name: "TODO",
          link: "htps://github.com/junqi-lu"
        }
      ],
      extraFooters: [
        {
          title: "TODO",
          text: "TODO",
          link: "htps://github.com/junqi-lu"
        }
      ],
      pageCount: true
    },
  
    head: [
      [
        "link",
        {
          rel: "icon",
          type: "image/png",
          href: "https://avatars.githubusercontent.com/u/33504653?v=4"
        }
      ]
    ]
  }
  
  module.exports = mainConfig
