interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: '运动是一盘菜',
  siteUrl: 'https:// liborange.com',
  logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTtc69JxHNcmN1ETpMUX4dozAgAN6iPjWalQ&usqp=CAU',
  description: 'Personal site and blog',
  navLinks: [
    {
      name: 'Blog',
      url: 'https://liborange-lbc.github.io/running_page/',
    },
    {
      name: 'About',
      url: 'https://liborange-lbc.github.io/running_page/',
    },
  ],
};

export default data;
