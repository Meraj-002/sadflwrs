// const name = "Aaliya   Azeem "; // change this to your desired name
// const nameContainer = document.getElementById("animatedName");

// name.split("").forEach((char, i) => {
//     const span = document.createElement("span");
//     span.textContent = char;
//     span.style.animationDelay = `${i * 0.2}s`;
//     nameContainer.appendChild(span);
// });

const name = "Aaliya Azeem🌙";
const nameContainer = document.getElementById("nameText");

let charIndex = 0;
for (let char of name) {
  const span = document.createElement("span");
  span.textContent = char;
  span.style.animationDelay = `${charIndex * 0.10}s`;
  span.classList.add("letter");
  nameContainer.appendChild(span);
  charIndex++;
}


const shayariLines = [
//  " May 🌙 her 🌷 nights 🕊️ be 🥀 soft 🌙 like 🌷 pastel 🕊️ skies",
// "With 🌙 moonlight 🌷 dancing 🕊️ in 🥀 her 🌙 dreamy 🌷 eyes",
// "May 🕊️ every 🌙 tear 🌷 turn 🕊️ into 🥀 a 🌙 verse",
// "That 🌷 heals 🕊️ her 🥀 soul, 🌙 not 🌷 makes 🕊️ it 🌙 worse",
// "I 🌷 pray 🕊️ for 🥀 joy 🌙 that 🌷 gently 🕊️ stays",
// "And 🌙 love 🌷 that 🕊️ lights 🥀 her 🌙 quiet 🌷 days",
// "For 🕊️ a 🌙 heart 🌷 that 🕊️ feels, 🥀 yet 🌙 doesn’t 🌷 break",
// "And 🕊️ a 🌙 world 🌷 of 🕊️ peace 🥀 for 🌙 her 🌷 to 🕊️ take"

" May 🌙 her 🌙 nights 🌙 be 🌙 soft 🌙 like 🌙 pastel 🌙 skies",
"With 🌙 moonlight 🌙 dancing 🌙 in 🌙 her 🌙 dreamy 🌙 eyes",
"May 🌙 every 🌙 tear 🌙 turn 🌙 into 🌙 a 🌙 verse",
"That 🌙 heals 🌙 her 🌙 soul, 🌙 not 🌙 makes 🌙 it 🌙 worse",
"I 🌙 pray 🌙 for 🌙 joy 🌙 that 🌙 gently 🌙 stays",
"And 🌙 love 🌙 that 🌙 lights 🌙 her 🌙 quiet 🌙 days",
"For 🌙 a 🌙 heart 🌙 that 🌙 feels, 🌙 yet 🌙 doesn’t 🌙 break",
"And 🌙 a 🌙 world 🌙 of 🌙 peace 🌙 for 🌙 her 🌙 to 🌙 take"

// " May 🌻 her 🌻 nights 🌻 be 🌻 soft 🌻 like 🌻 pastel 🌻 skies",
// "With 🌻 moonlight 🌻 dancing 🌻 in 🌻 her 🌻 dreamy 🌻 eyes",
// "May 🌻 every 🌻 tear 🌻 turn 🌻 into 🌻 a 🌻 verse",
// "That 🌻 heals 🌻 her 🌻 soul, 🌻 not 🌻 makes 🌻 it 🌻 worse",
// "I 🌻 pray 🌻 for 🌻 joy 🌻 that 🌻 gently 🌻 stays",
// "And 🌻 love 🌻 that 🌻 lights 🌻 her 🌻 quiet 🌻 days",
// "For 🌻 a 🌻 heart 🌻 that 🌻 feels, 🌻 yet 🌻 doesn’t 🌻 break",
// "And 🌻 a 🌻 world 🌻 of 🌻 peace 🌻 for 🌻 her 🌻 to 🌻 take"
];

const shayariContainer = document.getElementById("shayariText");
// let charIndex = 0;

shayariLines.forEach(line => {
  const lineDiv = document.createElement("div");
  for (let char of line) {
    const span = document.createElement("span");
    span.textContent = char;
    span.style.animationDelay = `${charIndex * 0.05}s`;
    span.classList.add("letter");
    lineDiv.appendChild(span);
    charIndex++;
  }
  shayariContainer.appendChild(lineDiv);
});



document.querySelectorAll('.flower-container').forEach(el => {
    el.innerHTML = `<div class="flower-top">
                    <div class="flower-petal flower-petal__1"></div>
                    <div class="flower-petal flower-petal__2"></div>
                    <div class="flower-petal flower-petal__3"></div>
                    <div class="flower-petal flower-petal__4"></div>
                    <div class="flower-petal flower-petal__5"></div>
                    <div class="flower-petal flower-petal__6"></div>
                    <div class="flower-petal flower-petal__7"></div>
                    <div class="flower-petal flower-petal__8"></div>
                    <div class="flower-circle"></div>
                    <div class="flower-light flower-light__1"></div>
                    <div class="flower-light flower-light__2"></div>
                    <div class="flower-light flower-light__3"></div>
                    <div class="flower-light flower-light__4"></div>
                    <div class="flower-light flower-light__5"></div>
                    <div class="flower-light flower-light__6"></div>
                    <div class="flower-light flower-light__7"></div>
                    <div class="flower-light flower-light__8"></div>
                    </div>
  
                    <div class="flower-bottom">
                    <div class="flower-stem"></div>
                    <div class="flower-leaf flower-leaf__1"></div>
                    <div class="flower-leaf flower-leaf__2"></div>
                    <div class="flower-leaf flower-leaf__3"></div>
                    <div class="flower-leaf flower-leaf__4"></div>
                    <div class="flower-leaf flower-leaf__5"></div>
                    <div class="flower-leaf flower-leaf__6"></div>
  
                    <div class="flower-grass flower-grass__1"></div>
                    <div class="flower-grass flower-grass__2"></div>
                    <div class="flower-grass flower-grass__3"></div>
                    <div class="flower-grass flower-grass__4"></div>
                    </div>`;
      });
  
      const flowers = Array.from(document.querySelectorAll('.flower-container'));
      const animatedClass = 'animate';
      
      flowers[0].classList.add(animatedClass);
      
      setTimeout(() => {
        for (let i = 1; i <= 2 && i < flowers.length; i++) {
          flowers[i].classList.add(animatedClass);
        }
      
        let remaining = flowers.slice(3); 
        const interval = setInterval(() => {
          if (remaining.length === 0) {
            clearInterval(interval);
            return;
          }
      
          const randomIndex = Math.floor(Math.random() * remaining.length);
          const el = remaining.splice(randomIndex, 1)[0]; 
          el.classList.add(animatedClass);
        }, 500);
      
      }, 3000);