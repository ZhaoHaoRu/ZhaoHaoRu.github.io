// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "post-大三总结",
        
          title: "大三总结",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/%E5%A4%A7%E4%B8%89%E6%80%BB%E7%BB%93/";
          
        },
      },{id: "post-github-pages-jekyll-博客搭建",
        
          title: "Github pages + jekyll 博客搭建",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/%E5%8D%9A%E5%AE%A2%E6%90%AD%E5%BB%BA/";
          
        },
      },{id: "post-git常用命令",
        
          title: "git常用命令",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/git%E5%91%BD%E4%BB%A4/";
          
        },
      },{id: "post-docker命令记录",
        
          title: "docker命令记录",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/docker%E5%91%BD%E4%BB%A4/";
          
        },
      },{id: "post-macbook-m1-vmware-fusion-配置ubuntu虚拟机",
        
          title: "macbook m1 + VMware Fusion 配置ubuntu虚拟机",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/mac-m1%E5%AE%89%E8%A3%85%E8%99%9A%E6%8B%9F%E6%9C%BA/";
          
        },
      },{id: "post-react-navigation-6-x-使用指南-3",
        
          title: "react-navigation 6.x 使用指南 (3)",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/react-navigation_3/";
          
        },
      },{id: "post-react-navigation-6-x-使用指南-2",
        
          title: "react-navigation 6.x 使用指南 (2)",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/react-navigation_2/";
          
        },
      },{id: "post-react-navigation-6-x-使用指南-1",
        
          title: "react-navigation 6.x 使用指南 (1)",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/react-navigation_1/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "education-undergraduate-at-shanghai-jiao-tong-university-major-software-engineering",
          title: 'Undergraduate at Shanghai Jiao Tong University  Major: Software Engineering',
          description: "",
          section: "Education",},{id: "education-master-s-student-at-shanghai-jiao-tong-university",
          title: 'Master’s student at Shanghai Jiao Tong University',
          description: "",
          section: "Education",},{id: "education-phd-student-at-shanghai-jiao-tong-university",
          title: 'PhD student at Shanghai Jiao Tong University',
          description: "",
          section: "Education",},{id: "experiences-software-engineer-intern-at-alibaba-cloud-cloud-native-team",
          title: 'Software Engineer Intern at Alibaba Cloud, Cloud Native Team',
          description: "",
          section: "Experiences",},{id: "experiences-research-intern-at-alibaba-cloud-ebs-team",
          title: 'Research Intern at Alibaba Cloud, EBS Team',
          description: "",
          section: "Experiences",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/ZhaoHaoRu", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%7A%68%61%6F%68%61%6F%72%75@%73%6A%74%75.%65%64%75.%63%6E", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
