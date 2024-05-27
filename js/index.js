var siteNameInput = document.getElementById("sitName");
var sitURLInput = document.getElementById("sitURL");
var buttonId = document.getElementById("buttonid");
var allWebSite = [];

if (localStorage.getItem("allwebsite") !== null) {
  allWebSite = JSON.parse(localStorage.getItem("allwebsite"));
  displayData();
}

function addSite() {
  webSite = {
    sitName: siteNameInput.value,
    sitURL: sitURLInput.value,
  };
  allWebSite.push(webSite);
  localStorage.setItem("allwebsite", JSON.stringify(allWebSite));
  displayData();
  clearInput();
}

function displayData() {
  var box = "";
  for (var i = 0; i < allWebSite.length; i++) {
    box += `
    <tr>
    <td>${i + 1}</td>
    <td class="py-2">${allWebSite[i].sitName}</td>
    <td><a class="btn btn-outline-success btn-sm" target="_blank" href="${
      allWebSite[i].sitURL
    }">visit<i class="fa-solid fa-eye ms-2"></i></a></td>
    <td><button onclick="DeleteSit(${i})" class="btn btn-outline-danger btn-sm">Deleat <i class="fas fa-trash-alt ms-2"></i></button></td>
    </tr>
        `;
  }
  document.getElementById("bodyData").innerHTML = box;
}

function DeleteSit(deleteIndex) {
  allWebSite.splice(deleteIndex, 1);

  localStorage.setItem("allwebsite", JSON.stringify(allWebSite));
  displayData();
}

function clearInput() {
  siteNameInput.value = null;
  sitURLInput.value = null;
}

function validatInputs(elimnt) {
  var rejx = {
    sitName: /^[A-Z][\w]+$/,
    sitURL: /^https:\/\//,
  };

  if (rejx[elimnt.id].test(elimnt.value) == true) {
    elimnt.classList.add("is-valid");
    elimnt.classList.remove("is-invalid");
    elimnt.nextElementSibling.classList.replace("d-block", "d-none");
    buttonId.classList.replace("disabled", "opacity-100");
    return true;
  } else {
    elimnt.classList.add("is-invalid");
    elimnt.classList.remove("is-valid");
    elimnt.nextElementSibling.classList.replace("d-none", "d-block");
    buttonId.classList.replace("opacity-100", "disabled");
    return false;
  }
}
