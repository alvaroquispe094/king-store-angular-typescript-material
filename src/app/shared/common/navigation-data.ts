import { NavigationModel } from '../../domain/models/navigation.model';

export const MENU_GUEST: NavigationModel[] = [
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
    link: '/catalog',
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
    function: 'signOut',
    user_image: false,
  },
];

export const MENU_CUSTOMER: NavigationModel[] = [
  {
    title: 'Dashboard',
    icon: '',
    link: '/pages/dashboard',
    text: 'Dashboard',
    function: '',
    user_image: false,
  },
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
    link: '/catalog',
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
];

export const MENU_ADMIN: NavigationModel[] = [
  {
    title: 'Dashboard',
    icon: '',
    link: '/pages/dashboard',
    text: 'Dashboard',
    function: '',
    user_image: false,
  },
  {
    title: 'Home',
    icon: '',
    link: '/',
    text: 'Home',
    function: '',
    user_image: false,
  },
];
