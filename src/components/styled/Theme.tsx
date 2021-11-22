export type theme = {
   color: string
   mainBgColor: string
   input: string
   elements: string
   shadow: string
   headerShadow: string
   countryCardShadow: string
   breakpoint: string
}

export const lightTheme = {
   color: 'hsl(200, 15%, 8%)',
   mainBgColor: 'hsl(0, 0%, 98%)',
   input: 'hsl(0, 0%, 52%)',
   elements: 'hsl(0, 0%, 100%)',
   shadow: '0 0 20px 0 rgba(0,0,0,0.1)',
   headerShadow: '0 0px 30px 0 rgba(0, 0, 0, 0.2)',
   countryCardShadow: '0 0 20px 0 rgba(0,0,0,0.1)',
   breakpoint: '900px',
}

export const darkTheme = {
   color: 'hsl(0, 0%, 100%)',
   mainBgColor: 'hsl(207, 26%, 17%)',
   input: 'hsl(0, 0%, 100%)',
   elements: 'hsl(209, 23%, 22%)',
   shadow: '0 0 20px 0 rgba(0,0,0,0.1)',
   headerShadow: '0 0px 30px 0 rgba(0, 0, 0, 0.2)',
   countryCardShadow: '0 0 3px 8px rgba(0, 0, 0, 0.05)',
   breakpoint: '900px',
}

// error msg red shade colour
// transition timing func + duration/delay for theme change
