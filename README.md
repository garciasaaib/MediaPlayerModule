## micromediaplayer module
MediaPlayer is a JS module that works as a manager of video thougth some inputs and methods
  - You can mute, unmute, play, pause, by buttons that has access to MediaPlayer module
  - AutoPlay plugin plays the video when the page is changed
  - AutoPause plugin uses Visibility Observer to pause the video when the focus of the tab is off
  - AutoPause plugin uses Intersection Observer to pause the video when it isn't in the viewport
  - Ads plugin uses singleton Pattern to access to the array of ads, and build the tag and content by itself

# How to make it work
> Install micromediaplayer
`npm i -D micromediaplayer`

> Import MediaPlayer and the plugins that you want
```import MediaPlayer from 'micromediaplayer/lib/MediaPlayer'
import AutoPlay from 'micromediaplayer/lib/plugins/AutoPlay'
import AutoPause from 'micromediaplayer/lib/plugins/AutoPause'
import Ads from 'micromediaplayer/lib/plugins/Ads'
```

> Set a const as a new MediaPlayer object
```const player = new MediaPlayer({ 
  // set the html element that is the video tag
  el: video, 
  // those are all the plugins, you can erase anyone 
  plugins: [new AutoPlay(), new AutoPause(), new Ads()] 
})```


> You can use the new element type MediaPlayer to access to the methods
```togglePlayBtn.onclick = () => player.togglePlay()
toggleMuteBtn.onclick = () => player.toggleMute()
```

## Typescript

Typescript works as a new way to write Javascript with the good thing that have other languajes, mainly privacy

To use POO in JS it would be better if you know some of the basic concepts 
[Constepts of POO](http://www.upv.es/amiga/43.htm) 

- Instance: is the current father object. In this way all the objects have an object father, excepts the object Object, that is the root.
- Attribute: vars that belongs to the current object.
- Method: function that belongs to the current object.
- Private: this means that you can't invoque directly an attribute or method outside of the object.
- Event: alerts that tell you that something is happening, normally there is a way to access to them.
- Class: description of the object. When you make an object with a class that will be the instance of the object.

## Design Patterns 
[Design Patterns](https://sourcemaking.com/design_patterns/creational_patterns)
A **Design Pattern** is the response to common problems that are normally inside the context of programming
- The context is the situation where is the error.
- The problem should appear severy times in similar situations or projects.

- The problem includes all the limitations that exists in the context: limitations in the language of framework.

- The solution could have a generic design to be used in all the technologies.


### Patterns added
- Singleton
- Observer
- Decorator
