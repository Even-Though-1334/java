const Name = "A-y-u-sh";
const repo = 333

//console.log( "Name" + " repo");
//console.log(` My name is ${Name} and my repo count is ${repo}`);

const newName = new String ("hITESH")
//console.log( newName.__proto__);
//console.log( newName.length);
//console.log(newName[3]);
console.log(newName.toUpperCase());
console.log(newName.substring(0, 4)) // ( 0 , 4 ) 4 ko count nhi kiya jeyeg
const anotherString = newName.slice(-5, 4)
console.log(anotherString);

const spaceString = ( "     hitesh       "   )
console.log(spaceString)
console.log(spaceString.trimEnd()); // trim is used to remove the gap trim start,trimend,trim

const url = ( " https.raj@#$%kundra.com")

console.log(url.includes('@#$' ));
console.log(Name.split('-'));