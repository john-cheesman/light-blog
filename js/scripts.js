var $=function(e){return document.querySelector(e)},$$=function(e){return document.querySelectorAll(e)},matches;!function(e){matches=e.matchesSelector||e.webkitMatchesSelector||e.mozMatchesSelector||e.oMatchesSelector||e.msMatchesSelector}(document.documentElement),document.addEventListener("DOMContentLoaded",function(){document.addEventListener("click",function(e){matches.call(e.target,".js-menu-link")&&($("body").classList.toggle("menu-open"),e.preventDefault())},!1)});