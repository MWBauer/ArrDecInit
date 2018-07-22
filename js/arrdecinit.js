//Initializer list specifies the number of elements and a avalue for each element.
var colors=new Array("cyan", "magenta", "yellow",  "black");

var integers1=[2,4,6,8];
var integers2=[2, , , 8];

outputArray("Array colors contains", colors);
outputArray("Array integers1 contains", integers1);
outputArray("Array integers2 contains", integers2);

//output the heading followed by a two-column table containing the subscritps and elements of theArray
function outputArray(heading, theArray) {
  document.writeln("<h2>" + heading + "</h2>");
  document.writeln("<table border = \"1\"");
  document.writeln("<thead><th>Subscript</th>" + "<th>Value</th><thead><tbody>");
  
  //output the subscript and value of each array element
  for (var i = 0; i < theArray.length; i++) 
    document.writeln("<tr><td>" + i + "</td><td>" + theArray[i] + "</td></tr>");
  document.writeln("</tbody></table>");
}