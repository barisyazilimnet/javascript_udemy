function sayiuret(){
    return Math.ceil(Math.random()*49)
}

var i
var j

for(i=1; i<=8; i++){
    console.log(i + ".KOLON ")
    for(j=1; j<=6; j++){
        console.log(sayiuret())
    }
}