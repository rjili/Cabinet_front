export interface NavigationOptions {
  title: string;
  link?: string;
  icon?: NavigationIcon;
  level?: number;
  items?: NavigationOptions[];
  target?: string;
  open?: boolean;
}

export interface NavigationIcon {
  name?: any;
  letter?: string;
  size?: string;
}
