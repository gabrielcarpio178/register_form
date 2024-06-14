
var province = document.getElementById('province');

var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

function province(){
  let option_province = "<option value='' selected>Select province</option>"
  fetch("https:/psgc.gitlab.io/api/regions/060000000/provinces/", requestOptions)
    .then(response => response.json())
    .then(result => (
        result.forEach(element => {
          const provide_create = document.createElement('option');
          provide_create.value = element.code;
        })
      )
    )
    .catch(error => console.log('error', error));
    
}

window.onload = province;
