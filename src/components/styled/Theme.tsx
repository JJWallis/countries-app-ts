export type theme = {
   color: string
   mainBgColor: string
   input: string
   elements: string
   shadow: string
   headerShadow: string
   countryCardShadow: string
   furtherImgShadowMb: string
   furtherImgShadowWd: string
   borderBtnShadow: string
   breakpoint: string
   furtherBreakpoint: string
   themeTransition: string
}

export const lightTheme = {
   color: 'hsl(200, 15%, 8%)',
   mainBgColor: 'hsl(0, 0%, 98%)',
   input: 'hsl(0, 0%, 52%)',
   elements: 'hsl(0, 0%, 100%)',
   shadow: '0 0 20px 0 rgba(0,0,0,0.1)',
   headerShadow: '0 0px 6px 0 rgba(0, 0, 0, 0.2)',
   countryCardShadow: '0 0 20px 0 rgba(0,0,0,0.1)',
   furtherImgShadowMb: '0 0 5px rgba(0, 0, 0, 0.05)',
   furtherImgShadowWd: '0 0 3px rgba(0, 0, 0, 0.05)',
   borderBtnShadow: '0 0 4px 2px rgba(0,0,0,0.05)',
   breakpoint: '899.999999px',
   furtherBreakpoint: '1100px',
   themeTransition: '0.3s ease-in-out',
}

export const darkTheme = {
   color: 'hsl(0, 0%, 100%)',
   mainBgColor: 'hsl(207, 26%, 17%)',
   input: 'hsl(0, 0%, 100%)',
   elements: 'hsl(209, 23%, 22%)',
   shadow: '0 0 20px 0 rgba(0,0,0,0.1)',
   headerShadow: '0 0px 6px 0 rgba(0, 0, 0, 0.2)',
   countryCardShadow: '0 0 3px 8px rgba(0, 0, 0, 0.05)',
   furtherImgShadowMb: '0 0 3px 8px rgba(0, 0, 0, 0.05)',
   furtherImgShadowWd: '0 0 3px 20px rgba(0, 0, 0, 0.05)',
   borderBtnShadow: '0 0 5px 5px rgba(0,0,0,0.1)',
   breakpoint: '899.999999px',
   furtherBreakpoint: '1100px',
   themeTransition: '0.3s ease-in-out',
}
