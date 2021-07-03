var Mobiles = {
    Brands: {
        Apple:{
            iphone8:{
                Name: "iPhone 8",
                Color: "Gold",
                Rom: "256gb",
                Ram: "6gb",
                image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone8-gold?wid=1144&hei=1144&fmt=jpeg&qlt=80&.v=1542226468997"
            },
            iphonex:{
                Name: "iPhone X",
                Color: "Silver",
                Rom: "256gb",
                Ram: "6gb",
                image: "https://assets.swappie.com/cdn-cgi/image/width=600,height=600,fit=contain,format=auto/iphone-x-silver-back-1-1-600x828.jpg"
            }
        },
        Samsung:{
            galaxya22:{
                Name: "GalaxyA22",
                Color: "Black",
                Rom: "128gb",
                Ram: "4gb",
                image: "https://images.priceoye.pk/samsung-galaxy-a22-pakistan-priceoye-woctw.jpg"
            },
            galaxys10:{
                Name: "Galaxy S10",
                Color: "Prisim White",
                Rom: "128gb",
                Ram: "6gb",
                image: "https://images.samsung.com/is/image/samsung/assets/uk/smartphones/galaxy-s10/sunset/images/gallery/galaxy-s10-plus_gallery-color_s10-plus-c1-06.jpg?$ORIGIN_JPG$"
            }
        },
        Huawei:{
            nova8pro:{
                Name:"Huawei Nova 8 Pro",
                Color: "White",
                Rom: "256gb",
                Ram: "8gb",
                image: "https://www.gizmochina.com/wp-content/uploads/2020/12/Huawei-nova-8-Pro-5G-1-500x500.jpg"
            },
            p30lite:{
                Name:"Huawei P30 Lite",
                Color: "Peacock blue",
                Rom: "128gb",
                Ram: "4gb",
                image: "https://alyaseen.co.ke/wp-content/uploads/2020/06/h4.jpg"
            },
            y9prime2019:{
                Name:"Huawei Y9 Prime 2019",
                Color: "Midnight Black",
                Rom: "128gb",
                Ram: "4gb",
                image: "https://www.luluhypermarket.com/medias/1669237-02.jpg-515Wx515H?context=bWFzdGVyfGltYWdlc3w1MjQyM3xpbWFnZS9qcGVnfGltYWdlcy9oMWIvaDA5L2gwMC85MzM1Mjk3NzY5NTAyLmpwZ3wzNjcwODIzMzQ3ZDg4NmUzZjJhNmI5YWJhZWUyZDMzNTAwNDczYWNkMGIzMTgxNjcwYTA4MDNjYjIxNzg4MjQx"
            }
        }
    }
}


var mobileName = [];
var mobDetails = [];
for(var key1 in Mobiles.Brands){
    for(var key2 in Mobiles.Brands[key1]){
        mobileName.push(key1 + " " + key2)
        for(var key3 in Mobiles.Brands[key1][key2]){
            mobDetails.push(Mobiles.Brands[key1][key2][key3])
        }
    }
}

var arraySplice = [];
    for (i=0; i<mobDetails.length; i+=0) { 
        var sliced = mobDetails.slice(i, 5);
        arraySplice.push(sliced);
        mobDetails.splice(0, 5);
}


// creating elements Attribute
var mobilesContainer = document.getElementById("mobiles-container");
mobilesContainer.setAttribute("class","row gx-0 justify-content-center")

