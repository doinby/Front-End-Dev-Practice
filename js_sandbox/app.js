  // xhr.onreadystatechange = function() {
  //   console.log('READYSTATE', xhr.readyState);
  //   if(this.status === 200 && this.readyState === 4){
  //     console.log(this.responseText);
  //   }
  // }
  
  // readyState Values
  // 0: request not initialized 
  // 1: server connection established
  // 2: request received 
  // 3: processing request 
  // 4: request finished and response is ready
  
  
  // HTTP Statuses
  // 200: "OK"
  // 403: "Forbidden"
  // 404: "Not Found"
  
  document.getElementById('button').addEventListener('click', loadData);
  
  function loadData() {
    // Create an XHR Object
    const xhr = new  XMLHttpRequest();
    
    // OPEN
    xhr.open('GET', 'data.txt', true);
    
    // console.log('READYSTATE', xhr.readyState);
    // Outputs READYSTATE 1
    
    xhr.onload = function () {
      console.log("READYSTATE", xhr.readyState);
      // Outputs READYSTATE 4 (new method, should use, no need to check for ready state 4)
      if (this.status === 200) {
        console.log(this.responseText);
      }
    };
    
    // xhr.onreadystatechange = function () {
    
    //   console.log("READYSTATE", xhr.readyState);
    //   // Outputs READYSTATE 1-4 (going thru the whole thing)
    
    //   if (this.status === 200 && this.readyState === 4) {
    //     console.log(this.responseText);
    //   }
    // };
    
    xhr.send();
  }