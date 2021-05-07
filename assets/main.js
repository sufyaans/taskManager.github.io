function validate() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (email == "user@admin.com" && password == "admin") {
    onclick = location.href = 'mainPage.html';
  } else {
    alert("Email address or password incorrect");     
  }
}

function validateSignUp() {
  var user_name = document.getElementById("user_name").value;
  var signup_email = document.getElementById("signup_email").value;
  var phone_number = document.getElementById("phone_number").value;
  var signup_password = document.getElementById("signup_password").value;
  var confirm_password = document.getElementById("confirm_password").value;

  if (user_name.length < 1 || signup_email < 1 || phone_number < 1 || signup_password < 1 || confirm_password < 1) {
    alert("One or more fields are left blank");
  }
  else if (confirm_password != signup_password) {
    alert("Passwords do not match");
  }
  else {
    onclick = location.href = 'mainPage.html';
  }

}

var p = 0;
function addNew() {
  p++;
  var newProject = document.createElement("li");
  newProject.id = 'p' + p;
  var inputProject = document.getElementById("input_project").value;
  newProject.className = "project_x";

  var textNode = document.createTextNode(inputProject);
  newProject.appendChild(textNode);

  

  if (inputProject === '') {
    alert("Please insert Project name");
  } else {

    document.getElementById("list_project").appendChild(newProject);
  }
  document.getElementById("input_project").value = "";

  var del_button = document.createElement("button");
  del_button.innerHTML = '<i class="fas fa-trash-alt"></i>';
  newProject.appendChild(del_button);
  del_button.className = "delete_project";
  del_button.onclick = function () {
    deleteProject(this);
  };

  var edit_button = document.createElement("button");
  edit_button.innerHTML = '<i class="fas fa-eye"></i>';
  newProject.appendChild(edit_button);
  edit_button.className = "edit_project";
  edit_button.onclick = function () {
    editProject(this);
  };

  var complt_button = document.createElement("button");
  complt_button.innerHTML = '<i class="fas fa-check-square"></i>';
  newProject.appendChild(complt_button);
  complt_button.className = "completed_project";
  complt_button.onclick = function () {
    completeProject(this);
  }



  var taskholder = document.createElement("div");
  taskholder.id = 't' + p;
  taskholder.className = "taskholder";
  document.getElementById("task_container").appendChild(taskholder);
  document.getElementById('t' + p).style.zIndex = '-1';
  document.getElementById("project_title").value = "";
  document.getElementById("progress_color").style.width = '0%';
  document.getElementById("progress_text").innerHTML = "";
}

function deleteProject(el) {
  var obj = el.parentNode.id;
  document.getElementById(obj).remove();
  var obj2 = obj.toString();
  var obj3 = obj2.charAt(1);
  var obj4 = "t" + obj3;
  document.getElementById(obj4).remove();
  document.getElementById("project_title").value = "";
  document.getElementById("progress_color").style.width = '0%';
  document.getElementById("progress_text").innerHTML = "";
}

var pid;
function editProject(elm) {
  document.getElementById("progress_bar").style.visibility="visible";
  document.getElementById("input_task").style.visibility="visible";
  document.getElementById("add_task").style.visibility="visible";
  document.getElementById("project_title").style.visibility="visible";
  document.getElementById("task_container").style.visibility="visible";
  document.getElementById("footer").style.visibility="visible";
  pid = elm.parentNode.id;
  var obj0 = document.getElementById(pid).innerText;
  document.getElementById("project_title").value = obj0;
  var obj = pid.toString();
  var obj2 = obj.charAt(1);
  document.getElementById("t" + obj2).style.zIndex = '1';
  document.getElementById("progress_color").style.width = '0%';
  document.getElementById("progress_text").innerHTML = "";
  var nodes = document.getElementById("task_container").childNodes;

  for (var i = 1; i < nodes.length + 1; i++) {
    if (i == obj2) {
      continue;
    } else {
      document.getElementById("t" + i).style.zIndex = '-1';

    }
  }
}

function completeProject(test) {
  test.parentElement.style.textDecoration = "line-through";
 
}

function darkMode(){
  var element = document.body;
  element.classList.toggle("darkMode.css");
}

