var getJSON = function(url) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('get', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status == 200) {
        resolve(xhr.response);
      } else {
        reject(status);
      }
    };
    xhr.send();
  });
};

getJSON('http://shopicruit.myshopify.com/products.json').then(function(data) {
  console.log('Your public IP address is: ' + data.ip);
}, function(status) {
  console.log('Something went wrong.');
});

