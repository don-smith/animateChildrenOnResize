# animateChildrenOnResize

A jQuery UI widget that makes it easy to control how the items in a container moveto their new locations when the container is resized. I've already done this once in a specific implementation and this project is the attempt to wrap this functionality up into a reusable widget. After I've refactored my current implementation to this, it would be great to add more options for animating with perhaps some canned defaults. Also, I'm excited to be using pavlov as the BDD environment.

For the time being (until this note is removed), this README will just represent my notes and thoughts and I'm working this out. 

# Thoughts

 - Consider inheriting from ui.resizable
   - if so, might be a good way to illustrate .bridge()
   - there are a lot of options on it
     - will this change as a result of the current widget refactoring?
 - Will probably need a children option that is a selector
 - Does a resizeTo() make sense?
