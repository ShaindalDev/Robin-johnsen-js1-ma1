const cats = [
    {
      name: "Blob",
      age: 10,
    },
    {
      name: "Harold",
    },
    {
      name: "Blurt",
      age: 21,
    },
  ];
  //Question 1
  const animal = {
    type: "cat",
    complain: function () {
      console.log("Meow!");
    },
  };
  //Question 2
  const heading = document.querySelector("h3");
  heading.innerHTML = "Updated heading";
  console.log(heading);
  
  //Question 3
  heading.style.fontSize = "2em";
  
  //Question 4
  heading.className = "subheading";
  
  //Question 5
  const paragraphs = document.querySelectorAll("p");
  
  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red";
  }
  
  //Question 6
  const resultsContainer = document.querySelector(".results");
  
  resultsContainer.innerHTML = "<p>New paragraph</p>";
  resultsContainer.style.backgroundColor = "yellow";
  
  //Question 7
  function listOfAnimals(list) {
    for (let i = 0; i < list.length; i++) {
      Prop = list[i];
      console.log(Prop.name);
    }
  }
  // Calling the function created above
  listOfAnimals(cats);
  
  //Question 8
  function createCats(cats) {
    let html = "";
  
    for (let i = 0; i < cats.length; i++) {
      let catsAge = "Age Unknown";
      if (cats[i].age) {
        catsAge = cats[i].age;
      }
      html += `<div class="cat-container">
                  <h5>${cats[i].name}</h5>
                  <p>${catsAge}</p>
              </div>`;
    }
    return html;
  }
  const createHtml = createCats(cats);
  
  const catsContainer = document.querySelector(".cat-container");
  catsContainer.innerHTML = createHtml;
  