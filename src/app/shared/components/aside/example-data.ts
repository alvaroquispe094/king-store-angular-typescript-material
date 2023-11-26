/** Example file/folder data. */
export const files = [
  {
    name: 'Dashboard',
    icon: 'dashboard',
    link: '/pages/dashboard',
  },
  {
    name: 'Users',
    icon: 'supervisor_account',
    link: '/',
    children: [
      { name: 'new', icon: 'add', link: '/' },
      { name: 'users', icon: 'list', link: '/' },
    ],
  },
  {
    name: 'Catalog',
    icon: 'shop_two',
    link: '/',
    children: [
      { name: 'new', icon: 'add', link: '/' },
      { name: 'products', icon: 'list', link: '/' },
    ],
  },
];
