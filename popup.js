let scrapeButton = document.getElementById("scrapeButton")
let statusSpan = document.getElementById("statusSpan")

chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'document.body.style.backgroundColor = "black"'});
  });



  /* console.log($(".moreButton"))
if ($(".moreButton").length > 0){
    console.log("Ready")
    statusSpan.textContent = "Ready"
} else {
    console.log("Not ready")
    statusSpan.textContent = "Not on profile"
}
scrapeButton.onclick = function() {
   null 
} */
