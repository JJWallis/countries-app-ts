export type theme = {
   color: string
   mainBgColor: string
   input: string
   elements: string
   shadow: string
   headerShadow: string
   breakpoint: string
}

export const lightTheme = {
   color: 'hsl(200, 15%, 8%)',
   mainBgColor: 'hsl(0, 0%, 98%)',
   input: 'hsl(0, 0%, 52%)',
   elements: 'hsl(0, 0%, 100%)',
   shadow: '0 0 20px 0 rgba(0,0,0,0.1)',
   headerShadow: '0 0px 30px 0 rgba(0, 0, 0, 0.2)',
   breakpoint: '700px',
}

export const darkTheme = {
   color: 'hsl(0, 0%, 100%)',
   mainBgColor: 'hsl(207, 26%, 17%)',
   input: 'hsl(0, 0%, 100%)',
   elements: 'hsl(209, 23%, 22%)',
   shadow: '0 0 20px 0 rgba(0,0,0,0.1)',
   headerShadow: '0 0px 30px 0 rgba(0, 0, 0, 0.2)',
   breakpoint: '700px',
}

// error msg red shade colour
// transition for theme change
