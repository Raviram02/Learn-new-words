
let url1 = "https://random-word-api.herokuapp.com/word";
let url2 = "https://api.dictionaryapi.dev/api/v2/entries/en/";

let btn = document.querySelector("button");
let h2 = document.querySelector("#word");
let list = document.querySelector("#list");
let para = document.querySelector("p");

async function getWord() {
    try{
        let res = await axios.get(url1);
        let word = res.data[0];
        h2.innerText = word;
        getMeaning(word);
    }catch(err){
        para.innerText = "Meaning not found";
    }
}

async function getMeaning(word) {
    try{
        list.innerText = "";
        para.innerText = "";
        let res = await axios.get(url2+word);
        // console.log(res.data[0].meanings[0].definitions[0].definition);
        let l1 = document.createElement("li");
        l1.innerText = res.data[0].meanings[0].definitions[0].definition;
        list.appendChild(l1);
    }
    catch(err){
        para.innerText = "Meaning not found";
    }
}

btn.addEventListener("click", async () => {
    try{
        await getWord();
    }catch(err){
        console.log("No word was found");
    }
})