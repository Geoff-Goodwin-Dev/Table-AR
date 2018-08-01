# Table-AR

## What the App does
Table-AR will utilizes Augmented Reality to enable effective task management by the use of unique user sessions host lists of items rendered in a three dimensional projected scene married together with a user's incoming video stream

<a href="https://www.youtube.com/watch?v=SQlr5Brc9a0">
    <img src="https://img.youtube.com/vi/SQlr5Brc9a0/0.jpg" alt="Table-AR Youtube Screenshot"/>
</a>

## What technologies the App implements
Front-End:
* React 
* <a href="https://aframe.io" target="_blank">A-Frame</a> which is built off of <a href="https://threejs.org/" target="_blank">Three.js</a> including:
    * <a href="https://www.npmjs.com/package/aframe-react" target="_blank">aframe-react</a>
    * <a href="https://www.npmjs.com/package/aframe-material-snickell" target="_blank">aframe-material-snickell</a> based on the <a href="https://github.com/etiennepinchon/aframe-material" target="_blank">aframe-material</a> component
* <a href="http://www.passportjs.org/" target="_blank">Passport.js</a>


Back-End:
* <a href="https://www.mongodb.com/" target="_blank">MongoDB</a>
* <a href="http://mongoosejs.com/" target="_blank">Mongoose</a>

## How the App works
* Users will arrive at the landing page's deployed site <a href="https://table-ar.herokuapp.com" target="_blank">here</a>
* First time users will access the sign-up page by clicking the sign up button and providing the requested information
* Returning users will access their personal account by clicking the log on button and providing their username and password
* Once logged in, users can interact with their to do lists, create new lists, add/remove list items, mark items as complete, etc.
* Actions can be take either by mouse click on the desktop experience or by gaze control both on mobile and desktop
* Gaze control is a matter of pointing your orange center ring cursor at an item.  The cursor will begin to "fuse" and will shrink to a simulated mouse-click in half a second
* The mobile experience also allows for interaction in VR mode which will allow the user to leverage the phone's tilt controls to look around the three dimensional, stereoscopic view 

## Additional Notes
* Currently, the experience works best on the following browsers by device type:
    * Desktop - Google Chrome or Firefox
    * Mobile (iphone) - Safari
    * Mobile (android) - Firefox

* Mobile (iphone) experience on Chrome is currently under review to resolve known gaps

* For any questions, comments, or suggestions; please feel to reach out via Github or via email to <a href="mailto:ggoodwin.dev@gmail.com">ggoodwin.dev@gmail.com</a>