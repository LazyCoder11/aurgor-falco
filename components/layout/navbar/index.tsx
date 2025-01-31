
import { getMenu } from 'lib/shopify';
import NavbarClient from './desktop-nav';



export async function Navbar() {
  const menu = await getMenu('next-js-frontend-header-menu');

  return <NavbarClient menu={menu} />;
}