function addNewtask() {
  var obj = pid.toString();
  var obj2 = obj.charAt(1);
  var checkbox = document.createElement('input');
  checkbox.type = "checkbox";
  checkbox.name = "name" + obj2;
  checkbox.value = "value";
  checkbox.id = "c" + obj2;
  checkbox.onclick = function () {
    progressBar();
  };



  var task_title = document.getElementById("input_task").value;
  var label = document.createElement('label');
  label.htmlFor = "c" + obj2;
  label.appendChild(document.createTextNode(" " + task_title));

  if (task_title === '') {
    alert("Please insert a task");
  } else {

    
  

  document.getElementById('t' + obj2).appendChild(checkbox);
  document.getElementById('t' + obj2).appendChild(label);
  var br = document.createElement('br');
  document.getElementById('t' + obj2).appendChild(br);
  document.getElementById("input_task").value = "";

  var name = "name" + obj2;
  var check_count = 0;

  var checkboxes = document.getElementsByName(name);
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      check_count++;
    }
  }
  var total_boxes = 0;

  var nodes = document.getElementById('t' + obj2).childNodes;
  for (var j = 0; j < nodes.length; j++) {
    if (nodes[j].nodeName == "INPUT") {
      total_boxes++;
    }
  }

  var width = (100 / total_boxes) * check_count;

  document.getElementById("progress_color").style.width = width + '%';

  document.getElementById("progress_text").innerHTML = width.toFixed(0) + "% complete";
}
}

function progressBar() {
  var obj = pid.toString();
  var obj2 = obj.charAt(1);
  var name = "name" + obj2;
  var check_count = 0;

  var checkboxes = document.getElementsByName(name);
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      check_count++;
    }
  }
  var total_boxes = 0;
  var nodes = document.getElementById('t' + obj2).childNodes;
  for (var j = 0; j < nodes.length; j++) {
    if (nodes[j].nodeName == "INPUT") {
      total_boxes++;
    }
  }
  var width = (100 / total_boxes) * check_count;
  var progress= parseInt(width).toFixed(0);

  document.getElementById("progress_color").style.width = width + '%';
  document.getElementById("progress_text").innerHTML = progress + "% complete";
}

function searchFunction(){
  
 var input = document.getElementById("search_project");
 var filter = input.value.toUpperCase();
 var a = "";
 var ul = document.getElementById("list_project");
 var li = ul.getElementsByClassName("project_x");

 for (i = 0; i < li.length; i++) {
   a = li[i].innerHTML;
   if (a.toUpperCase().indexOf(filter) > -1) {
     li[i].style.display = "block";
    } else {
      li[i].style.display = "none";
    }
  }

}


function openStorage(){
  document.getElementById("storage_test").style.display= "block";
  document.getElementById("history_test").style.display = "none";
  document.getElementById("help_test").style.display = "none";
  document.getElementById("privacy_test").style.display = "none";
  document.getElementById("other_test").style.display = "none";
  
}

function openHistory(){
  document.getElementById("storage_test").style.display= "none";
  document.getElementById("history_test").style.display = "block";
  document.getElementById("help_test").style.display = "none";
  document.getElementById("privacy_test").style.display = "none";
  document.getElementById("other_test").style.display = "none";
}

function openHelp(){
  document.getElementById("storage_test").style.display= "none";
  document.getElementById("history_test").style.display = "none";
  document.getElementById("help_test").style.display = "block";
  document.getElementById("privacy_test").style.display = "none";
  document.getElementById("other_test").style.display = "none";
}

function openPrivacy(){
  document.getElementById("storage_test").style.display= "none";
  document.getElementById("history_test").style.display = "none";
  document.getElementById("help_test").style.display = "none";
  document.getElementById("privacy_test").style.display = "block";
  document.getElementById("other_test").style.display = "none";
}

function openOther(){
  document.getElementById("storage_test").style.display= "none";
  document.getElementById("history_test").style.display = "none";
  document.getElementById("help_test").style.display = "none";
  document.getElementById("privacy_test").style.display = "none";
  document.getElementById("other_test").style.display = "block";
}

function hideImage(){
  document.getElementById("overlay").style.display= "none";
}

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector("#login");
  const createAccountForm = document.querySelector("#createAccount");

  document.querySelector("#linkCreateAccount").addEventListener("click", e => {
    e.preventDefault();
    loginForm.classList.add("form--hidden");
    createAccountForm.classList.remove("form--hidden");
  });


  document.querySelector("#linkLogin").addEventListener("click", e => {
    e.preventDefault();
    loginForm.classList.remove("form--hidden");
    createAccountForm.classList.add("form--hidden");
  });

});

var switchMode = document.getElementById("switchMode");
switchMode.onclick = function() {
  document.body.classList.toggle("dark_theme");
  if (document.body.classList.contains("dark_theme")){
    switchMode.classList = "fas fa-sun";
  } else {
    switchMode.classList = "fas fa-moon"
  }
  
}

