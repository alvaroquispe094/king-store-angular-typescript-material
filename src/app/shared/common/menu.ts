import { MenuModel } from 'src/app/domain/models/menu.model';

export const MENU_GUEST: MenuModel[] = [
  {
    title: 'Home',
    icon: '',
    link: '/',
    text: 'Home',
    function: '',
    user_image: false,
  },
  {
    title: 'Shop',
    icon: '',
    link: '/shop',
    text: 'Shop',
    function: '',
    user_image: false,
  },
  {
    title: 'About us',
    icon: '',
    link: '/about_us',
    text: 'About us',
    function: '',
    user_image: false,
  },
  {
    title: 'Cart',
    icon: 'shopping_basket',
    link: '/cart',
    text: '',
    function: '',
    user_image: false,
  },
  {
    title: 'Sign in',
    icon: 'person',
    link: '/sign_in',
    text: '',
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
