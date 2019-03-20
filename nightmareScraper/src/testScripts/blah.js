const Nightmare = require('nightmare');
const nightmare = Nightmare({show: true,waitTimeout:5000});
//let vo = require('vo');


var func1 = function() {
     nightmare.goto('https://duckduckgo.com')
    .type('#search_form_input_homepage', 'github nightmare')
    .wait(1000)
    //.click('#search_button_homepage')
    .type('body', '\u000d')
    .wait('h2.result__title')
    .evaluate(() => document.querySelector('h2.result__title').outerHTML)
    //.wait(1000)
    .end()
    .then(console.log)
    .catch(error => {
        console.error('search failed: ', error)
    });
};

var func2 = function() {
    nightmare.goto('https://www.goole.co.uk')
   .type('input#q', 'js nightmare')
   .click('#search_button_homepage')
   //.type('body', '\u000d')
   //.wait(1000)
    .wait('#resultStats')
   //.evaluate(() => document.querySelector('#resultStats').href)
   .end()
   .then(console.log)
   .catch(error => {
       console.error('search failed: ', error)
   });
};

var func3 = function() {
    nightmare.goto('https://www.goole.co.uk')
    .end(() => 'some value')
    .then(console.log)
}

func1();
