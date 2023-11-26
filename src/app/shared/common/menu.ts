import { MenuModel } from 'src/app/domain/models/menu.model';

export const MENU_GUEST: MenuModel[] = [
  {
    title: 'Home',
    icon: 'home',
    link: '/',
    text: 'Home',
    function: '',
    user_image: false,
  },
  {
    title: 'Shop',
    icon: 'shop_two',
    link: '/shop',
    text: 'Shop',
    function: '',
    user_image: false,
  },
  {
    title: 'Cart',
    icon: 'add_shopping_cart',
    link: '/cart',
    text: 'Cart',
    function: '',
    user_image: false,
  },
  {
    title: 'Sign in',
    icon: 'subdirectory_arrow_right',
    link: '/sign_in',
    text: 'Sign in',
    function: '',
    user_image: false,
  },
];

export const MENU_ADMIN = [
  {
    title: 'Dashboard',
    icon: 'dashboard',
    link: '/pages/dashboard',
    text: 'Dashboard',
    function: '',
    user_image: false,
  },
  {
    title: 'Home',
    icon: 'home',
    link: '/',
    text: 'Home',
    function: '',
    user_image: false,
  },
  {
    title: 'Sign out',
    icon: 'subdirectory_arrow_left',
    link: '/sign_out',
    text: 'Sign out',
    function: 'salir',
    user_image: true,
  },
];
