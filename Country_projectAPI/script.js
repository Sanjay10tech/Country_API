s
const btn = document.querySelector("button");
const body = document.querySelector("body");
const pContainer = document.querySelector(".pContainer");
const apiContent=document.querySelector("#apiContent");
const search = document.querySelector('.search')

//
const divRow = document.createElement("div");
divRow.classList.add("row");

//
const searchBtn = document.getElementById("searchBtn");

function getAll_Country() {
  axios.get("https://restcountries.com/v3.1/all").then((res) => {
   // console.log(res);
    countryDisplayed(res.data);
  });
}

function countryDisplayed(countries) {
  countries.forEach((country) => {
    const divCol = document.createElement("div");
    divCol.style.backgroundColor = "#F7F4CA"
    // divCol.style.border="1px solid black"
    divCol.classList.add("col");

    const div1 = document.createElement("div");
    div1.classList.add("card");
    div1.style.width = "20rem";
    div1.style.margin = "10px";
    div1.style.padding = "10px";

    div1.innerHTML = country.name.common;
    div1.style.fontSize = "30px";

    const image = document.createElement("img");
    image.classList.add("card-img-top");
    image.src = country.flags.png;

    div1.appendChild(image);

    const div2 = document.createElement("div");
    div2.classList.add("card-body");
    div2.style.textDecoration ="underline";
    div2.style.fontWeight="bold"
    div2.innerHTML = "Capital:" + country.capital;

    div1.appendChild(div2);

    const h5 = document.createElement("h5");
    h5.classList.add("card-body");
  
    h5.innerHTML ="Population :"+ country.population;

    div2.appendChild(h5);

    const h4= document.createElement("h4");
    h4.classList.add('card-body')
    h4.innerHTML ="Region :" + country.region;

    div2.appendChild(h4);

    // const btn = document.createElement("button");
    // btn.href = country.continents;
    // btn.style.backgroundColor = "red";
    // btn.style.color = "white";
    // btn.innerHTML = "Read more";
    // btn.style.borderRadius = "15px";
    // btn.style.padding = "5px";

    // div2.appendChild(btn);
    
    divCol.appendChild(div1);
    divRow.appendChild(divCol);
    pContainer.appendChild(divRow);
    body.appendChild(pContainer);
  });
}

function searchBy_Country()
{
  const countryName=document.getElementById("txt_SearchCountryName").value;
    var url="https://restcountries.com/v3.1/name/"+countryName;
  axios.get(url).then((res) => {
    console.log(countryName);
    CountryDisplayed(res.data[0]);
  });
}

function CountryDisplayed(data)
{
 
  pContainer.remove();
  const country1 = document.createElement('div')
  // country1.style.textAlign="left";
  country1.style.backgroundColor="#E8ADAA";
  country1.style.border="5px solid black"

  country1.classList.add('card');
  country1.classList.add('container');

  
  const flagURL=data.flags.png;
  const img = document.createElement('img')
  img.classList.add("card-img")
  img.style.width = "30rem";
  img.style.margin = "20px";
  img.style.padding = "10px"; 

  img.src=flagURL;
  country1.appendChild(img);
  const para = document.createElement('h1')
  para.classList.add("card-header");
  para.style.textDecoration="underline";
 
  para.textContent=data.name.common;
  country1.appendChild(para);

  const capital = document.createElement('h5')
  capital.classList.add("card-body")
  capital.textContent="Capital :"+ data.capital;
  country1.appendChild(capital);

  const region  = document.createElement('h4')
  region .classList.add("card-title")
  region .textContent="Region :"+ data.region ;
  country1.appendChild(region );
 
  const population = document.createElement('h4')
  population.classList.add("card-text")
  population.textContent="Population :"+ data.population;
  country1.appendChild(population);

  
  apiContent.appendChild(country1);
  body.appendChild(apiContent);
  
  
}


