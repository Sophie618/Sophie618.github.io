// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects-amp-demos",
          title: "Projects &amp; Demos",
          description: "从研究想法到可交互原型：AI 应用、智能体系统与数据可视化。",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-curriculum-vitae",
          title: "Curriculum Vitae",
          description: "王艺霏（Sophie Wang）· 北京理工大学计算机科学与技术专业本科生",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%31%31%32%30%32%34%33%31%32%33@%62%69%74.%65%64%75.%63%6E", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/Sophie618", "_blank");
        },
      },{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/wang-yifei-cv-en.pdf", "_blank");
        },
      },];
