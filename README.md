# nucleuside:live-update-plus

This is an extension package for live-update which adds the ability to hot-push CSS in meteor apps. This is built for Nucleus(IDE) which is an in-browser IDE for meteor. Nucleus needs to update the CSS instantaneously, so instead of relying on meteor's own hot-push solution for CSS updation, which takes about 3-4 seconds to update the CSS, I created this package which allow hot-pushing CSS instantaneously.

This package basically extends `LiveUpdate` (nucleuside:live-update) to allow hot-pushing css, less and sass files.

It also allows hot-pushing of Sass and Less.

## Install
```sh
meteor add nucleuside:live-update-plus
```

## Use
You probably don't need it. I think Meteor's CSS push is good enough for traditional editors. But because you are a stubborn ass and you have to use this package despite my word, you can simply use it like this:

```js
LiveUpdate.refreshFile({
  fileType: 'css',
  newContent: newContentAsString
})
```

You can do same for less and sass as well.
