let mission;
document.getElementById("but").onclick = function ()
{
    mission = document.getElementById("txt").value;
    if (mission !== "")
    {
        let nDiv = document.createElement("div");
        nDiv.textContent = mission;
        

        // delete
        let delet = document.createElement("button");
        delet.textContent = "Delete";
        delet.onclick = function () {
            nDiv.remove();
        };

        
        let edit = document.createElement("button");
        edit.textContent = "edit";


        edit.onclick = function () {
            alert("ReWritw your mission in the textbox");
             document.getElementById("txt").value = "edit your text";
            let save = document.createElement("button");
             save.textContent = "save";
             

        
        let x=0;

        
            save.onclick =  function () {
                nDiv.textContent = document.getElementById("txt").value;
                
            }

        

        nDiv.appendChild(save);

        }

        let Di = document.getElementById("Fdiv");
        Di.appendChild(nDiv);
        document.getElementById("txt").value = "";    

        nDiv.appendChild(edit);
        nDiv.appendChild(delet);
    }
    //edit

   
}