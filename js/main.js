var ProductNameInput=document.getElementById('ProductNameInput');

var ProductPriceInput=document.getElementById('ProductPriceInput');

var ProductCategoryInput=document.getElementById('ProductCategoryInput');

var ProductDiscreptionInput=document.getElementById('ProductDiscreptionInput');

var updateBtn = document.getElementById('updateBtn');
var addBtn = document.getElementById('addBtn');



// all arrays use
var productContainer;
if(localStorage.getItem('myProduct') != null )
{
    productContainer=JSON.parse( localStorage.getItem('myProduct') );
    displayPruducts(productContainer);
}
else
{
    productContainer =[];
}

// add  products
function addproduct()
{

    var product={
        name:ProductNameInput.value,
        price:ProductPriceInput.value,
        category:ProductCategoryInput.value,
        discreption:ProductDiscreptionInput.value
    };
    productContainer.push(product),
    console.log(productContainer);
    localStorage.setItem('myProduct',JSON.stringify(productContainer));
    clearForm();
    displayPruducts(productContainer);
  
   

}  
// clear form 
function clearForm(){
    ProductNameInput.value="";
    ProductPriceInput.value="";
    ProductCategoryInput.value="";
    ProductDiscreptionInput.value="";

}
// display Product in html
function displayPruducts(productList)
{
    var cartona=``;
    for(var i =0 ; i<productList.length;i++)
    {
        cartona+=` <tr>
        <td>${i+1}</td>
        <td>${productList[i].name}</td>
        <td>${productList[i].price}</td>
        <td>${productList[i].category}</td>
        <td>${productList[i].discreption}</td>
        <td> <button onclick="setFormForUpdate(${i})" class="btn  btn-outline-warning">update</button> </td>
        <td><button onclick="deleteproduct(${i})" class="btn  btn-outline-danger">delete</button> </td>
    </tr>`;
    }
    //call html usinf id 
    document.getElementById('tableBody').innerHTML =cartona;
}
//=======================================
//search function 
// "samsong".toLowerCase().includes("so".toLowerCase());
function searchproducts(searchTerm)
{
    var searchResult=[];
    for(var i=0; i<productContainer.length;i++)
    {
        if(productContainer[i].name.toLowerCase().includes(searchTerm.toLowerCase())  == true )
        {
        //replace searchTerm to
          searchResult.push(productContainer[i]);
        }
    }
    displayPruducts(searchResult);

}
//  searchproducts("op");
//============================== Start-delete product ==================================

function deleteproduct(deletedIndex){
    productContainer.splice(deletedIndex,1);
    localStorage.setItem('myProduct',JSON.stringify(productContainer));

    displayPruducts(productContainer);
}
// deleteproduct(1);

//============================== End-delete product ==================================

//============================== Start-Update product ==================================
 function setFormForUpdate(updatedIndex){
    ProductNameInput.value=productContainer[updatedIndex].name;
    ProductPriceInput.value=productContainer[updatedIndex].price;
    ProductCategoryInput.value=productContainer[updatedIndex].category;
    ProductDiscreptionInput.value =productContainer[updatedIndex].discreption;
    updateBtn.classList.replace('d-none','d-inline-block');
    addBtn.classList.add('d-none');
   
    // productContainer[updatedIndex].name.includes(updatedIndex)
    // localStorage.setItem('myProduct',JSON.stringify(productContainer));

    // displayPruducts(productContainer);
    

}

//  setFormForUpdate(2);
//============================== End-Update product ==================================


// var z ="Hi My Name Is Abanoub Maged Maher ".replace(/\s/g,"");
// console.log(z);

// var c="Hi My Name Is Abanoub dddd Maged Maher ".replace(/\d/ig,"R");
// console.log(c);