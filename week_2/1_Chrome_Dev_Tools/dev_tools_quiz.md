#### Include an inline screenshot of your codeschool's points from the profile page:

<!-- Modify the Markdown to include your answers. Don't delete the questions! -->
<img src="https://raw.githubusercontent.com/ddeol77/phase_0_unit_1/master/week_2/1_Chrome_Dev_Tools/imgs/Screen%20Shot%202014-05-24%20at%2011.36.32%20AM.png">

##QUIZ
* Explain which tabs support the following actions and how.
  * Realtime editing of HTML and CSS 
    <br>he Element and Styles tabs support realtime editing of HTML and CSS.  This is done by right-clicking on an element and selecting Inspect Element.
  * Javascript Debugging
    <br> This is done in the sources panel.  There is a Javascript Debuggins optionin the left panel.
  * Performance Optimization 
    <br>This can be done by using the Network tab.  In this tab you can anazlyse the order in which information is being loaded, the speed, and any errors.  This information allows to to re-arrange items, fix errors, and make other adjustments to optimize the performance.  There is also pagespeed tools but the tutorials didn't talk about that much.

* What's the quick key for your OS to spawn the Dev Tools inspector?
  <br>command + option + i
 
* Go to http://www.postmachina.com/ and analyze and tweak this nicely designed page.
  * What is the current background color for the page?  (Surprisingly, it's not just black!)
    *When I hover over the container id I see green and brown also.
  * Tweak the background color to white.
  * Tweak the height of the side bar that contains the logo.  Shrink it down to 85px.
  * Roll over the navigation links.  When you hover over them, they dissapear.  Let's change the hover color to black instead.
  * Now take a screenshot of your new (and maybe not so improved) design.  It should match this screenshot: http://postimg.org/image/5ak1jkpl5/
  * Upload your own image to the imgs directory in the `1_Chrome_Dev_Tools` directory.  It should match the image above. The last nav link in the image above is black because the mouse was hovering there when the screenshot was taken. Do the same, and don't take a screenshot of your whole desktop, just the browser window. (This is part of the challenge.)

* For the postmachina website, why can't you tweak the color of the text "The most important things are not things"?  Please explain.
  * It looks like the white font color is actually the background color.

* Go to www.ticketswizard.com and analyze the page.  
  * What is the largest image on the website? 
      New Year's Eve Movie Times Square
  * Explain how you would find out this information, and list the URL of offending image here and how big it is.
      I went to the Network tab in devtools, clicked shift refresh to reload the page, and sorted the items by content size.  URL for the image is: http://www.ticketswizard.com/Images/Catalog/92624182-c482-4a35-8da2-4fbf2f502e94_Large_Large.png it is 500 X 210.

