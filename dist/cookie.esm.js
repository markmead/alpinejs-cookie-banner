function s(n){n.directive("cookie",(e,{modifiers:r},{})=>{let o=r[0]==="session",t=o?sessionStorage.getItem("_cookieBannerClose"):localStorage.getItem("_cookieBannerClose");t=JSON.parse(t)??!1,t&&e.setAttribute("hidden",!0),e.querySelector("button").addEventListener("click",function(){e.setAttribute("hidden",!0),o?sessionStorage.setItem("_cookieBannerClose",!0):localStorage.setItem("_cookieBannerClose",!0)})})}var a=s;export{a as default};
