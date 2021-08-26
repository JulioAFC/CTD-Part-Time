/*Elas são true ou false?*/

let x=10
let y ="a"
y==="b" || x >= 10//true

let x=3
let y=8
!(x == "3" || x === y) && !(y !== 8 && x <= y)//false

let str = ""
let msg = "haha!"
let eBonito = "false"
!((str || msg) && eBonito)//false
