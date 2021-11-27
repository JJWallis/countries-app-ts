# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca).

## Table of contents

-  [Overview](#overview)
   -  [The challenge](#the-challenge)
   -  [Screenshot](#screenshot)
   -  [Links](#links)
-  [My process](#my-process)
   -  [Built with](#built-with)
   -  [What I learned](#what-i-learned)
   -  [Continued development](#continued-development)
   -  [Useful resources](#useful-resources)
-  [Author](#author)
-  [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Your users should be able to:

-  See all countries from the API on the homepage
-  Search for a country using an `input` field
-  Filter countries by region
-  Click on a country to see more detailed information on a separate page
-  Click through to the border countries on the detail page
-  Toggle the color scheme between light and dark mode

### Screenshot

![](./Screenshot.png)

### Links

-  Live Site URL:

## My process

### Built with

-  React - JS Library
-  Typescript
-  Styled Components
-  Mobile-first workflow
-  Flexbox
-  CSS Grid
-  Semantic HTML5 markup

### What I learned

```jsx
export default styled.div.attrs<Props>(
   ({margin, ...}) => ({ margin: margin,}))<Props>`
   margin: ${({ margin }) => margin}
   ...
`
```

I was able to further develop my knowledge of Styled Components in this project, expanding into using the `attrs()` function and special `as` property to render certain components as different HTML elements (divs as sections for example). I further organised myself much better in regards to having a separate folder for all my styled components, and utilised the 'Styled' naming convention to quickly search for the desired file.

```jsx
useLayoutEffect(() => {
   const theme = localStorage.getItem('dark')
   theme && setDark(JSON.parse(theme))
}, [])
```

One problem I ran accross with my previous React TodoList application was that synchronously placing my lightTheme object into the theme state would initially render that colour scheme, only to then quickly change to dark-mode if the user had previously selected it. This was of course happening because of the asynchronous nature of `useEffect()`, which I was using to set the theme based on the toggle checkbox's saved state. In order to fix this bug, I decided to switch to using the `useLayoutEffect()` hook instead, which would synchronously set the checkbox state as the app first loads, before React would render any of the local components JSX to the DOM.

```jsx
const [countries, setCountries] = useState < data > null
const [furtherDetails, setFurtherDetails] = useState < data > null
const [filteredRegions, setFilteredRegions] = useState < data > null
const [homepage, setHomepage] = useState(true)

const handleContentVisible = () => {
   if (homepage) {
      const data = determineData()
      return data ? (
         <Wrapper as="article" display={'grid'} role="grid">
            {data.map((country) => (
               <CountryCard key={uuidv4()} data={country} />
            ))}
         </Wrapper>
      ) : (
         <Loading>
            {error
               ? 'Country data could not be retrieved. Please reload & try again.'
               : 'Loading...'}
         </Loading>
      )
   }
}
```

I was further really proud of my ability to use multiple different states housed in the App component, to control multiple features of the application together dynamically. This was a nice progression from my previous React project, since I was able to build different versions of state (rather than achieving the same effect stylistically), which would control the layout and data displayed by the app. In order to create the 'multi-page' feature, I conditionally rendered multiple 'groups' of components based on which state held a truthy value.

```jsx
const handleRegions = () => {
   const regions = new Set(countries?.map(({ region }) => region))
   return Array.from(regions)
      .sort()
      .map((region: string) => (
         <Button
            dropDown
            dropDownItem
            key={region}
            onClick={() => setDesiredRegion(region)}
         >
            {region}
         </Button>
      ))
}
```

I was really proud of the efficiency that the function above displays, which was used to generate the country regions to be displayed as separate buttons within the dropdown menu. I was able to use a combination of chaining methods and the `Set()` data structure to remove all duplicates from the returned Array, containing all the different regions for each country object in the original pulled data. I then sorted them in alphabetical order, and produced a <Button> for each one containing the required logic.

### Continued development

Although learning the basics of Typescript has proved to be incredibly valuable so far, I still face many problems with refactoring my type declarations and using the 'any' type to temporarily fix any bugs which may occur during development. I would therefore like to learn more about how to solve these kind of issues, whilst also focusing on how to destructure dynamic data which could potentially return falsy (such as data returned from the Context API).

As I continued to build out each feature, I found my App component was quickly becoming bloated with important fundamental logic which I wasn't able to house anywhere else. I therefore look forward to learning about more advanced React concepts such as custom hooks, which I believe will come into play here so I can extract this logic into its own re-usable component (thus refactoring my parent App).

Custom Hooks + useReducer() -

### Useful resources

-  [Kevin Powell - Custom Select Menu](https://www.youtube.com/watch?v=bB14uo0Tu5A&t=183s&ab_channel=KevinPowell) - This resource helped me style the dropdown menu to allow users to filter the countries displayed, since I had never styled a select menu before this project. It was a great resource to learn how to hide the default arrow which is pinned to the edge of the select menu, and how to create a more custom design using pseudo elements to create the background and triangle shape using a border trick. I lastly learnt about an incredibly useful property named `pointer-events`, which we can use to control the targetability of events when positioning content in front of others.

-  [Stop Lying to React About Missing Dependencies](https://betterprogramming.pub/stop-lying-to-react-about-missing-dependencies-10612e9aeeda) - This article helped me combat a number of `useEffect()` warnings about missing depedencies, which I had first purposely not included to prevent infinite loops from occuring. The author showed me how to use refs to prevent the useEffect callback from running if no local data had changed from its last execution, which further allowed me to save the state of the application when the user would return from visitng another 'page'.

-  [Axios Crash Course](https://www.youtube.com/watch?v=6LyagkoRWYA&t=79s&ab_channel=TraversyMedia) - This crash course helped introduce me to more of the features which Axios provides us with, especially with regards to handling errors/rejected Promises and what we can display to the user whilst logging other important information for debugging purposes.

## Author

-  Website - [Joshua Jameson-Wallis](https://joshuajamesonwallis.com)
-  Linkedin - [Joshua Jameson-Wallis]()

## Acknowledgments
