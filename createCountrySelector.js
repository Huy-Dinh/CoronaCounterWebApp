

document.addEventListener("DOMContentLoaded", function(event)
{ 
    var countryObjectsArray =
[
    {
        country: "United States",
        flag: "flag flag-us"
    },
    {
        country: "Spain",
        flag: "flag flag-es"
    },
    {
        country: "Italy",
        flag: "flag flag-it"
    },
    {
        country: "France",
        flag: "flag flag-fr"
    },
    {
        country: "Germany",
        flag: "flag flag-de"
    },
    {
        country: "United Kingdom",
        flag: "flag flag-uk"
    },
    {
        country: "China",
        flag: "flag flag-cn"
    },
    {
        country: "Iran",
        flag: "flag flag-ir"
    },
    {
        country: "Turkey",
        flag: "flag flag-tr"
    },
    {
        country: "Belgium",
        flag: "flag flag-be"
    },
    {
        country: "Netherlands",
        flag: "flag flag-nl"
    },
    {
        country: "Switzerland",
        flag: "flag flag-ch"
    },
    {
        country: "Canada",
        flag: "flag flag-ca"
    },
    {
        country: "Brazil",
        flag: "flag flag-br"
    },
    {
        country: "Russia",
        flag: "flag flag-ru"
    },
    {
        country: "Portugal",
        flag: "flag flag-pt"
    },
    {
        country: "Austria",
        flag: "flag flag-at"
    },
    {
        country: "Israel",
        flag: "flag flag-il"
    },
    {
        country: "Sweden",
        flag: "flag flag-se"
    },
    {
        country: "South Korea",
        flag: "flag flag-kr"
    },
    {
        country: "Ireland",
        flag: "flag flag-ie"
    },
    {
        country: "India",
        flag: "flag flag-in"
    },
    {
        country: "Ecuador",
        flag: "flag flag-ec"
    },

    {
        country: "Chile",
        flag: "flag flag-cl"
    },
    {
        country: "Peru",
        flag: "flag flag-pr"
    },
    {
        country: "Japan",
        flag: "flag flag-jp"
    },
    {
        country: "Poland",
        flag: "flag flag-pl"
    },
    {
        country: "Romania",
        flag: "flag flag-ro"
    },

    {
        country: "Norway",
        flag: "flag flag-no"
    },
    {
        country: "Australia",
        flag: "flag flag-au"
    },
    {
        country: "Denmark",
        flag: "flag flag-dk"
    },
    {
        country: "Philippines",
        flag: "flag flag-ph"
    },
    {
        country: "Malaysia",
        flag: "flag flag-my"
    },
    {
        country: "Mexico",
        flag: "flag flag-mx"
    },
    {
        country: "Thailand",
        flag: "flag flag-th"
    },
    {
        country: "Argentina",
        flag: "flag flag-ar"
    },
    {
        country: "Greece",
        flag: "flag flag-gr"
    },
    {
        country: "Egypt",
        flag: "flag flag-eg"
    },

    
    {
        country: "Hong Kong",
        flag: "flag flag-hk"
    },
    {
        country: "Vietnam",
        flag: "flag flag-vn"
    }
]
var ul = document.getElementById("countrySelector");
for (let i = 0;i < countryObjectsArray.length;i++)
{
    var li = document.createElement("li");
    var spanFlag = document.createElement("span");
    var spanCountry = document.createElement("span");
    spanFlag.setAttribute("class",countryObjectsArray[i].flag);
    spanFlag.setAttribute("style","margin-right:10px;");
    spanCountry.style.color = "black";
    spanCountry.innerHTML = countryObjectsArray[i].country;
    li.setAttribute("class","list-group-item");
    li.appendChild(spanFlag);
    li.appendChild(spanCountry);
    ul.appendChild(li);
}

});