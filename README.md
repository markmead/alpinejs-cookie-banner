# Alpine JS Cookie Banner

Alpine JS directive that adds simple cookie banner functionality.

## Example 👀

```html
<div x-data x-cookie-banner>
  We use cookies <a href="#">click here</a> to find out more.

  <button> Got it </button>
</div>
```

It works by listening for a click even on a `<button>` element which when clicked will hide the cookie banner.

This is a basic example that uses the default `localStorage` option. If you want to use `sessionStorage` then you'd write `x-cookie-banner.session`

You can pass any HTML you want, but make sure you do pass a `<button>` or there's no way for the user to close the cookie banner.

## Install 🌟

It's very easy to install Alpine JS plugins! 🙌

### CDN

```html
<script
  defer
  src="https://unpkg.com/alpinejs-cookie-banner@latest/dist/cookie.min.js"
></script>

<script
  defer
  src="https://unpkg.com/@alpinejs/persist@3.x.x/dist/cdn.min.js"
></script>

<script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
```

### NPM/Yarn

```shell
npm i -D alpinejs-cookie-banner

yarn add -D alpinejs-cookie-banner
```

Then you can register the plugin.

```js
import Alpine from 'alpinejs';
import cookie from 'alpinejs-cookie-banner';

Alpine.plugin(cookie);

window.Alpine = Alpine;

Alpine.start();
```

### Stats 📊

Here's some stats about the Alpine JS Persist Extended package! As you can see, it's tiny 🤏

![](https://img.shields.io/bundlephobia/min/alpinejs-cookie-banner)
![](https://img.shields.io/npm/v/alpinejs-cookie-banner)
![](https://img.shields.io/npm/dt/alpinejs-cookie-banner)
![](https://img.shields.io/github/license/markmead/alpinejs-cookie-banner)
