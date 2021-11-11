function testGS() {

    const url = "https://script.google.com/macros/s/AKfycbxMOEW8baInNn2wEp1AJyhFf9aPt3I15qiK2Xa_hl9f3BDk5_PDuGc2_P_7p2wvij0v/exec";

    fetch(url)
        .then(d => d.json())
        .then(d => {
            document.getElementById("app").textContent = d[0].status;
        });
}





function addGS() {

    const url = "https://script.google.com/macros/s/AKfycbxMOEW8baInNn2wEp1AJyhFf9aPt3I15qiK2Xa_hl9f3BDk5_PDuGc2_P_7p2wvij0v/exec";

    fetch(url,{
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        //credentials: 'omit', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow', // manual, *follow, error
        //referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({First:"Sabine",Last:"LOYAU",Telephone:"123-865-234"}) // body data type must match "Content-Type" header
      });
}

document.getElementById("btn").addEventListener("click",testGS);
document.getElementById("btn2").addEventListener("click",addGS);
