function newElement(){var e=document.createElement("li"),t=document.getElementById("myInput").value,n=document.createTextNode(t);e.appendChild(n),""===t?alert("You must write something!"):document.getElementById("myUL").appendChild(e),document.getElementById("myInput").value="";var o=document.createElement("SPAN"),l=document.createTextNode("×");for(o.className="close",o.appendChild(l),e.appendChild(o),i=0;i<close.length;i++)close[i].onclick=function(){this.parentElement.style.display="none"}}function saveContents(){var e=document.getElementById("myUL").innerHTML;localStorage.myToDoList=e}function restoreContents(){var e=localStorage.myToDoList;void 0!=e&&(document.getElementById("myUL").innerHTML=e,console.log("myUl"))}alert("Bonjour!");var myNodelist=document.getElementsByTagName("LI");for(i=0;i<myNodelist.length;i++){var span=document.createElement("SPAN"),txt=document.createTextNode("×");span.className="close",span.appendChild(txt),myNodelist[i].appendChild(span)}var i,close=document.getElementsByClassName("close");for(i=0;i<close.length;i++)close[i].onclick=function(){this.parentElement.style.display="none"};var list=document.querySelector("ul");list.addEventListener("click",function(e){"LI"===e.target.tagName&&e.target.classList.toggle("checked")},!1);