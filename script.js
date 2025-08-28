// copy button section
let value = 0; 
const display = document.getElementById("copy_no");
const cpy_bt = document.querySelectorAll(".copy-b");
cpy_bt.forEach(button => {
  button.addEventListener("click", function() {
    value += 1;
    display.textContent = value + " Copy";
    const card = button.closest(".card");
    const number = card.querySelector("div:nth-of-type(4) h3 b").innerText || "";

    navigator.clipboard.writeText(number)
      .then(() => {
        alert(`Copied ${number} to clipboard!`);
      })
  });
});
//end

//heart button
document.addEventListener("DOMContentLoaded", () => {
  const hearts = document.querySelectorAll(".icon_heart");
  const nav_like = document.querySelector(".likes");
  let like_count = 0;
  hearts.forEach(heart => {
    heart.addEventListener("click", () => {
      if (heart.classList.contains("active")) {
        
        heart.classList.remove("active");
        heart.classList.replace("fa-solid", "fa-regular");
        like_count--;
      } else {
        
        heart.classList.add("active");
        heart.classList.replace("fa-regular", "fa-solid");
        like_count++;
      }
      nav_like.childNodes[0].nodeValue = like_count + " "; 
    });
  });
});
//end

// call section
document.addEventListener("DOMContentLoaded", () => {
  
  const coin_nu = document.querySelector(".coin");
  let coins = 100; 
  coin_nu.childNodes[0].nodeValue = coins + " ";
  const call_bt = document.querySelectorAll(".call-b");

  call_bt.forEach(button => {
    button.addEventListener("click", () => {
      const card = button.closest(".card"); 
      const s_name = card.querySelector("p").innerText; 
      const s_no = card.querySelector(".bold b").innerText; 

      if (coins < 20) {
        alert("Insufficient balance");
        return;
      }

      coins -= 20; 
      coin_nu.childNodes[0].nodeValue = coins + " "; 

      alert(`Calling ${s_name} (${s_no})`);
    });
  });
});
//end

//Call history
document.addEventListener("DOMContentLoaded", function () {
  const call_bt = document.querySelectorAll(".call-b");
  const h_list = document.getElementById("h_list");
  const clr_bt = document.getElementById("clear_b");

  function getCurrentTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    return `${hours}:${minutes}:${seconds} ${ampm}`;
  }

  call_bt.forEach((btn) => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".card");
      const name = card.querySelector("h3 b").innerText || "Unknown Service"; // Full name
      const number = card.querySelector("div:nth-of-type(4) h3 b").innerText || "N/A"; // Correct selector
      const time = getCurrentTime();
      const li = document.createElement("li");
      li.innerHTML = `
                    <div>
                      <span>${name}</span>
                      <span>${time}</span>
                    </div>
                    <div>${number}</div>
                  `;
      h_list.appendChild(li);
    });
  });

  clr_bt.addEventListener("click", () => {
    h_list.innerHTML = "";
  });
});
//end


