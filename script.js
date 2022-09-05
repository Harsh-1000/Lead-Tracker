let myLeads=[]

const inputEl = document.getElementById("input-el")

const input = document.getElementById("input-btn")

const saveTab = document.getElementById("save-tab")

const del = document.getElementById("delete-all")

const ulEl = document.getElementById("ul-l")

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if(leadsFromLocalStorage)
 {
   myLeads = leadsFromLocalStorage
   renderLeads()
 }   


input.addEventListener("click", function()
{
    if(inputEl.value != "")
      {

        myLeads.push(inputEl.value)

        localStorage.setItem("myLeads", JSON.stringify(myLeads))

        
        inputEl.value = ""
        renderLeads()

      }
       
})

saveTab.addEventListener("click", function()
{
    
  chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
   
    myLeads.push(tabs[0].url) 
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads()
   })
       
})




del.addEventListener("click",function()
{
  localStorage.clear()
  myLeads=[]
  inputEl.value = ""
  renderLeads()
})


function renderLeads()
{
    let listItems = "" 

    myLeads.forEach(element => {

    listItems += 
    `<li>
         <a href ="${element}" target=_blank>${element}</a>
    </li>`
  
    });

    ulEl.innerHTML = listItems
}



