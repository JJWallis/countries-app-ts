export const applyFocus = <T extends HTMLElement>(input: React.RefObject<T>) =>
   input.current?.focus()
