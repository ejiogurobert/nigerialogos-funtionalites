const selectCategory = document.querySelector("select");
const allCategories = logos.reduce((res, acc) => {
  return res.concat(acc.category);
}, []);
const sortedCategories = [...new Set(allCategories)];

// console.log(sortedCategories);
// console.log(logos);
for (let i = 0; i < sortedCategories.length; i++) {
  const companyCategory = document.createElement("option");
  companyCategory.textContent = sortedCategories[i];
  companyCategory.setAttribute("value", i);
  selectCategory.insertAdjacentElement("beforeend", companyCategory);
}
// ----------------------------------------------------------------
// const catalogue = document.querySelector("div");
// selectCategory.addEventListener("click", function (params) {
//   const indexOfCategory = params.target.value;
//   console.log(logos[indexOfCategory]);
// });

// function catalogueDisplay(imgLink, tag) {
//   const displayArea = document.getElementById("displayArea");

// }

const logoDisplay = document.querySelector(".logo-display");

for (let i = 0; i < logos.length; i += 1) {
  const title = logos[i].title;
  const fileName = logos[i].filename;
  const category = logos[i].category.filter((item) => item.length).join(" / ");
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
