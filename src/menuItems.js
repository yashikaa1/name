export const menuItems = [
   {
    title: 'Login',
    url: '/login',
    submenu: [
      {
        title:'Login as User',
        url:'#login-as-user',
      },

      {
        title:'Login as Committee members',
        url:'#login-as-committee-members',
      },

      {
        title:'Login as Admin',
        url:'#login-as-admin',
      },
      
      {
        title:'Login as Government',
        url:'login-as-government',
      }
     ]
   },
    {
      title: 'Home',
      url: '/',
    },
    {
        title: 'About Us',
        url: '/about',
        submenu: [
          {
            title: 'Overview',
            url: '#overview',
          },
          {
            title: 'Vision and Mission',
            url: '#vision-and-mission',
          },
          {
            title: 'Milestones and Rewards',
            url: '#milestones-and-rewards',
          },
          {
            title: 'Our Team',
            url:'#our-team',
          },
          {
            title:'Legal Status & Empanelments',
            url:'#legal-status-and-empanelments'
          },
        ],
      },
    {
        title: 'What we do',
        url : '/whatwedo',
    },
    {
        title: 'Projects',
        url: '/projects',
    },
    {
        title: 'Events',
        url: '/events',
    },
    {
        title: 'Contact Us',
        url:'/contactus',
    },
    {
        title: 'Donate',
        url: '/donate',
    },
    {
      title:'MyComponent',
      url: '/mycomponent',
    }
      
];