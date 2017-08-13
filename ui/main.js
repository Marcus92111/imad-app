console.log('Loaded!');
function incrementCounter(){
  var request =  new XMLHttpRequest();
  request.onreadystatechange = function(){
    if(request.readyState === XMLHttpRequest.DONE ){
      if(request.status === 200){
        var count = document.gtElementById('count');
        count.innerHTML = request.responseText;
      }
    }
  };

  request.open('GET','http://arnkchn.imad.hasura-app.io/counter',true);
  request.send(null);
}

