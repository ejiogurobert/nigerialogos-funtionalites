// ----------adding categories to the dropdown----------
const selectCategory = document.querySelector("select");
const logoDisplay = document.querySelector(".logo-display");

const allCategories = logos.reduce((res, acc) => {
  return res.concat(acc.category);
}, []);
const sortedCategories = [...new Set(allCategories)];
console.log(sortedCategories, "jjjjj");
for (let i = 0; i < sortedCategories.length; i++) {
  const companyCategory = document.createElement("option");
  companyCategory.textContent = sortedCategories[i];
  companyCategory.setAttribute("value", sortedCategories[i]);
  // console.log(companyCategory.setAttribut/e("value", i));
  selectCategory.insertAdjacentElement("beforeend", companyCategory);
}

for (let i = 0; i < logos.length; i += 1) {
  const title = logos[i].title;
  const fileName = logos[i].filename;
  const category = logos[i].category.join(" / ");
  const url = `https://nigerialogos.com/logos/${fileName}/${fileName}.png`;
  logoDisplay.innerHTML += `
  <div class="card-container">
  <div class="image-container">
  <img src='${url}' class="image">
  </div>
  <p class='title'>${title}</p>
  <h3 class='category'>${category}</h3>
  </div>
  `;
}

// -------------making the categories clickable-----------------

document.getElementById("drop-down").addEventListener("change", function (e) {
  const indexOfCategory = e.currentTarget.value;
  logoDisplay.innerHTML = "";
  for (let i = 0; i < logos.length; i++) {
    if (logos[i].category.includes(indexOfCategory)) {
      const title = logos[i].title;
      console.log(title);
      const fileName = logos[i].filename;
      const category = logos[i].category
        .filter((item) => item.length)
        .join(" / ");
      const url = `https://nigerialogos.com/logos/${fileName}/${fileName}.png`;
      logoDisplay.innerHTML += `
      <div class="card-container">
      <div class="image-container">
      <img src='${url}' class="image">
      </div>
      <p class='title'>${title}</p>
      <h3 class='category'>${category}</h3>
      </div>
      `;
    }
  }
});

// ----------------accessing the DOM for the all categories-----------
console.log(indexOfCategory);
