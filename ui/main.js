console.log('Loaded!');
function incrementCounter(){
  var request =  new XMLHttpRequest();
  request.onreadystatechange = function(){
    if(request.readyState === XMLHttpRequest.DONE ){
      if(request.status === 200){
        var count = getElementById('count');
        count.innerHTML = request.responseText;
      }
    }
  };

  request.open('GET','http://localhost:8080/counter',true);
  request.send(null);
}

