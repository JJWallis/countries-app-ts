import React, { useState } from 'react'

const Toggler: React.FC = (props: any) => {
   const [isToggled, setIsToggled] = useState(false)
   const handleToggle = () => setIsToggled(!isToggled)

   const { component: C } = props
   return <C on={isToggled} toggleOn={handleToggle} {...props} />
}

export const withToggle = (component: React.FC) => {
   return (props: any) => <Toggler component={component} {...props} />
}
