let mission;
document.getElementById("but").onclick = function ()
{
    mission = document.getElementById("txt").value;
    if (mission !== "")
    {
        let nDiv = document.createElement("div");
        nDiv.textContent = mission;


        // edit
        let edit = document.createElement("button");
        edit.textContent = "Edit";
        edit.onclick = function () {

            nDiv.style.display = "none";
            let editContainer = document.createElement("div");

            let editInput = document.createElement("input");
            editInput.type = "text";
            editInput.value = mission;
            

            let saveButton = document.createElement("button");
            saveButton.textContent = "Save";

            saveButton.onclick = function () {
                
                let editedText = editInput.value;
                nDiv.textContent = editedText;
                nDiv.style.display = "inline-block"; 
                editContainer.style.display = "none";
            };
            editContainer.appendChild(editInput);
            editContainer.appendChild(saveButton);

            nDiv.appendChild(editContainer);

            
        };

        // delete
        let delet = document.createElement("button");
        delet.textContent = "Delete";
        delet.onclick = function () {
            nDiv.remove();
        };

        nDiv.appendChild(edit);
        nDiv.appendChild(delet);

        let Di = document.getElementById("Fdiv");
        Di.appendChild(nDiv);
        document.getElementById("txt").value = "";

    }
}