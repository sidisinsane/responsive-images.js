function makeImagesResponsive(){var e=document.documentElement.clientWidth!==0?document.documentElement.clientWidth:document.getElementsByTagName("body")[0].clientWidth,t=document.getElementsByTagName("body")[0].getElementsByTagName("img");for(var n=0;n<t.length;n++){var r=t[n],i;if(r.hasAttribute){if(!r.hasAttribute("data-src"))continue;i=r.hasAttribute("data-src-base")?r.getAttribute("data-src-base"):""}else{if(typeof r["data-src"]===undefined)continue;i=typeof r["data-src"]!==undefined?r.getAttribute("data-src-base"):""}var s=r.getAttribute("data-src"),o=s.split(",");for(var u=0;u<o.length;u++){var a=o[u].split(":"),f=a[0],l=a[1],c,h;if(f.indexOf("<")!==-1){c=f.split("<");if(o[u-1]){var p=o[u-1].split(/:(.+)/),d=p[0].split("<");h=e<=c[1]&&e>d[1]}else h=e<=c[1]}else{c=f.split(">");if(o[u+1]){var v=o[u+1].split(/:(.+)/),m=v[0].split(">");h=e>=c[1]&&e<m[1]}else h=e>=c[1]}if(h){var g=i+l;r.src!==g&&r.setAttribute("src",g);break}}}}if(window.addEventListener){window.addEventListener("load",makeImagesResponsive,!1);window.addEventListener("resize",makeImagesResponsive,!1)}else{window.attachEvent("onload",makeImagesResponsive);window.attachEvent("onresize",makeImagesResponsive)};