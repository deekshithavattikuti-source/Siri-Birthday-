function showQuestion() {
  document.body.innerHTML = `
  <div class="container">
    <img src="images/question.gif" width="180">

    <h1>Are you Siri? 👀</h1>

    <p>Please confirm to continue 💜</p>

    <button onclick="showPassword()">Yes, It's Me 💖</button>
  </div>
  `;
}

function showPassword() {
  document.body.innerHTML = `
  <div class="container">

    <img src="images/waiting.gif" width="180">

    <h1>Hi Siri 💜</h1>

    <p>✨ I have a small surprise for you 💜</p>

    <input
      type="password"
      id="pass"
      placeholder="Enter Password">

    <br><br>

    <button onclick="checkPassword()">
      Continue ✨
    </button>

    <p id="msg"></p>

  </div>
  `;
}

function checkPassword() {

  let pass = document.getElementById("pass").value;

  if (pass === "7723") {

    if (typeof confetti === "function") {
      confetti({
        particleCount: 180,
        spread: 120,
        origin: { y: 0.6 }
      });
    }

    document.body.innerHTML = `
    <div style="text-align:center;color:white;padding:20px;">

      <h1>🎉 Happy Birthday Siri 💜🎂</h1>

      <img
        id="bear"
        src="images/bear.gif"
        style="width:170px;display:block;margin:15px auto;">

      <img
        id="slide"
        src="images/photo1.jpg"
        style="width:220px;height:300px;object-fit:cover;border-radius:20px;box-shadow:0 0 12px rgba(255,105,180,0.4);">

      <p id="caption">
        ✨ Every picture tells a beautiful story. 💜
      </p>

    </div>
    `;

    let photos = [
      "images/photo1.jpg",
      "images/photo2.jpg",
      "images/photo3.jpg",
      "images/photo4.jpg"
    ];

    let captions = [
      "✨ Every picture tells a beautiful story. 💜",
      "🌸 Keep smiling, the world looks brighter with you.",
      "🦋 Beautiful memories, forever cherished.",
      "🎂 Happy Birthday Siri! Stay blessed always. 💖"
    ];

        let i = 0;

    function nextSlide() {

      if (i < photos.length - 1) {

        i++;

        document.getElementById("slide").src = photos[i];
        document.getElementById("caption").innerHTML = captions[i];

        setTimeout(nextSlide, 2500);

      } else {

        setTimeout(showMessage, 2500);

      }

    }

    function showMessage() {

      document.body.innerHTML = `
<div style="text-align:center;color:white;padding:30px;font-family:Arial;">

<img src="images/holding.gif" width="180">

<h1 style="color:#ff69b4;">🎉 Happy Birthday Siri 💜🎂</h1>

<p style="font-size:22px;line-height:1.8;">
May your day be filled with endless happiness, beautiful memories,
and lots of smiles. 🌸✨
</p>

<p style="font-size:20px;color:#ffd6e7;">
Stay happy, stay blessed, and keep smiling always. 💖
</p>

<h2>Made with endless love 💜 by Deekshu</h2>

<button onclick="location.reload()"
style="padding:12px 20px;border:none;border-radius:10px;background:#ff69b4;color:white;font-size:18px;cursor:pointer;">
🔄 View Again
</button>

</div>
`;
    }

    setTimeout(nextSlide, 2500);

  } else {

    document.body.innerHTML = `
<div class="container">

<img src="images/crying.gif" width="180">

<h1>Oops! 😭</h1>

<p>You're not Siri! 💔</p>

<p>Only Siri can unlock this surprise! 💜</p>

<button onclick="location.reload()">Try Again 🔙</button>

</div>
`;
  }

}
    