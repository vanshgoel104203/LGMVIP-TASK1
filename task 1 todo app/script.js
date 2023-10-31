const inputBox=document.getElementById("input-box");
const listContainer= document.getElementById("list-container");
function addTask(){

if(inputBox.value===''){

    alert("yout must write something");

}

else{

let li=document.createElement("li");
li.innerHTML=inputBox.value;
listContainer.appendChild(li);
let span= document.createElement("span");
span.innerHTML="\u00d7";
li.appendChild(span);

}
inputBox.value="";
saveData();
}

listContainer.addEventListener(
    "click",
    function (a) {
      // This function is the event handler for the "click" event on the list container.
  
      // Check if the clicked element (a.target) is an "LI" (list item) element.
      if (a.target.tagName === "LI") {
        // If the clicked element is an "LI" element, toggle the "checked" class on it.
        a.target.classList.toggle("checked");
  
        // Call the "saveData" function to save the updated data, possibly to a backend or local storage.
        saveData();
      }
      // Check if the clicked element (a.target) is a "SPAN" element.
      else if (a.target.tagName === "SPAN") {
        // If the clicked element is a "SPAN" element, remove its parent (which is likely an "LI" element).
        a.target.parentElement.remove();
  
        // Call the "saveData" function to save the updated data, possibly to a backend or local storage.
        saveData();
      }
    },
    false
  );
  
  function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
  }
  
  function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
  }
  
  showTask();