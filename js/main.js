let Quotes = [{
    "quote":"“A room without books is like a body without a soul.”",
    "auther":"― Marcus Tullius Cicero"
},
{
    "quote":"“So many books, so little time.”",
    "auther":"― Frank Zappa"
},
{
    "quote":"“Be yourself; everyone else is already taken.”",
    "auther":"― Oscar Wilde"
},
{
    "quote":"“Be the change that you wish to see in the world.”",
    "auther":"― Mahatma Gandhi"
}
];

$("#click").click(function(){
    let randomQuote = Math.floor(Math.random() * Quotes.length)
    $("#quote").html(Quotes[randomQuote].quote);
    $("#auther").html(Quotes[randomQuote].auther);  
})