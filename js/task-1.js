
const categories = document.querySelectorAll("#categories .item");
console.log(`Numbers of categories: ${categories .length}`)


categories.forEach((category) => { 
   const title = category.querySelector("h2").textContent;
   console.log(`Category: ${title}`);
   const titleCount = category.querySelectorAll("ul li").length;
   console.log(`Elements ${titleCount}`);
}
)


