function submitForm() {
    let name = document.forms["regform"]["name"].value;
    let email = document.forms["regform"]["email"].value;
    let website = document.forms["regform"]["website"].value;
    let image = document.forms["regform"]["image"].value;
    const img = document.createElement("img");
    const description = document.createElement("div");
    const enrollment = document.createElement("div");
    const container = document.getElementById("user");

    console.log(name)
    if (name == "") {
      fn1 = document.forms["regform"]["name"]
      fn1.style.border = "1px solid red";
      fn1.className += "error"
    }
    if (email == "") {
      fn2 = document.forms["regform"]["email"]
      fn2.style.border = "1px solid red";
      fn2.className += "error"
      
    }
    if (website == "") {
      fn3 = document.forms["regform"]["website"]
      fn3.style.border = "1px solid red";
      fn3.className += "error"
      
    }
    if (image == "") {
      fn4 = document.forms["regform"]["image"]
      fn4.style.border = "1px solid red";
      fn4.className += "error"
    }
    else{
      fn1.classList.remove("error") 
      fn2.classList.remove("error")
      fn3.classList.remove("error") 
      fn4.classList.remove("error")
    }

    if (name == "" || email == "" || website == "" || image == ""){
      return
    }

    img.src = image;
    img.style.width = "100px";
    img.style.height = "100px";
    enrollment.append(img);
    
    const nameText = document.createElement("h3");
    nameText.innerHTML = name;
    nameText.style.marginLeft = "0px"
    nameText.style.marginTop = "0px"
    nameText.style.marginBottom = "5px"

    container.marginBottom = "20px"
    img.marginBottom = "20px"

    const emailText = document.createElement("p");
    emailText.innerHTML = email;
    emailText.style.marginBottom = "5px"

    const websiteText = document.createElement("p");
    websiteText.innerHTML = website;
    websiteText.style.marginBottom = "5px"
    
    
    const radioButtons = document.querySelectorAll('input[name="gender"]');
    let gender;
    for (const radioButton of radioButtons) {
      if (radioButton.checked) {
        gender = radioButton.value;
          break;
      }
    }
    const genderText = document.createElement("p")
    genderText.style.marginBottom = "5px"
    
    genderText.innerHTML = gender; 
    description.appendChild(nameText);
    description.appendChild(genderText);
    description.appendChild(emailText);
    description.appendChild(websiteText);

    const skills = document.createElement("p")
    skills.id = "skills";
    const skillBtns = document.querySelectorAll('input[name="skill"]');
    let count = 0;
    for (const skillBtn of skillBtns) {
      if (skillBtn.checked) {
        skills.append(skillBtn.value + " ");
        count += 1
        skillBtn.checked = false;
      }
    } 
    if (count == 0){
      skills.append("None")
    }
    
    description.style.marginLeft = "50px";
    img.style.marginLeft = "10px";
    description.appendChild(skills)
    enrollment.appendChild(description)
    container.appendChild(enrollment)
    enrollment.style.display = "flex"
    enrollment.style.marginBottom = "20px"
    
    document.forms["regform"]["name"].value = null;
    document.forms["regform"]["email"].value = null;
    document.forms["regform"]["website"].value = null;
    document.forms["regform"]["image"].value = null;

}

function onClear(){
  document.forms["regform"]["name"].value = null;
  document.forms["regform"]["email"].value = null;
  document.forms["regform"]["website"].value = null;
  document.forms["regform"]["image"].value = null;

  const skillBtns = document.querySelectorAll('input[name="skill"]');
  for (const skillBtn of skillBtns) {
    if (skillBtn.checked) {
      skillBtn.checked = false;
    }
  }
}