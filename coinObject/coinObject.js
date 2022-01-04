const body = document.getElementById("res")

const coin = {
    state: 0,
    
    flip: function(){
        this.state = Math.floor(Math.random()*2)
        return this.state
    },

    toString: function(){
        if(this.state === 0){
            return "Heads"
        } else{
            return "Tails"
        }
    },

    toHTML: function(){
        const image = document.createElement("img")
        image.classList.add("img")
        if(this.state === 0){
            image.src = "../assets/img/cara.jpeg"
            image.alt = "Head"
        } else{
            image.src = "../assets/img/coroa.jpeg"
            image.alt = "Tails"
        }
        return image
    },

}


function display20Flips(){
    const div = document.createElement("div")
    body.appendChild(div)
    const results = []
    for(let i = 0; i < 20; i++){
        // coin.flip()
        results.push(coin.toString(coin.flip()))
    }

    const res = document.createElement("p")
    res.innerText = results
    div.appendChild(res)

    return results
}
display20Flips()

function display20Images(){
    const div2 = document.createElement("div")
    body.appendChild(div2)
    const results = []
    for(let i = 1; i <= 20; i++){
        coin.flip()
        results.push(coin.toString())
        div2.appendChild(coin.toHTML())
    }
    return results
}
display20Images()






































































// const coin = {
//     state: 5,
    
//     flip: function(){
//         // this.state = Math.floor(Math.random(0,1)*2)
//     },
//     toString: function(){
//         if(this.state === 0){
//             return "Heads"
//         } else{
//             return "Tails"
//         }
//     },
    
//     toHTML: function(){
//         const image = document.createElement("img")
        
//     }
// }
// console.log(state)


// function display20Flips(){
//     const results = []
//     for(let i = 0; i < 20; i++){

//     }
// }





// function ramdom(){
//     // return Math.floor(Math.random() * (max - min) * 2)
//     return Math.floor(Math.random(0,1)*2)
// }

// console.log(ramdom())