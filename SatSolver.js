
let y=0;
a = solve(process.argv[2])


function solve(filename){

a=readFormula(filename)

b=doSolve(a[0], a[1])
console.log("\n")
console.log("satisfability:")
console.log(b[1])
console.log(b[0])


}




function readFormula(a){
const fs = require('fs')

var linhas = fs.readFileSync(a).toString()
var x = 0;

var arraes = []
arraes = linhas.split("\n");
while (x < arraes.length) {

	if (arraes[x].charAt(0) == 'c') {

		arraes[x] = "";

		x++;
	} else {
		x++;
	}

}

x = 0;
var z = 0;
transpo = [];
while (x <= arraes.length) {

	if (arraes[x] != ("")) {
		transpo[z] = arraes[x];
		z++;
	}

	x++;

}

arraes = transpo[0].replace("p", "").replace("cnf", "").replace("  ", "")
		.split(" ");

var avariables = parseInt(arraes[0]);

var aclauses = parseInt(arraes[1]);

var clauses = [];
var variables = [];
x = 0;

while (x < avariables) {

	variables[x] = false;

	x++;
}

x = 0;




while (x < transpo.length - 2) {

	clauses[x] = transpo[x + 1].split(" ");
	x++;
}



x = 0;



return [clauses,variables]
}


function nextAssignment(variables) {
	x = 0;
n = variables.length




z = 0;
combi = (parseInt(y, 10).toString(2));
	
	if (combi.length % n != 0) {

		while (combi.length % n != 0) {
			combi = "0" + combi
		}
		
	}
	z = 0;
	var combinationsbolean = new Array();
	while (z < n) {
		if (combi.charAt(z) == 0) {
			booleanvalor = false
		} else {
			booleanvalor = true
		}
		combinationsbolean[z] = booleanvalor
		z++;
	}
	
	y++
	
	return combinationsbolean;

}


function doSolve(clauses, variables){
clausecont=0
x=0

n=variables.length

var x=0
var bugvar=0
var k=0
booleanresult=false

resultclause= new Array()

var satisfabilitycont=0;
while(k<Math.pow(2, n)){
	
	
	
	combinations=nextAssignment(variables, k)
	booleanresult=false
	

while(bugvar<clauses.length){
	booleanresult=false
x=0

	while(clauses[bugvar][x]!=0){
		
		
	var trader;
	var facilitador=clauses[bugvar][x]
	trader=combinations[(Math.abs(facilitador)-1)]


	if(clauses[bugvar][x]<0){
		
		trader=!trader
		

	}
	

	booleanresult=booleanresult||trader
	
	
	x++
	}
	
resultclause[bugvar]=booleanresult

bugvar++;	
	
}
//AQUIIII
	var lasttest=0;
	var lasttestboo=true
	while(lasttest<clauses.length){
		lasttestboo= lasttestboo && resultclause[lasttest]
		lasttest++
	}

if(lasttestboo==true){
	
	satisfabilitycont++;
	}
	if(satisfabilitycont!=0){break}

bugvar=0
resultclause.length=0
k++
}
var satisfability;


 if(  satisfabilitycont==0){
	satisfability= false
	combinations=null
	
}

if(satisfabilitycont!=0){
	 
satisfability=true

}
return [ combinations, satisfability ]
}



