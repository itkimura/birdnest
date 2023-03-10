export type ViewInfo = Readonly<{
  title?: string;
  icon?: string;
}>;

export type ViewInfoMap = Readonly<Record<string, ViewInfo | undefined>>;
export type RequiredViewInfoMap = Readonly<Record<string, Required<ViewInfo>>>;

const views: ViewInfoMap = {
  '/violators': { icon: 'la la-list', title: 'Violators' },
  '/about': { icon: 'la la-file', title: 'About' },
};

export default views;
