export interface ToggleThemeInterface {
  showInSmallScreen: boolean;
}

export interface MenuButtonInterface {
  toggleMenu: () => void;
}

export interface HeaderItemsInterface {
  showInSmallScreen: boolean;
}

export interface HeaderLinksDrawerInterface {
  isOpen: boolean;
  onClose: () => void;
}
