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

-  Live Site URL: https://countries-app-jjw.netlify.app/

## My process

### Built with

-  Semantic HTML5 markup
-  Mobile-first workflow
-  CSS Grid
-  Flexbox
-  [React](https://reactjs.org/) - JS library
-  [Styled Components](https://styled-components.com/) - For styles
-  TypeScript
-  React Testing Library
-  Jest

### What I learned

> ###### Console Warning
>
> I'm aware of Styled Components warning me about producing over 200 divs for each country on the homepage. I could always slice the array of country data being displayed to the user, but I chose to let the user browse through the whole list instead.

```jsx
export default styled.div.attrs<Props>(
   ({margin, ...}) => ({ margin: margin,}))<Props>`
   margin: ${({ margin }) => margin}
   ...
`
```

I was able to further develop my knowledge of Styled Components in this project, expanding into using the `attrs()` function and the special `as` property to render certain components as different HTML elements, such as converting a `div` to a `section`. I further organised myself better in regards to having a separate folder for all my styled components, and utilised the `*.styled` naming convention to enable faster searching for any desired file.

```jsx
useLayoutEffect(() => {
   const theme = localStorage.getItem('dark')
   theme && setDark(JSON.parse(theme))
}, [])
```

One problem I ran into with my previous React TodoList application was that synchronously placing my lightTheme object into the theme state would initially render that colour scheme, only to then quickly change to dark-mode if the user had previously selected it.

This was of course happening because of the asynchronous nature of `useEffect()`, which I was using to set the theme based on the checkbox's saved state. In order to fix this bug, I decided to switch to using the `useLayoutEffect()` hook, which would synchronously set the checkbox state when that component is first loaded and on every future re-render.

```jsx
<Routes>
   <Route
      path="/"
      element={
         <HomeHeader
            prevFilter={prevFilter}
            updatePrevFilter={updatePrevFilter}
         />
      }
   />
   <Route path="/details/:country" element={<FurtherHeader />} />
</Routes>
```

My original solution to creating the about page was to conditionally render components based on a change in state. However, I later decided to learn React Router and implemented it as my official solution instead. I learned how to setup routes and link to those from whatever components we may choose, as well as making use of the useParams() hook to attach additional information onto the path and dynamically generate JSX based on it.

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

I chose to highlight the function above due to its efficiency in generating the different country regions to be displayed within the dropdown menu. I was able to use a combination of chaining methods and the `Set()` data structure to remove all duplicates from the returned Array, whilst then sorting them in alphabetical order and producing a button for each one.

```jsx
test('HTML renders correctly & semantically', () => {
   const { getByRole, getByTestId } = render(<BackButton />)
   const link = getByRole('link')
   expect(link).toBeInTheDocument()
   expect(link).toHaveAttribute('href', '/')
})
```

This project was my first introduction to testing and the importance it plays in giving us the confidence that our app won't break as it scales in size. I used React Testing Library alongside Jest to implement basic unit tests to ensure my components worked in insolation from one another.

### Continued development

Testing - I look forward to learning much more about testing and all the different types of edge cases we can test for in our application. Developing the change in mindset from testing implementation details to the state our DOM is in and where that data is being used was challenging at first, but now I am more confident with that approach I'm excited to progress further.

Although learning the basics of Typescript has proved to be incredibly valuable so far, I still face many problems with refactoring my type declarations, and using the 'any' type to temporarily fix any bugs. I would therefore like to learn more about how to solve these kind of issues, whilst also focusing on how to destructure potentially falsy data (such as that returned from the Context API).

Whilst I was building out each feature, I found that my App component was quickly becoming bloated with important global logic that I wasn't able to house anywhere else. I therefore look forward to learning more about advanced React concepts such as Reducers, which I believe will come in handy at organising more complicated state and extending my knowledge on where to house important logic.

### Useful resources

-  [Kevin Powell - Custom Select Menu](https://www.youtube.com/watch?v=bB14uo0Tu5A&t=183s&ab_channel=KevinPowell) - This resource helped me style the dropdown menu to allow users to filter the countries displayed. Since I had never styled a select menu before this project, it was a great resource to learn how to hide the default arrow which was pinned to the edge of the menu, as well as how to create a more custom design using pseudo elements. Lastly, I learnt about the `pointer-events` property which we can use to toggle the targetability of events when positioning content in front of others.

-  [Stop Lying to React About Missing Dependencies](https://betterprogramming.pub/stop-lying-to-react-about-missing-dependencies-10612e9aeeda) - This article helped me combat a number of `useEffect()` warnings about missing depedencies, which at first I had purposely not included to prevent infinite loops from occuring. The author showed me how to use refs to prevent the useEffect callback from running if no local data had changed from its last execution. This further allowed me to save the state of the application when the user would return from visitng the about page.

## Author

-  Website - [Joshua Jameson-Wallis](https://www.joshuajamesonwallis.com/)
-  Linkedin - [Joshua Jameson-Wallis](https://www.linkedin.com/in/joshua-jameson-wallis/)
