
function getPDFData(url, callback){
    //takes in a url and gets all the words on the document as an array
    var loadingTask = pdfjsLib.getDocument(url);

    loadingTask.promise.then(function(pdf) {
        pdf.getPage(1).then(function(page) {
            var textContent = page.getTextContent().then( (content =>{
                callback( Array.from(content.items) ) 
            }))
        });
    });
}

var screen = document.getElementById("output")

getPDFData("/data/data_extraction.pdf", (content =>{
    var arr = []
    content.forEach( item =>{
        arr.push(item.str)
    })

    //clear screen
    screen.innerHTML = "";
    
    var a = 0;
    var b = 1;
    var c = 2;
    var d = 3;
    var e = 4;

    for(;a < arr.length;){ 
        var obj = document.createElement("div")
        obj.setAttribute("class","col-2")
        obj.innerHTML = arr[a];

        screen.appendChild(obj) //column 0 : Names

        var obj = document.createElement("div")
        obj.setAttribute("class","col-3")
        obj.innerHTML = arr[b];

        screen.appendChild(obj) //column 1 : Transaction Date

        var obj = document.createElement("div")
        obj.setAttribute("class","col-3")
        obj.innerHTML = arr[c];

        screen.appendChild(obj) //column 2 : Transaction Date

        var obj = document.createElement("div")
        obj.setAttribute("class","col-2")
        obj.innerHTML = arr[d];

        screen.appendChild(obj) //column 3 : Transaction Date

        var obj = document.createElement("div")
        obj.setAttribute("class","col-2")
        obj.innerHTML = arr[e];

        screen.appendChild(obj) //column 4 : Transaction Date

        a += 5
        b += 5
        c += 5
        d += 5
        e += 5
    }
   

    for(var e = 4; e < arr.length; e += 5){ //column 4 : Agent Name
        var obj = document.createElement("div")
        obj.setAttribute("class","col-2")
        obj.innerHTML = arr[e];

        screen.appendChild(obj)
    }
}))




