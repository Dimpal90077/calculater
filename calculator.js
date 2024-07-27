const text=document.querySelector(".text");
const buttons=document.querySelectorAll("button");
const char=["%","/", "*","=","-", "+"];
let output=" ";
//define function to calculate based on button clicked.//
const calculate=(btnvalue)=>{
    if(btnvalue==="=" && output !==""){
        //if output has % replace with '/100' before evaluating.
        output=eval(output.replace('%',"/100"));

    }
    else if(btnvalue==="Ac"){
        output="";

    }
    else if(btnvalue==="Del"){
        //if del button is clicked ,remove the last character from the output

        output=output.toString().slice(0,-1);
    }
    else{
        //if output is empty and button is specialchars then return
        if(output===" " && char.includes(btnvalue)) return;
        output+=btnvalue
    }
    text.value=output;

}
//add evev listner to buttons ,call calculate ()on  click
buttons.forEach((button) =>{
    //Button click listner calls calculate ( )with dataset value as argument.
    button.addEventListener("click",(e)=>calculate(e.target.dataset.value));

});