for (let i = 0; i < mobileName.length; i++) {
    var mobileCard = document.createElement("div");
    var imgTag = document.createElement("img");
    var mobile_cardInfo = document.createElement("div");
    var cardTitle = document.createElement("h5");
    var color = document.createElement("p")
    var ram = document.createElement("p")
    var rom = document.createElement("p")


    // setting elements Attribute
    mobileCard.setAttribute("class","card m-3");
    mobileCard.style.width = "18rem";
    imgTag.setAttribute("class","card-img-top imgTag");
    mobile_cardInfo.setAttribute("class","card-body")
    cardTitle.setAttribute("class","card-title")
    color.setAttribute("class","card-text")
    ram.setAttribute("class","card-text")
    rom.setAttribute("class","card-text")


    // appending elements Attribute
    mobilesContainer.appendChild(mobileCard)
    mobileCard.appendChild(imgTag)
    mobileCard.appendChild(mobile_cardInfo)
    mobile_cardInfo.appendChild(cardTitle)
    mobile_cardInfo.appendChild(color)
    mobile_cardInfo.appendChild(ram)
    mobile_cardInfo.appendChild(rom)

    for (let j = 0; j < mobileName[i].length; j++){
      
    imgTag.setAttribute("src",arraySplice[i][4]);
    cardTitle.innerHTML = arraySplice[i][0]
    color.innerHTML = "<b>Color:</b>"+" "+ arraySplice[i][1]
    rom.innerHTML = "<b>Rom:</b>"+" "+ arraySplice[i][2]
    ram.innerHTML = "<b>Ram:</b>"+" "+ arraySplice[i][3]
    }
    
}

function searchItem(){
    var brandInput = document.getElementById("brandInput");
    var brandVal = brandInput.value;
    var userInput = document.getElementById("modelInput");
    var userVal = userInput.value;

    userVal= userVal.toLowerCase().replace(/ /g,'');

if(brandVal != "" && userVal != "" ){
    if(userVal in Mobiles.Brands[brandVal]){

        var mobilesHide = document.getElementById("mobiles-container");
        mobilesHide.setAttribute("class","row container-hide")
        var mobileFound = document.getElementById("searchedMobile");
        mobileFound.setAttribute("class","row gx-0 justify-content-center")

        var findMob = Mobiles.Brands[brandVal][userVal];
        var mobileCard = document.createElement("div");
        var imgTag = document.createElement("img");
        var mobile_cardInfo = document.createElement("div");
        var cardTitle = document.createElement("h5");
        var color = document.createElement("p")
        var ram = document.createElement("p")
        var rom = document.createElement("p")
    
        
        // setting elements Attribute
        mobileCard.setAttribute("class","card m-3");
        mobileCard.style.width = "18rem";
        imgTag.setAttribute("class","card-img-top imgTag");
        mobile_cardInfo.setAttribute("class","card-body")
        cardTitle.setAttribute("class","card-title")
        color.setAttribute("class","card-text")
        ram.setAttribute("class","card-text")
        rom.setAttribute("class","card-text")
    
    
        // appending elements Attribute
        mobileFound.appendChild(mobileCard)
        mobileCard.appendChild(imgTag)
        mobileCard.appendChild(mobile_cardInfo)
        mobile_cardInfo.appendChild(cardTitle)
        mobile_cardInfo.appendChild(color)
        mobile_cardInfo.appendChild(ram)
        mobile_cardInfo.appendChild(rom)
        
        imgTag.setAttribute("src",findMob.image);
        cardTitle.innerHTML = findMob.Name
        color.innerHTML = "<b>Color:</b>"+" "+ findMob.Color
        rom.innerHTML = "<b>Rom:</b>"+" "+ findMob.Rom
        ram.innerHTML = "<b>Ram:</b>"+" "+ findMob.Ram
        
        mobileCard.previousSibling.remove();
    
        brandInput.value = "Choose Brand Name";
        userInput.value = "";
    }
    else{
        swal({
            title: "Product Not Found",
            text: "please enter the correct model name",
            icon: "warning",
            button: "ok",
          });
        
        userInput.value = "";
    }
   
    }

    else{
        swal({
            title: "Input must not be empty",
            text: "please enter brand and model",
            icon: "error",
            button: "ok",
          });
    }
}

function enterPress(keyPress) {
    if (keyPress.keyCode === 13) {
        searchItem();
    }
  }

