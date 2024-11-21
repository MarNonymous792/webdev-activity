function change(state) {
  var body = document.body;
  var title = document.getElementById("title");
  var contentTitle = document.getElementById("content-title");
  var contentDesc = document.getElementById("content-desc");
  var image = document.getElementById("image");
  var navbar = document.getElementById("navbar");
  switch (state) {
    case "b":
      body.style.backgroundColor = "";
      body.style.color = "";
      title.style.color = "";
      navbar.style.backgroundColor = "";
      contentTitle.innerHTML = "Unleash the Thrill of Speed with Hot Wheels!";
      contentDesc.innerHTML = "Fuel your imagination and experience the ultimate adrenaline rush with Hot Wheels—where every car, track, and stunt sparks endless adventures. From iconic die-cast models to mind-blowing track sets, Hot Wheels delivers unmatched action for kids and collectors alike. Push the limits, race your way to glory, and create epic moments with the cars and tracks that ignite your passion for racing!";
      body.classList.remove("elsie");
      body.classList.remove("arial");
      body.classList.add("orbitron")
      image.src = "./car.webp";
      break;
    case "e":
      body.style.backgroundColor = "pink";
      body.style.color = "#000";
      navbar.style.backgroundColor = "#DA1884";
      title.style.color = "#000";
      contentTitle.innerHTML = "Dream Big, Shine Bright with Barbie!";
      contentDesc.innerHTML =
        "Step into a world of endless possibilities with Barbie—where imagination knows no bounds. Whether you're exploring careers, embracing fashion, or creating magical stories, Barbie inspires confidence, creativity, and self-expression. Discover dolls, playsets, and accessories that empower you to dream big and be anything you want to be.";
        body.classList.remove("arial");
        body.classList.remove("orbitron");
        body.classList.add("elsie")
        image.src = "./barbie.jpg";
        break;
       
    case "o":
      body.style.backgroundColor = "lightgrey";
      title.style.color = "#000";
      body.style.color = "#000";
      body.classList.remove("elsie");
      body.classList.remove("orbitron");
      body.classList.add("arial")
      image.src = "./mattel.svg";
      contentTitle.innerHTML = "Inspiring Play, Empowering Imagination – Mattel";
      contentDesc.innerHTML = "At Mattel, we bring joy to every generation through the power of play. From timeless classics like Barbie and Hot Wheels to innovative toys and games, we create experiences that spark imagination, encourage creativity, and build lasting memories. Discover a world where fun meets inspiration, and every moment becomes extraordinary."
      break;
  }
}
