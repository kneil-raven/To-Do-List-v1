# takeaway lessons Creating First EJS Template (Section 22, part 266)

## link for the course video https://www.udemy.com/course/the-complete-web-development-bootcamp/learn/lecture/12384846#questions

1. install the ejs package using npm, and then, read the EJS documentation for further understanding.

   - npm i ejs
   - https://github.com/mde/ejs/wiki/Using-EJS-with-Express
   - https://ejs.co/#docs

2. create a folder/directory named views kasi ditoy nga agsearch ejay views engine by default dagitay files that we want to render.

3. create a list.ejs inside the views directory para magserve bilang base template

4. `<%= [variable name here] %>` kasta ti langa ti marker ti EJS, example ket `<%= %>`

5. inside the app.get() method, gagamitin ang res.render('list', {key : value}) tapno ang gagawin ng code is hahanapin ang key doon sa list.ejs na ginawa natin inside the views directory tapos idi-display ang value ni app.js. kumbaga inlink mo nga ejay nga key, ti value na ket any value set inside the GET method route or the app.get(). ang tawag dito ay passing variables from(galing sa) our server to(papunta doon sa) our template file.

6. kapag more than 6 cases, use switch statements tapos kapag less than 5 cases, use if else statements.

# takeaway lessons in Running Code Inside the EJS Template (Section 22, part 267)

1. the scriptlet tag (<% %>) allows us to run basic JS code inside the HTML template for control flow purposes. see the Tags section in the documentation:

   - https://ejs.co/

2. nagamit ang scriptlet tag at the list.ejs. check mo below:

```
    <% if (kindOfDay === 'Saturday' || kindOfDay === 'Sunday') { %>
    <h1 style="color: cyan"><%= kindOfDay %> To-Do List</h1>
    <% } else { %>
    <h1 style="color: green"><%= kindOfDay %> To-Do List</h1>
    <% } %>

```

3. kapag may logic ang code, it is better to put it in the server side rather than inside the template or the HTML

4. My code using switch case to display the current day today.

```javascript
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let today = new Date();
let currentDay = today.getDay();
let day = "";

// let createDay = new Date();
// let currentDay = daysOfWeek[createDay.getDay()];
// res.render("list", { kindOfDay: currentDay });
// res.write(`Today is ${currentDay}.`);

switch (currentDay) {
  case 0:
    // day = `Sunday`;
    day = `${daysOfWeek[currentDay]}`;
    break;
  case 1:
    // day = `Monday`;
    day = `${daysOfWeek[currentDay]}`;
    break;
  case 2:
    // day = `Tuesday`;
    day = `${daysOfWeek[currentDay]}`;
    break;
  case 3:
    // day = `Wednesday`;
    day = `${daysOfWeek[currentDay]}`;
    break;
  case 4:
    // day = `Thursday`;
    day = `${daysOfWeek[currentDay]}`;
    break;
  case 5:
    // day = `Friday`;
    day = `${daysOfWeek[currentDay]}`;
    break;
  case 6:
    // day = `Saturday`;
    day = `${daysOfWeek[currentDay]}`;
    break;
  default:
    console.log("error");
}

res.render("list", { kindOfDay: day });
```

# takeaway lessons (section 22, part 268)

1. read this stackoverflow for the formatting of date in JS to understand it better:

   - https://stackoverflow.com/questions/3552461/how-do-i-format-a-date-in-javascript

   - Options key examples:
     day:
     The representation of the day.
     Possible values are "numeric", "2-digit".
     weekday:
     The representation of the weekday.
     Possible values are "narrow", "short", "long".
     year:
     The representation of the year.
     Possible values are "numeric", "2-digit".
     month:
     The representation of the month.
     Possible values are "numeric", "2-digit", "narrow", "short", "long".
     hour:
     The representation of the hour.
     Possible values are "numeric", "2-digit".
     minute: The representation of the minute.
     Possible values are "numeric", "2-digit".
     second:
     The representation of the second.
     Possible values are "numeric", 2-digit".

2. add the POST method route, check if you have included the body parser below the const app = express() method. after that, ipo-post natin yung value ng newItem in our list.ejs by using body parser, req.body.newItem; yung code. dapat magmatch yung value ng NAME in the HTML form dun sa body parser code natin (req.body.[NAME], in our case, req.body.newItem).

3. when using res.render(), we must provide both variables that we want to render. after declaring the rendered variables, inside the app.post() method is we're gonna redirect back to our home('/') or root route.

