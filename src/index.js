export default function (Alpine) {
  Alpine.directive('cookie-banner', (el, { modifiers }, {}) => {
    let useSessionStorage = modifiers[0] === 'session';

    let closeButtonClicked = useSessionStorage
      ? sessionStorage.getItem('_cookieBannerClose')
      : localStorage.getItem('_cookieBannerClose');

    closeButtonClicked = JSON.parse(closeButtonClicked) ?? false;

    if (closeButtonClicked) {
      el.setAttribute('hidden', true);
    }

    let closeButton = el.querySelector('button');

    closeButton.addEventListener('click', function () {
      el.setAttribute('hidden', true);

      useSessionStorage
        ? sessionStorage.setItem('_cookieBannerClose', true)
        : localStorage.setItem('_cookieBannerClose', true);
    });
    // el.addEventListenter('click', (event) => {
    //   console.log(event);
    // });
  });
}
