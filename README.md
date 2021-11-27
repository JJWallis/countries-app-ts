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

```css
.proud-of-this-css {
   color: papayawhip;
}
```

```jsx
const handleRegions = () => {
   const regions = new Set(context?.countries?.map(({ region }) => region))
   return Array.from(regions)
      .sort()
      .map((region: string) => (
         <StyledOption key={region}>{region}</StyledOption>
      ))
}
```

filtering logic

```jsx
{key[0].toUpperCase() +
key
   .slice(1, key.length)
   .split(/(?=[A-Z])/)
   .join(' ')}
:
</CountrySubTitle>
{value
? value.toString().split(',').join(', ')
: 'No data provided'}

// FurtherDetails/CountryCard formatting str data

function fetchData(endpoint: string) {
   axios
      .get<data>(endpoint)
      ...
      }

return <Button error>No bordering countries</Button>

// good error handling - displaying alternative to user
```

### Continued development

useEffect() - missing dependencies suggestions (caused to do with vars used within - ex: context) | // eslint-disable-next-line react-hooks/exhaustive-deps - saviour atm!

### Useful resources

-  [Kevin Powell - Custom Select Menu](https://www.youtube.com/watch?v=bB14uo0Tu5A&t=183s&ab_channel=KevinPowell) - This resource helped me style the dropdown menu to allow users to filter the countries displayed, since I had never styled a select menu before this project. It was a great resource to learn how to hide the default arrow which is pinned to the edge of the select menu, and how to create a more custom design using pseudo elements to create the background and triangle shape using a border trick. I lastly learnt about an incredibly useful property named `pointer-events`, which we can use to control the targetability of events when positioning content in front of others.

-  [Stop Lying to React About Missing Dependencies](https://betterprogramming.pub/stop-lying-to-react-about-missing-dependencies-10612e9aeeda) - This article helped me combat a number of `useEffect()` warnings about missing depedencies, which I had first purposely not included to prevent infinite loops from occuring. The author showed me how to use refs to prevent the useEffect callback from running if no local data had changed from its last execution, which further allowed me to save the state of the application when the user would return from visitng another 'page'.

-  [Axios Crash Course](https://www.youtube.com/watch?v=6LyagkoRWYA&t=79s&ab_channel=TraversyMedia) - This crash course helped introduce me to more of the features which Axios provides us with, especially with regards to handling errors/rejected Promises and what we can display to the user whilst logging other important information for debugging purposes.

## Author

-  Website - [Joshua Jameson-Wallis](https://joshuajamesonwallis.com)
-  Linkedin - [Joshua Jameson-Wallis]()

## Acknowledgments

###### TODO

CSS:

Input search - issues with showing live results (input event while typing - not searching until typing 1 one more time post fully country name entered) | reverting to submit btn for validation + searching once input complete

Controlling imgs in grid items - all the same size (bg img vs img tag)

JS:

Diff filtering logic (diff versions of state) - done stylistically with todo list | here - diff version of state (filteredRegions) | all data passed via context to dynamic container (determineData func + map over returned result to keep dynamic render func)

Create page effect - state to conditionally render diff components (doing so in sep funcs)

useMemo() + useLayoutEffect(

Typescript advanced-basics - exporting interfaces (+ storing elsewhere for DRY code) | type vs interface (destructuring context bug) | fixing any types for params in funcs (especially arr iteration methods) | typeof operator for type (dynamic) |

useEffect - get out of async nature of state change | `useEffect(() => {}, [desiredRegion])` | useRef() - get around ESLint warnings (saving app state + filtered options - being reset as re-mounted to DOM - lifted ref up to parent) | code order - updating ref 1st + then error state after (causing inputs to be disabled on data fetching error)

TS - any type error for params in funcs (Antartica - lacked properties attempting to convert to obj - undefined) | see value in TS

Styled components - attrs func | as keyword
