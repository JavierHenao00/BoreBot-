document.getElementById("button-el").addEventListener("click",function(){

    fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json())
    .then(data => {
        document.getElementById("title-el").textContent = data.activity
    })
})