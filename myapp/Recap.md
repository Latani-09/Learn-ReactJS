State delegaton through value prop in controlled components.
# keys in React
Keys are identifiers that help React determine which items have changed, are added or are removed.
Amongst other things, keys instruct React on how to treat a specific element when updates happen.
Amongst other things, keys instruct React on whether a specific element’s internal state should be preserved when updates happen.


Although item indexes can be used as keys, using indexes as keys can create problems if the order of your list of items is prone to change and can negatively affect performance. Using unique and stable identifiers, such as item IDs, is recommended instead.  

# on focus on blur
onFocus is not the best event to set the interaction state to true, since it fires the moment the input gets focused and the user still hasn’t typed anything, resulting in a bad UI experience if an error is shown right away.
onBlur fires when the user leaves the focus from a particular input and it’s the best place to set the interaction state to true and provide actionable feedback in the UI if needed.

# Refs
DOM manipulation is the most common use case for refs, the useRef Hook can be used for storing other things outside React, like timer IDs. Similarly to state, refs remain between renders. Refs are like state variables that don’t trigger re-renders when you set them
-- DOM manipulation
-- storing things outside react like timer IDs
-- refs remain between renders(like state)
-- but don't trigger rerenders while set them