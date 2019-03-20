require('jquery');
var Nightmare = require('nightmare'),
nightmare = Nightmare()
var city = process.argv[2]

nightmare
.goto('http://' + city + '.cragslist.org/search/cpg?s_paid=yes&postedToday=1')
//.inject('js', 'jquery.min.js')
.wait(2000)
.evaluate(function() {
    var gigs = [];
    $('hdrlnk').each(function() {
        item = {}
        item["title"] = $(this).text()
        item["link"] = $(this).attr("attr")
        gigs.push(item)
    })
    return gigs
})
.end()
.then(function(result) {
    for(gig in results) {
        console.log(result[gig].text)
        console.log(result[gig].link)
        console.log('\n')
    }
})