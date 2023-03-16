var Form = document.getElementById("addForm");
var Itemlist = document.getElementById("items");





//form submitted
Form.addEventListener("submit", onsubmit);

//Add item
function onsubmit(eve) {
    eve.preventDefault();

    //getinput value from user
    let ItemValue = document.getElementById("item").value;
    // console.log(ItemValue);

    //creat new list for append this value
    var li = document.createElement('li');
    //creat class 
    li.className = 'list-group-item';
    //   console.log(li); // after sumitting li will created;


    // Append this list inside Itemlist
    Itemlist.append(li);
    //chang the li text with given user input value;
    li.textContent = ItemValue;


    //creat delet btn
    var delelbtn = document.createElement('button');
    //add class name;
    delelbtn.className = "btn btn-danger btn-sm float-right delete";
    delelbtn.textContent ="X";
   //append deletbtn inside li;
    li.append(delelbtn);

}





// for Delete event;
Itemlist.addEventListener("click",onclick_for_remove);
//function_remove_items;
function onclick_for_remove(e){
    // console.log(1); its worke if any where click on listitem;
    if(e.target.classList.contains("delete")){
        // console.log(1) 
        var li = e.target.parentElement;
        Itemlist.removeChild(li);
    }

}



// for filter event
var forFilter = document.getElementById("filter");
forFilter.addEventListener("keyup",FilterItem);

function FilterItem(e){
    let textvale = e.target.value.toLowerCase();
    // console.log(textvale);

    // get item from li
    var Getitem = document.getElementsByTagName("li");
    // console.log(Getitem);

    //first convert into Array then apply for Each

    Array.from(Getitem).forEach(function(item){
        var itemName = item.firstChild.textContent;
        // console.log(itemName);

     if(itemName.toLowerCase().indexOf(textvale) != -1){ 
        // !(-1) mean they have some index value;
      item.style.display = "block";
     }else{
        item.style.display = "none"; 
     }


    })

}