4. declare an empty array (latter papalitan ng values na buy, cook, eat) tapos in order to madisplay isuna a mainayon dijay list, use items.push() inside the POST method route. don't forget nga ideclare ejay item nga kayat mo ipush dijay ayan ti POST method route ah, in this case, isu ejay item, haan nga items.

5. kung malabo, rewatch the course on the link below:

   - https://www.udemy.com/course/the-complete-web-development-bootcamp/learn/lecture/12384890#questions

6. remember to create a for loop inside the list.ejs para makagawa ka ng list na magdi-display pababa at hindi magstack na iisang array lang siya within a bullet point.

# takeaway lesson Adding Pre-Made Stylesheets to Website (section 22, part 270)

1. add a public folder/directory tapos doon ilagay yung mga static resource kagaya ng pre-made css, js na ginawa natin, images, etc. ang gagawin ng public ay sya ang magse-serve up ng mga static resources, ditam nga itambak amin nga masapul mo nga css,js,images.

2. insert the code app.use(express.static('public')) para madisplay yung css natin na ating ginawa.

3. in styling your css, go to your styles.css tapos hanapin mo yung documentations with search comments.

# takeaway lessons for Understanding Templates vs Layouts (section 22, part 271)

1. kapag magulo, refer to the course link below:

   - https://www.udemy.com/course/the-complete-web-development-bootcamp/learn/lecture/12384960#questions

2. create a new GET work route, tapos nagernder tayo ng list na ang key=value pair ay natawag na listTitle: "Work List" tapos newListItems: workItems para idisplay ito kapag pumunta tayo sa page natin na /work ang path ng directory.

3. after GET work route, create POST work route. same process lang din siya nung POST method nung home('/') route na ipu-push natin yung item na ginawa/tinype natin to the array tapos idisplay doon sa to-do list.

4. add a value to the button and change its name from button to list. kapag nagconsole ka, ito ang lalabas na output:

   - { newItem: 'whew', button: 'Work List' } ito ang lalabas kapag button pa lang ang name.
   - { newItem: 'new task', list: 'Work List' } ganito na kapag nachange from button to list ang name.

5. gumawa tayo ng if statement dito to check if the list that the new item came from ay galing sa Work List. kapag ito ay galing sa work list, its gonna push the item and redirects back to /work route, else its gonna push the item and redirects it back to our root/home(/) route. see code below:

   ```javascript
   if (req.body.list === "Work") {
     workItems.push(item);
     res.redirect("/work");
   } else {
     items.push(item);

     res.redirect("/");
   }
   ```

6. use the layouts for faster templating tapno haan ka marigatan nga design nga design ti kada page. read the documentation or see the path file below tapos check agijay codes:

   - views/header.ejs or footer.ejs or about.ejs
   - <%- include('header') -%> for header, isu ti ipan jay ngato etoy
   - <%- include('footer') -%> for footer, isu ti ipan jay bottom etoy

# takeaway lesson: Understanding Node Module Exports: How to Pass Functions and Data Between Files (section 22, part 272)

1. create date.js tapos insert the code there nga nagdi-display ng date.

2. create the code inside date.js a function tapno icall mo na lang siya kapag gusto mo nang ibalik to the GET method route. don't forget to declare the name of the function as a constant variable inside the app.js para irequire na kunin yung date na in the specified directory.

```
const date = require(__dirname + "/date.js");
```

3. declare module.exports = getDate; sa loob ng date.js para maexport natin papalabas yung function at magamit yung datas natin between files.

4. by declaring the variable day = date() inside the app.get('/', ()) method, kukunin ng GET method yung nakalagay sa date.js na function, which is displaying the current day today.

5. read the blog post below to know more about writing proper functions and difference from function expression:

   - https://dmitripavlutin.com/6-ways-to-declare-javascript-functions/#11-a-regular-function

6. read also this documentation for guides in node.js for the exports shrotcut, tapno mas basbassit pay ti code ken refactor the code dijay date.js.

   - https://nodejs.org/api/modules.html#moduleexports

7. remember proper declaration of variables! kapag const ang linagay mo sa isang array or object, it will not throw an error kapag nagdagdag/push ka ng items inside them. pero kapag binago mo yung array or object, it will show error. refer to the documentation below in declaration of variables:

   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const

8. remember how to use version control using git, command line, and github remote repositories. link below if you need refresher.

   - https://www.udemy.com/course/the-complete-web-development-bootcamp/learn/lecture/12386668#questions/12689376
