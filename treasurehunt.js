//var rainbowTreasure = Math.floor((Math.random) * 9)
//var daBomb = Math.floor((Math.random) * 9)
// welcome user alert
alert("Click the table to search for rainbow treasure")
const treasure = (id) => {
    if (id === 0) {
        document.getElementById(0).innerHTML = "🌴:"
    } else if (id === 1) {
       document.getElementById(1).innerHTML = "🌴"
    } else if (id === 2) {
       document.getElementById(2).innerHTML = "🌈"
    } else if (id === 3) {
       document.getElementById(3).innerHTML = "💣""
    } else if (id === 4) {
       document.getElementById(4).innerHTML = "🌴"
    } else if (id === 5) {
       document.getElementById(5).innerHTML = "🌴"
    } else if (id === 6) {
       document.getElementById(6).innerHTML = "🌴"
    } else if (id === 7) {
       document.getElementById(7).innerHTML = "🌴"
    } else if (id === 8) {
       document.getElementById(8).innerHTML = "🌴"
    }
    }
//const resetButton = (id) => {}








var rainbowTreasure = Math.floor(Math.random() * 9)
var daBomb = Math.floor(Math.random() * 9)

// welcome user alert
alert("Click the table to search for rainbow treasure")

//const location = () => {
   // if (rainbowTreasure === daBomb) {
       // Math.floor(Math.random(id) * 9)
       // alert("Congrats you found the rainbow treasure")
  //  }
//}

const treasure = (id) => {
    if (id === daBomb) {
        document.getElementById(id).innerHTML = "💣"
        alert("Booms goes the Dynomite")
    } else if (id === rainbowTreasure) {
       document.getElementById(id).innerHTML = "🌈"
       alert("Congrats you found Me Lucky Charms")
    } else  {
       document.getElementById(id).innerHTML = "💩"

    }
}



 
  // make it so bomb and rainbow are cannot land on the same location
//const resetButton = (id) => {}
// create button that resets game