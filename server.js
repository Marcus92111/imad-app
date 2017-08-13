var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
var articles ={
    articleOne:{
        title:'Article one',
        heading: 'Article one',
        content:
    `<p>this is content for my first article</p>
        <p>more content for my article</p>`
    },
    articleTwo:{ 
        title:'Article two',
        heading: 'Article two',
        content:
    `<p>this is content for my second article</p>
        <p>more content for my article</p>`
    },
    articleThree:{
          title:'Article threee',
        heading: 'Article three',
        content:
    `<p>this is content for my third article</p>
        <p>more content for my article</p>`
    }
}

function createTemplate(data){
    var title = data.title,
    heading = data.heading,
    content = data.content;
    
    var htmlTemplate = `<html>
    <head>
         <link href="/ui/style.css" rel="stylesheet" />
        <title>
           ${title}
        </title>
    </head>
    <body>
        <div class="container">
            <a href="/" >Home</a>
            <hr/>
            <h1>${heading}</h1>
           <div>${content}</div>
        </div>
    </body>
</html>`
return htmlTemplate;
}
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/article-one',function(req,res){
  res.send(createTemplate(articles.articleOne));
});
app.get('/article-two',function(req,res){
  res.send(createTemplate(articles.articleTwo));
});
app.get('/article-three',function(req,res){
  res.send(createTemplate(articles.articleThree));
});
// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
