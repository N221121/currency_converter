/*const BASE_URL="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";
const dropdown= document.querySelectorAll(".drop select");
const button=document.querySelector("button");
const from_curr = document.querySelector(".from select");
const to_curr = document.querySelector(".to select");
let Lc_from=from_curr.value.toLowerCase();
let Lc_to=to_curr.value.toLowerCase();
//console.log(Lc_from);
//console.log(Lc_to);
for (let select of dropdown){
    for(c_code in countryList){
        let newopt=document.createElement("option");
        newopt.innerText=c_code;
        newopt.value=c_code;
        if(select.name==="from" && c_code==="USD"){
            newopt.selected="selected"
        }
        else if(select.name==="to" && c_code==="INR"){
            newopt.selected="selected"
        }
        select.append(newopt);
    }
    select.addEventListener("change",(evt)=>{
        upd_flag(evt.target);
    })
}

const upd_flag=(ele)=>{
    let cur_co=ele.value;
    let country_code=countryList[cur_co];
    let new_src=`https://flagsapi.com/${country_code}/flat/64.png`;
    let img=ele.parentElement.querySelector("img");
    img.src=new_src;
}
button.addEventListener("click", async (evt)=>{
    evt.preventDefault();
    let amount=document.querySelector(".amount input");
    let amt_val=amount.value;
    console.log(amt_val);
    if(amt_val==="" || amt_val<=0){
        amt_val=1;
        amount.value = "1";
    }
})
*/
//console.log(Lc_from)
//console.log(Lc_to)
/*const URL=`${BASE_URL}/${LC_from}.json`;
let response=await fetch(URL);
let data=await response.json();
const rate = data[LC_from][Lc_to];
console.log(rate);*/

const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";
const dropdown = document.querySelectorAll(".drop select");
const button = document.querySelector("button");
const from_curr = document.querySelector(".from select");
const to_curr = document.querySelector(".to select");

for (let select of dropdown) {
    for (let c_code in countryList) {
        let newopt = document.createElement("option");
        newopt.innerText = c_code;
        newopt.value = c_code;

        if (select.name === "from" && c_code === "USD") {
            newopt.selected = "selected";
        } else if (select.name === "to" && c_code === "INR") {
            newopt.selected = "selected";
        }
        select.append(newopt);
    }

    select.addEventListener("change", (evt) => {
        upd_flag(evt.target);
    });
}

const upd_flag = (ele) => {
    let cur_co = ele.value;
    let country_code = countryList[cur_co];
    let new_src = `https://flagsapi.com/${country_code}/flat/64.png`;
    let img = ele.parentElement.querySelector("img");
    img.src = new_src;
};

button.addEventListener("click", async (evt) => {
    evt.preventDefault();
    button.disabled = true;
    let amount = document.querySelector(".amount input");
    let amt_val = amount.value;

    if (amt_val === "" || amt_val <= 0) {
        amt_val = 1;
        amount.value = "1";
        alert("Enter a valid amount! Default value set to 1.");
    }

    let from_val = from_curr.value.toLowerCase();
    let to_val = to_curr.value.toLowerCase();

    // 🔹 Fetch currency rates
    const URL = `${BASE_URL}/${from_val}.json`;
    let response = await fetch(URL);
    let data = await response.json();

    let rate = data[from_val][to_val];
    let finalAmount = (amt_val * rate).toFixed(2);

    document.querySelector(".msg").innerText =
        `${amt_val} ${from_val.toUpperCase()} = ${finalAmount} ${to_val.toUpperCase()}`;
    
        button.disabled = false;
});

