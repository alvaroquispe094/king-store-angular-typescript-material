/** Example file/folder data. */
export const ASIDE_DATA = {
  admin: [
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
  ],
  cart: [
    {
      name: 'Electronics',
      icon: '',
      link: '/pages/dashboard',
    },
    {
      name: 'Clothes',
      icon: '',
      link: '/pages/dashboard',
    },
    {
      name: 'Computers & Laptops',
      icon: '',
      link: '/pages/dashboard',
    },
    {
      name: 'Home & Garden',
      icon: '',
      link: '/pages/dashboard',
    },
    {
      name: 'Sports',
      icon: '',
      link: '/pages/dashboard',
    },
    {
      name: 'Pets',
      icon: '',
      link: '/pages/dashboard',
    },
  ],
};

export const ADMIN_OPTIONS = [
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

export const CART_OPTIONS = [
  {
    name: 'Electronics',
    icon: '',
    link: '/pages/dashboard',
  },
  {
    name: 'Clothes',
    icon: '',
    link: '/pages/dashboard',
  },
  {
    name: 'Computers & Laptops',
    icon: '',
    link: '/pages/dashboard',
  },
  {
    name: 'Home & Garden',
    icon: '',
    link: '/pages/dashboard',
  },
  {
    name: 'Sports',
    icon: '',
    link: '/pages/dashboard',
  },
  {
    name: 'Pets',
    icon: '',
    link: '/pages/dashboard',
  },
];
