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
  if(keys in localStorage){
 let car=JSON.parse(localStorage.getItem(keys))
  result.innerHTML=`<div class="card" style="width: 18rem;">
  <ul class="list-group list-group-flush">

    <li class="list-group-item">${car.brand}</li>
    <li class="list-group-item">${car.price}</li>
    <li class="list-group-item">${car.key}</li>
  </ul>
</div>`
  }
  else{
    alert("no key found")
  }

}
function clearRecord(){
  if(key3.value in localStorage){
  localStorage.removeItem(key3.value)
  alert(`car removed`)
}
else{
  alert("no key found")
}
}
function clearAll(){
  localStorage.clear();
  alert("cleared all record")
}
