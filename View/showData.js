import getData from "../API/getData.js";

async function showData() {
    const apiData= await getData();
    const div= document.getElementById("a");
    apiData.forEach(e => {
        const pe= document.createElement("p");
    pe.innerHTML= e.name
        div.appendChild(pe)
    });
}
export default showData;