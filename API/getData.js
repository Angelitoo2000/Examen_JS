import url from "./url.js";
async function getData() {
    try {
      const disneyData= await fetch(url);
       if(!disneyData.ok){
        throw new Error(`Uppss hay un error ${disneyData.status}`)
       }
       const transformData= await disneyData.json();
       return transformData.data
    } catch (error) {
        console.log(error.message)
    }
}
export default getData;