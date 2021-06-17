
function testGS() {

    const url = "https://script.google.com/macros/s/AKfycbyVn77OCZxeWWAVss8fB1txXMT5UO0Wmr6ZrsMGTIadvJF_LnHXUHMpAQaUviCaqU1Q/exec";

    fetch(url)
        .then(d => d.json())
        .then(d => {
            document.getElementById("app").textContent = d[0].status;
        });

}

document.getElementById("btn").addEventListener("click",testGS);