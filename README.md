jquery.onepages.js
==================

A jquery library for controlling (hide/show) pages in a one page HTML. Use it the way you like it
as long as what you are doing is legal. Comments and suggestions via Git Issues or, even better,
Pull Requests are very much welcome.

examples
========

```html
<html>
  <head>
  $(function() {
      $("#main").onepages({
        hide: true,                   /* whether to hide children initially, default is true */
        ctrls: [["button", "click"]], /* a list of [selector, event] that will triggers pages to show */
        effect: "slide"               /* the showing effect (slide or fade, default is null) */
      });    
  });
  </head>
  <body>
    <div id="main">
      <div id="pageI" class="pageI">
        I am page I
      </div>
      <div id="pageII" class="pageII">
        I am page II
      </div>
    <div>
    
    <!-- To show page I (i.e. index 0) -->
    <button class="onepages-index-0">showI</button>
    <!-- To show page II (i.e. index 1) -->
    <button class="onepages-index-1">showII</button>
    
    <!-- To show page I (i.e. id pageI) -->
    <button class="onepages-id-pageI">showI</button>
    <!-- To show page II (i.e. id pageII) -->
    <button class="onepages-id-pageII">showII</button>
    
    <!-- To show page I (i.e. class pageI) -->
    <button class="onepages-class-pageI">showI</button>
    <!-- To show page II (i.e. class pageII) -->
    <button class="onepages-class-pageII">showII</button>
    
    <!-- To show page/pages at will -->
    $.onepages.show("#main", "onepages-index-0");
    $.onepages.show("#main", "onepages-class-pageI, onepages-index-1");
    $.onepages.show("#main", ["onepages-index-0", "onepages-id-pageII"]);
    
  </body>
</html>
```
