<!DOCTYPE html>
 <html lang="en">

 <head>
     <meta charset="UTF-8">
     <title>Javascript Menu Task</title>
     <style>
         #menu ul li {
             display: inline-block;
             width: 150px;
             padding-left: 5px 10px;
             background-color: #0dcaf0;
             color: #1a1d20;
             text-align: center;
         }

         #arrow {
             margin-left: 40px;
             display: block;
         }

         #arrow div {
             float: left;
             width: 150px;
             text-align: center;
         }
     </style>
 </head>

 <body>
     <div class="box">
         <p>
             <a href="#" onclick="activateEditMode()">Activate Edit Mode</a>
         </p>
         <p>
             <label>Add New Menu</label>
             <input type="text" id="newMenuValue">
             <input type="submit" value="Add" onclick="addMenu()"> </p>
     </div>
     <div id="menu"></div>
     <script type="text/javascript">
         let arrMenu = ['Menu 1', 'Menu 2', 'Menu 3'];

         function getMenu() {
             let menuHtml = '<ul>';
             let arrowHtml = '<div id="arrow">';
             for (let i = 0; i < arrMenu.length; i++) {
                 menuHtml += '<li>' + arrMenu[i] + '</li>';
                 if (i == 0) {
                     arrowHtml += '<div><a href="#" onclick="moveRight(' + i + ')">-></a></div>';
                 } else if (i == arrMenu.length - 1) {
                     arrowHtml += '<div><a href="#" onclick="moveLeft(' + i + ')"><-</a></div>';
                 } else {
                     arrowHtml += '<div><a href="#" onclick="moveLeft(' + i +
                         ')"><-</a> | <a href="#" onclick="moveRight(' + i + ')">-></a></div>';
                 }
             }
             menuHtml += '</ul>';
             arrowHtml += '</div>';
             return menuHtml + arrowHtml;
         }

         function showMenu() {
             let menu = getMenu();
             document.getElementById('menu').innerHTML = menu;
         }

         function addMenu() {
             let newMenu = document.getElementById('newMenuValue');
             if (newMenu.value == '') return;
             arrMenu.push(newMenu.value);
             showMenu();
             newMenu.value = '';
         }

         function moveLeft(indexElement) {
             let currentMenu = arrMenu[indexElement];
             let replacedMenu = arrMenu[indexElement - 1];
             arrMenu.splice(indexElement - 1, 2, currentMenu, replacedMenu); 
             showMenu();
         }

         function moveRight(indexElement) {
             let currentMenu = arrMenu[indexElement];
             let replacedMenu = arrMenu[indexElement + 1];
             arrMenu.splice(indexElement, 2, replacedMenu, currentMenu);
             showMenu();
         }

          
         showMenu();
     </script>
 </body>

 </html>
