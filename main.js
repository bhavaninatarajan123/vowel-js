var a=prompt("enter only string");
document.write("Given string is ="+a+"<br>")
var b=a.split(""); 
var c=[]; 
console.log(b);
for(let i=0;i<b.length;i++){
                            if(b[i]=="a"||b[i]=="e"||b[i]=="i"||b[i]=="o"||b[i]=="u"){
                            
                                c.push(b[i]);}
                            }
                            document.write("vowels in given array="+c+"<br><br>")
                         document.write( "length of the vowel in the string is "+c.length);


