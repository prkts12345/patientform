function getSelectedCheckboxValues() {
    const checkboxes = document.querySelectorAll(`input[name='symptoms']:checked`);
    let values = [];
    checkboxes.forEach((checkbox) => {values.push(checkbox.value); });
    return values;
  }


function genderSelected() {
    var checkboxes = document.getElementsByName("gender"); 

  if (genderSelected() == false) {
        alert("Please select a gender.");
        return false;
  }
}


function yes() {
    const rChoice = document.querySelectorAll("input[name='choice']");
    let selectedValue

    for (const r of rChoice) {
        if (r.checked) {
            selectedValue = r.value;
            break;
        }
    }
        console.log(selectedValue);

 }

 function no() {
  var no = document.getElementById('choice-yes').value;
  var text = document.getElementById('choice-no');
  if(no = true) {
      text.value = "";
      text.disabled = true;
  }

  if(no != true) {
      text.value = "";
      text.disabled = false;
  }
}
function yes() {
  var yes = document.getElementById('choice-no').value;
  var text = document.getElementById('yesno');
  if(yes = true) {
      text.disabled = false;
  } 

  if(yes != true) {
      text.disabled = true;
  } 

}




let patient = [];
    addPatients = (e) => {
        e.preventDefault();

        let Patients = {
            id: Date.now(),
            firstname: document.getElementById("fname").value,
            middlename: document.getElementById("middlename").value,
            lastname: document.getElementById("lname").value,
            address: document.getElementById("address").value,
            birthdate: document.getElementById("birthday").value,
            mobileNumber: document.getElementById("phone").value,
            gender: document.getElementById("male").checked == true ? document.getElementById("male").value : document.getElementById("female").value,
            medicalHistory: [...document.querySelectorAll('input[name="symptoms"]:checked')].map((option) => option.value),
            
        }

        patient.push(Patients);
        console.table(Patients)

        document.querySelector("#display pre").innerHTML = "\n" + JSON.stringify(Patients, null, 2);

        localStorage.setItem("Patients", JSON.stringify(patient))

        // document['#contact'].reset();
    }

    document.getElementById("submitBtn").addEventListener(
        "click",  addPatients

    );


    listPatient = (e) => {
        e.preventDefault();

        let newArray = [];
        newArray = JSON.parse(localStorage.getItem("Patients"));
        console.table(newArray);

        let listBtn = document.getElementById("listpatient");

        newArray.forEach((review, i) => {
            let listRows = listBtn.insertRow(i+1);
            let j = 0;
            for (let property in review) {
                let listCols = listRows.insertCell(j);
                listCols.innerText = review[property];
                j++;
            }
        });
    }

    document.getElementById("list").addEventListener(
        "click", listPatient
    )


