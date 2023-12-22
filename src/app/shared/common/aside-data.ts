/** Example file/folder data. */
export const ADMIN_OPTIONS = [
  {
    name: 'Dashboard',
    icon: 'dashboard',
    link: '/pages/dashboard',
  },
  {
    name: 'Users',
    icon: 'supervisor_account',
    link: '/pages/dashboard',
    children: [
      { name: 'new', icon: 'add', link: '/pages/dashboard' },
      { name: 'users', icon: 'list', link: '/pages/dashboard' },
    ],
  },
  {
    name: 'Catalog',
    icon: 'shop_two',
    link: '/pages/dashboard',
    children: [{ name: 'products', icon: 'list', link: '/pages/catalog/products' }],
  },
];

export const CUSTOMER_OPTIONS = [
  {
    name: 'Dashboard',
    icon: 'dashboard',
    link: '/pages/dashboard',
  },
  {
    name: 'My Shopping',
    icon: 'shop',
    link: '/pages/dashboard',
    children: [
      { name: 'new', icon: 'add', link: '/pages/dashboard' },
      { name: 'users', icon: 'list', link: '/pages/dashboard' },
    ],
  },
  {
    name: 'Shipping',
    icon: 'local_shipping',
    link: '/pages/dashboard',
    children: [
      { name: 'new', icon: 'add', link: '/pages/dashboard' },
      { name: 'products', icon: 'list', link: '/pages/dashboard' },
    ],
  },
  {
    name: 'Billing',
    icon: 'credit_card',
    link: '/pages/dashboard',
    children: [
      { name: 'new', icon: 'add', link: '/pages/dashboard' },
      { name: 'products', icon: 'list', link: '/pages/dashboard' },
    ],
  },
  {
    name: 'Profile',
    icon: 'person',
    link: '/pages/dashboard',
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
