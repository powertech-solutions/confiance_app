export type ThemeVariant = 'light' | 'dark' | 'auto';
export type NavPositionVariant = 'vertical';
export type NavTopShapeVariant = 'default';
export type NavbarAppearanceVariant = 'default';

export interface Config {
  isNavbarVerticalCollapsed: boolean;
  openNavbarVertical: boolean;
  theme: ThemeVariant;
  isRTL: boolean;
  isDark: boolean;
  bodyClass?: string;
  apiBaseUrl: string;
}

export const initialConfig: Config = {
  isNavbarVerticalCollapsed: false,
  openNavbarVertical: false,
  theme: 'light',
  isRTL: false,
  isDark: false,
  apiBaseUrl: import.meta.env.VITE_APP_API,
};