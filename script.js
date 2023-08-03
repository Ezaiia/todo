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
        edit.textContent = "Edit";


        edit.onclick = function () {
            alert("Rewritw your mission in the textbox");
             document.getElementById("txt").value = "Edit your text";
            let save = document.createElement("button");
             save.textContent = "Save";
             edit.style.display = "none";
             

        
        let x=0;

        
            save.onclick =  function () {
            nDiv.textContent = document.getElementById("txt").value;
            if (document.getElementById("txt").value!=="")
            {
                edit.style.display = "inline";

                nDiv.appendChild(delet)
                nDiv.appendChild(edit)
            }

            }

        

        nDiv.appendChild(save);
        save.classList.add('butt');
        }

        let Di = document.getElementById("Fdiv");
        Di.appendChild(nDiv);
        document.getElementById("txt").value = "";    

        nDiv.appendChild(edit);
        nDiv.appendChild(delet);

        delet.classList.add('butt');
        edit.classList.add('butt');
        
    }
    //edit

   
}