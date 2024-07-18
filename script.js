function storeRecord(){
  car={
    brand:brand.value,
    price:price.value,
    key:key1.value
  }
  if(car.brand==""||car.price==""||car.key==""){
    alert("fill empty text field")
  }
  else if(car.key in localStorage){
    alert("car already added")

  }
  else{
    localStorage.setItem(car.key,JSON.stringify(car))
    alert("car added successfully")
  }
}
function retrieveRecord(){
  let keys=key2.value;
 let car=JSON.parse(localStorage.getItem(keys))
  result.innerHTML=`<div class="card" style="width: 18rem;">
  <ul class="list-group list-group-flush">

    <li class="list-group-item">${car.brand}</li>
    <li class="list-group-item">${car.price}</li>
    <li class="list-group-item">${car.key}</li>
  </ul>
</div>`

}
function clearRecord(){
  key3=key3.value;
  localStorage.removeItem(key3)
}
function clearAll(){
  localStorage.clear();
}
