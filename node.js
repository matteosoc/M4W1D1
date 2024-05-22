function checkNumber() {
  var numOne = document.getElementById("numOne").value;
  var a = parseInt(numOne)

  var numTwo = document.getElementById("numTwo").value;
  var b = parseInt(numTwo)
    
  if ( a === 50 || b === 50 || (a + b === 50)) {
    console.log("true")
    var newDiv = document.createElement("div")
    newDiv.innerHTML = "Vero";
    document.getElementById("1").appendChild(newDiv);

  } else {
    console.log("falso")

    var newDiv = document.createElement("div")
    newDiv.innerHTML = "Falso";
    document.getElementById("1").appendChild(newDiv);
  }
}


function removeSecondLetter() {

  var word = document.getElementById("word").value

  var arrayWord = word.split("")    

  var position = document.getElementById("position").value
  var letterNumb = parseInt(position)
  
  var x = arrayWord.splice(letterNumb - 1,1)

  var res = word.replace(x,"")

  var newDiv = document.createElement("div")
  newDiv.innerHTML = res;
  document.getElementById("2").appendChild(newDiv);
}

function checkNumber2 () {

var a = parseInt(document.getElementById("numbOne").value)
var b = parseInt(document.getElementById("numbTwo").value)

if (((a < 40) || (a > 100)) || ((b < 40) || (b > 100))) {
  console.log("false")
  var newDiv = document.createElement("div")
  newDiv.innerHTML = "false";
  document.getElementById("3").appendChild(newDiv);
} else if (((a > 60) && (a < 70)) || ((b > 60) && (b < 70))) {
  console.log("false")
  var newDiv = document.createElement("div")
  newDiv.innerHTML = "false";
  document.getElementById("3").appendChild(newDiv);
} else {
  console.log("true")
  var newDiv = document.createElement("div")
  newDiv.innerHTML = "true";
  document.getElementById("3").appendChild(newDiv);
}
}


function checkCity() {

  var a = document.getElementById("cityName").value

  if (a.startsWith("Los") || a.startsWith("New")) {
    console.log(a)
    var newDiv = document.createElement("div")
    newDiv.innerHTML = a;
    document.getElementById("4").appendChild(newDiv);
  } else {
    console.log("false")
    var newDiv = document.createElement("div")
    newDiv.innerHTML = "false";
    document.getElementById("4").appendChild(newDiv);
  } 

} 


function sumArray() {

  var a = document.getElementById("numbers").value
  console.log(a)

  var numberArray = [1,4,6,3,5,2,4,10,200]
  var sum = 0

  for (i=0; i < numberArray.length; i++) {
    sum += numberArray[i] 
  }
  console.log(sum)
}


function sumArray() {
  
  var numberArray = []
      
  var text = document.getElementById("numberTosuM").value
  console.log(text)
  
  var b = text.split(",")
  
  for (i=0; i < b.length; i++) {
    number = parseInt(b[i])
    console.log(number)
    
    numberArray.push(number)
    
  }
  
  console.log(numberArray)
  
  var sum = 0

  for (i=0; i < numberArray.length; i++) {
    sum += numberArray[i] 
  }


  console.log(sum)
  var newDiv = document.createElement("div")
  newDiv.innerHTML = sum;
  document.getElementById("5").appendChild(newDiv);


}



function checkSix() {
  
  var numberArray = []
      
  var text = document.getElementById("numberToCheck").value
  console.log(text)
  
  var b = text.split(",")
  
    for (i=0; i < b.length; i++) {
    number = parseInt(b[i])
    
    numberArray.push(number)

  }
  
  console.log(numberArray)
  
  if (numberArray.includes(3) || numberArray.includes(1)) {
    console.log(false)

    var newDiv = document.createElement("div")
    newDiv.innerHTML = "false";
    document.getElementById("6").appendChild(newDiv);


  } else {
    console.log(true)

    var newDiv = document.createElement("div")
    newDiv.innerHTML = "true";
    document.getElementById("6").appendChild(newDiv);
  }
}


function checkDeg() {
  
  var deg = parseInt(document.getElementById("angle").value)
  
  console.log(deg)
  
  switch (deg) {
    case 90:
      console.log("retto")
      var newDiv = document.createElement("div")
      newDiv.innerHTML = "retto";
      document.getElementById("7").appendChild(newDiv);
      break
    case 180:
      console.log("piatto")
      var newDiv = document.createElement("div")
      newDiv.innerHTML = "piatto";
      document.getElementById("7").appendChild(newDiv);
      break
    default:
      if (deg < 90) {
        console.log("acuto")
        var newDiv = document.createElement("div")
        newDiv.innerHTML = "acuto";
        document.getElementById("7").appendChild(newDiv);
      } else {
        console.log("ottuso")
        var newDiv = document.createElement("div")
        newDiv.innerHTML = "ottuso";
        document.getElementById("7").appendChild(newDiv);
      }
    break
  }
  
}


function makeAcronym() {
  
  var acronymFinal = ""
  var companyNameArray = []
  
  var company = document.getElementById("company").value
  
  console.log(company)
  
  var companyNameSplit = company.split(" ")
  
  for (i=0; i < companyNameSplit.length; i++) {
  number = companyNameSplit[i]
    
  companyNameArray.push(number)

  }
  
  console.log(companyNameArray)
  
  for (let i = 0; i < companyNameArray.length; i++) {
    
    let word = companyNameArray[i].toUpperCase()
    
    let firstLetter = word.charAt(0)
    
    console.log(firstLetter)
    
    var acronymFinal = acronymFinal.concat(firstLetter)
    
  }
  
  console.log(acronymFinal)
  
      var newDiv = document.createElement("div")
    newDiv.innerHTML = acronymFinal;
    document.getElementById("8").appendChild(newDiv);
  
  
}