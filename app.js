const bodyId = document.querySelector("#body");
const boughtPrice = document.querySelector("#bought-price");
const quantity = document.querySelector("#quantity");
const currentPrice = document.querySelector("#current-price");
const seeBtn = document.querySelector("#see-button");
const output = document.querySelector("#out-put");


output.style.display = "none";

const calculateProfitAndLoss = () => {

    let bp = boughtPrice.value;
    let q = quantity.value;
    let cp = currentPrice.value;

    let costPrice = Number(bp) * Number(q);
    let totalPrice = Number(cp) * Number(q);

    output.style.display = "block";


    if (bp && q && cp) {
        if (bp > 0 && q > 0 && cp > 0) {
            if (totalPrice > costPrice) {
                let profit = totalPrice - costPrice;
                const profitPercent = (profit / costPrice) * 100;

                bodyId.setAttribute("style", "background-image: url(./images/happy1.png");

                if (profitPercent >= 50) {
                    output.setAttribute("style",
                        "animation: flicker 3s infinite alternate");
                } else {
                    output.setAttribute("style", "animation: none");
                }
                output.style.color = "green";
                output.innerText = "Congrats! You gained " + profitPercent.toFixed(2) + "% and your profit is ₹" + profit.toFixed(2) + " 🤩";
            } else if (costPrice > totalPrice) {
                let loss = costPrice - totalPrice;
                const lossPercent = (loss / costPrice) * 100;


                output.innerText = "Ah! You lost " + lossPercent.toFixed(2) + "% and your loss is ₹" + loss.toFixed(2) + " 😔";

                if (lossPercent >= 50) {
                    bodyId.setAttribute("style", "background-color: #282A35;color: white");
                    output.setAttribute("style",
                        "animation: flicker 3s infinite alternate; color: red");

                } else {
                    bodyId.setAttribute("style", "background-color: #EEEEEE");
                    output.setAttribute("style", "animation: none; color: red");
                }
            } else {
                removeStyles();
                output.style.color = "black";
                output.innerText = "No profit, no loss, safe game 😉";
            }
        } 
        else {
            removeStyles();
            output.style.color = "black";
            output.innerText = "Please enter values greater than 0";
        }
    } else {
        removeStyles();
        output.style.color = "black";
        output.innerText = "Please fill all the boxes."
    }
}

const removeStyles = () => {
    bodyId.setAttribute("style", "background-color: none");
    output.setAttribute("style", "animation: none");
}


seeBtn.addEventListener("click", calculateProfitAndLoss);