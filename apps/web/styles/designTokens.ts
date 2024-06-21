// styles/designTokens.ts
export interface DesignTokens {
    colorPrimary: string;
    colorLink: string;
    colorSuccess: string;
    colorWarning: string;
    colorError: string;
    fontSizeBase: string;
    headingColor: string;
    textColor: string;
    textColorSecondary: string;
    disabledColor: string;
    borderRadiusBase: string;
    borderColorBase: string;
    boxShadowBase: string;
    groupTitleColor: string; 
    colorBgContainer: string,   
  }
  
  export const designTokens: DesignTokens = {
    colorPrimary: '#a51d48',
    colorLink: '#a51d48',
    colorSuccess: '#52c41a',
    colorWarning: '#faad14',
    colorError: '#f5222d',
    fontSizeBase: '14px',
    headingColor: 'rgba(0, 0, 0, 0.85)',
    textColor: 'rgba(0, 0, 0, 0.65)',
    textColorSecondary: 'rgba(0, 0, 0, 0.45)',
    disabledColor: 'rgba(0, 0, 0, 0.25)',
    borderRadiusBase: '4px',
    borderColorBase: '#d9d9d9',
    boxShadowBase: '0 2px 8px rgba(0, 0, 0, 0.15)',
    groupTitleColor: '#f5222d',
    colorBgContainer: '#f6ffed', // background of menu
  };
  