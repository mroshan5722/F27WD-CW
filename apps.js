// getting all required elements
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink;

// if user press any key and release
inputBox.onkeyup = (e)=>{
    let userData = e.target.value; //user enetered data
    let emptyArray = [];
    if(userData){
        suggBox.onclick = ()=>{
            suggBox;
            if (userData.includes("ho")) {
                webLink = "index.html";
            }
            else if (userData.includes("sp")) {
                webLink = "SPATripsDatesPrices.html";
            }
            else if (userData.includes("sp")) {
                webLink = "SPATravelinfo.html";
            }
            else if (userData.includes("ta")) {
                webLink = "TallinnCruises.html";
            }
            else if (userData.includes("ab")) {
                webLink = "AboutUs.html";
            }
            else if (userData.includes("ou")) {
                webLink = "Buses.html";
            }
            else if (userData.includes("bu")) {
                webLink = "Buses.html";
            }
            else if (userData.includes("co")) {
                webLink = "Contacts.html";
            }
            else if (userData.includes("co")) {
                webLink = "FAQ.html";
            }
            else if (userData.includes("qu")) {
                webLink = "FAQ.html";
            }
            else if (userData.includes("fa")) {
                webLink = "FAQ.html";
            }
            else if (userData.includes("tr")) {
                webLink = "TravelConditions.html";
            }
            else if (userData.includes("tr")) {
                webLink = "SPATravelinfo.html";
            }
            else{
                webLink = "TravelConditions.html";
            };
            
            linkTag.setAttribute("href", webLink);
            console.log(webLink);
            linkTag.click();
        }
        emptyArray = suggestions.filter((data)=>{
            //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase()); 
        });
        emptyArray = emptyArray.map((data)=>{
            // passing return data inside li tag
            return data = '<li>'+ data +'</li>';
        });
        searchWrapper.classList.add("active"); //show autocomplete box
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            //adding onclick attribute in all li tag
            allList[i].setAttribute("onclick", "select(this)");
        }
    }else{
        searchWrapper.classList.remove("active"); //hide autocomplete box
    }
}

// function select(element){
//     let selectData = element.textContent;
//     inputBox.value = selectData;
//     icon.onclick = ()=>{
//         webLink = "https://www.google.com/search?q=" + selectData;
//         linkTag.setAttribute("href", webLink);
//         linkTag.click();
//     }
//     searchWrapper.classList.remove("active");
// }

function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = '<li>'+ userValue +'</li>';
    }else{
        listData = list.join('');
    }
    suggBox.innerHTML = listData;
}

let suggestions = [
    "Home",
    "SPA Travel Info",
    "SPA Trips",
    "Talinn Cruises",
    "About Us",
    "TravelConditions"
];






