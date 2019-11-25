function validateForm(form) {
  var InputData = {
    number: form.number.value,
    empDate: form.empDate.value,
    days: form.days.value,
    purpose: form.purpose.value
  };

  checkEmptyFields(InputData);
  checkPhone(InputData["number"]);
  checkDate(InputData["empDate"]);
  if (allFieldsValid()) {
    return true;
  }
  return false;

  function checkEmptyFields(fields) {
    for (var key in fields) {
      if (fields[key] == "" || fields[key] == null) {
        document.getElementById(key).classList.add("errorDetected");
      } else {
        document.getElementById(key).classList.remove("errorDetected");
      }
    }
  }
  function checkEmailAddress(email) {
    if (email != "" && email != null) {
      var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!emailPattern.test(email)) {
        document.getElementById("emailAddress").classList.add("errorDetected");
      } else if (email != "") {
        document
          .getElementById("emailAddress")
          .classList.remove("errorDetected");
      }
    }
  }

  function checkPhone(tel) {
    if (tel != "" && tel != null) {
      var numPattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
      if (!numPattern.test(tel)) {
        document.getElementById("number").classList.add("errorDetected");
      } else if (tel != "") {
        document.getElementById("number").classList.remove("errorDetected");
      }
    }
  }

  function checkDate(date) {
    if (date != "" && date != null) {
      var datePattern = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;
      if (!datePattern.test(date)) {
        document.getElementById("empDate").classList.add("errorDetected");
      } else if (date != "") {
        document.getElementById("empDate").classList.remove("errorDetected");
      }
    }
  }

  function allFieldsValid() {
    var allFieldsValid = document.getElementsByClassName("errorDetected");
    if (allFieldsValid.length > 0) {
      return false;
    } else {
      return true;
    }
  }
}
