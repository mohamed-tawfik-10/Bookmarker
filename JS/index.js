var bookNameInput = document.getElementById('bookmarkName')
var bookUrlInput = document.getElementById('bookmarkURL')

var productContainer = [];
if (localStorage.getItem('product') !== null) {
    productContainer = JSON.parse(localStorage.getItem('product'));
    displayProducts(productContainer);
}


function addProduct() {
if (bookNameInput.value==false||bookUrlInput.value==false) {
    document.getElementById('alert').classList.replace('d-none','d-block');

}
else{
    var product = {
        code: bookNameInput.value,
        URL: bookUrlInput.value,
     

    }
    productContainer.push(product);
    localStorage.setItem('product', JSON.stringify(productContainer));
    location.reload();
    alertCheck();
    clearForm();
    displayProducts(productContainer);


}
   

}
function clearForm() {

    bookNameInput.value = null;
    bookUrlInput.value = null;

}
function displayProducts(arr) {

    var cratona = ``;
    for (var i = 0; i < arr.length; i++) {
        cratona += `   <tr>
                  <td>${i+1}</td>
                  <td>${productContainer[i].code}</td>              
                  <td>
                    <button onclick="goToLink(${i})" class="btn btn-visit" data-index="0">
                      <i class="fa-solid fa-eye pe-2"></i>Visit
                    </button>
                  </td>
                  <td>
                    <button onclick="deleteProduct(${i})" class="btn btn-delete pe-2" data-index="0">
                      <i class="fa-solid fa-trash-can"></i>
                      Delete
                    </button>
                  </td>
              </tr>
        `
    }
    document.getElementById('tableContent').innerHTML = cratona;
}
function deleteProduct(deleteIndex) {
    productContainer.splice(deleteIndex, 1);
    displayProducts(productContainer);
    localStorage.setItem('product', JSON.stringify(productContainer));

    console.log(productContainer);

}
function goToLink(button) {
   
   var linkk = productContainer[button].URL;

    window.open(linkk, "_blank");

}

function validateProducts(element) {

    var regax = {
        bookmarkName: /^[A-Z][a-z]{2,8}$/,
        bookmarkURL: /https?:\/\/(?:www\.)?[a-zA-Z0-9-]+(?:\.[a-zA-Z]{2,})+(?:\/[^\s]*)?/
      
    }
    var mystr = bookNameInput.value;
    if (regax[element.id].test(element.value) == true) {
        element.classList.add('is-valid');
        element.classList.remove('is-invalid');

        return true;
    }
    else {
        element.classList.add('is-invalid');
        element.classList.remove('is-valid');

        return false;
    }
}


