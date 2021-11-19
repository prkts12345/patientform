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