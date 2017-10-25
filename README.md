# start.me enhancer
The first start.me plugin, ![writen](https://cdn.jsdelivr.net/gh/KaMeHb-UA/start.me-enhancer@0.0.1-d/assets/images/code.png) with ![love](https://cdn.jsdelivr.net/gh/KaMeHb-UA/start.me-enhancer@0.0.1-d/assets/images/love.png) by [KaMeHb-UA](https://github.com/KaMeHb-UA), hosted by [![GitHub](https://cdn.jsdelivr.net/gh/KaMeHb-UA/start.me-enhancer@0.0.1-d/assets/images/github.png)](https://github.com) and delivered by [![](https://data.jsdelivr.com/v1/package/gh/KaMeHb-UA/start.me-enhancer/badge)](https://www.jsdelivr.com/package/gh/KaMeHb-UA/start.me-enhancer)
## Setup
Add new Embedded Content widget and paste following:
`data:text/html;base64,PGh0bWw+PGhlYWQ+PC9oZWFkPjxib2R5PkVOSEFOQ0VSIFBMVUdJTjxzY3JpcHQ+ZnVuY3Rpb24gZ2V0KGUsdCl7dmFyIGE9bmV3IFhNTEh0dHBSZXF1ZXN0O2Eub3BlbigiR0VUIixlLCEwKSxhLnNlbmQoKSxhLm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbigpezQ9PWEucmVhZHlTdGF0ZSYmKDIwMCE9YS5zdGF0dXM/dChuZXcgRXJyb3IoIlNlcnZlciByZXR1bmVkICIrYS5zdGF0dXMrIiBzdGF0dXMgKCIrYS5zdGF0dXNUZXh0KyIpIikpOnQobnVsbCxhLnJlc3BvbnNlVGV4dCkpfX1nZXQoImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvS2FNZUhiLVVBL3N0YXJ0Lm1lLWVuaGFuY2VyL3JlbGVhc2VzL2xhdGVzdCIsZnVuY3Rpb24oZSx0KXt2YXIgYT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCJzY3JpcHQiKSxuPXthc3luYzoiIixkZWZlcjoiIixzcmM6Imh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9LYU1lSGItVUEvc3RhcnQubWUtZW5oYW5jZXJAIitKU09OLnBhcnNlKHQpLnRhZ19uYW1lKyIvbG9hZGVyLmpzIn07Zm9yKHZhciByIGluIG4pYS5zZXRBdHRyaWJ1dGUocixuW3JdKTt3aW5kb3cucGFyZW50LmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYSl9KTtmb3IodmFyIGh0bWw9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoImh0bWwiKVswXS5vdXRlckhUTUwsZnJhbWVzPXdpbmRvdy5wYXJlbnQuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoImlmcmFtZSIpLGk9MDtpPGZyYW1lcy5sZW5ndGg7aSsrKWZyYW1lc1tpXS5zcmNkb2M9PWh0bWwmJihmcmFtZXNbaV0ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnN0eWxlLmRpc3BsYXk9Im5vbmUiKTs8L3NjcmlwdD48L2JvZHk+PC9odG1sPg==`

This will reconstruct your start page with hiding your created widget. To remove the plugin, open browser's developer tools (Ctrl+Shift+I), paste
````javascript
(function(a,b){
    for(var i = 0;i<b.length;i++){
        a(b[i])
    }
})(function(a){
    a.style.display='unset'
},document.getElementsByTagName('article'))
````
This will unhide all hidden elements. Next, remove it as usual.
Enjoy!
