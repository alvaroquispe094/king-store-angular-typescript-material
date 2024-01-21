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
      { name: 'customers', icon: 'person', link: '/pages/customers' },
      { name: 'administrators', icon: 'supervised_user_circle', link: '/pages/administrators' },
    ],
  },
  {
    name: 'Catalog',
    icon: 'shop_two',
    link: '/pages/dashboard',
    children: [
      { name: 'products', icon: 'list', link: '/pages/catalog/products' },
      { name: 'categories', icon: 'category', link: '/pages/catalog/categories' },
    ],
  },
  {
    name: 'Orders',
    icon: 'add_shopping_cart',
    link: '/pages/orders',
  },
  {
    name: 'Shipments',
    icon: 'local_shipping',
    link: '/pages/shipments',
    children: [
      { name: 'orders', icon: 'list', link: '/pages/shipments/orders' },
      { name: 'prices', icon: 'attach_money', link: '/pages/shipments/prices' },
    ],
  },
  {
    name: 'Payments',
    icon: 'payment',
    link: '/pages/payments',
    children: [
      { name: 'methods', icon: 'credit_card', link: '/pages/payments/methods' },
      { name: 'installments', icon: 'add', link: '/pages/payments/installments' },
    ],
  },
  {
    name: 'Subscriptions',
    icon: 'subscriptions',
    link: '/pages/subscriptions',
  },
  {
    name: 'Settings',
    icon: 'settings_input_component',
    link: '/pages/settings',
    children: [
      { name: 'theme', icon: 'invert_colors', link: '/pages/settings/theme' },
      { name: 'featured images', icon: 'crop_original', link: '/pages/settings/featured_images' },
      { name: 'Ofers', icon: 'bookmark', link: '/pages/settings/ofers' },
    ],
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
