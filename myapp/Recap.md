State delegaton through value prop in controlled components.
# keys in React
Keys are identifiers that help React determine which items have changed, are added or are removed.
Amongst other things, keys instruct React on how to treat a specific element when updates happen.
Amongst other things, keys instruct React on whether a specific element’s internal state should be preserved when updates happen.


Although item indexes can be used as keys, using indexes as keys can create problems if the order of your list of items is prone to change and can negatively affect performance. Using unique and stable identifiers, such as item IDs, is recommended instead.  

# on focus on blur
onFocus is not the best event to set the interaction state to true, since it fires the moment the input gets focused and the user still hasn’t typed anything, resulting in a bad UI experience if an error is shown right away.
onBlur fires when the user leaves the focus from a particular input and it’s the best place to set the interaction state to true and provide actionable feedback in the UI if needed.