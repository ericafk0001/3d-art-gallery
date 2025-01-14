document.addEventListener("DOMContentLoaded", function () {
  AFRAME.registerComponent("start", {
    init: function () {
      let uiDiv = document.getElementById("uiDiv");
      uiDiv.style["pointer-events"] = "auto";

      uiDiv.style["background-color"] = "rgba(0, 0, 0, 0.75)";

      let buttonEnter = document.getElementById("buttonEnter");
      buttonEnter.style.cursor = "pointer";

      // Fade-in functionality
      let fadeIn = function () {
        // Allow pointer events again
        uiDiv.style["pointer-events"] = "none";

        // Remove startButton
        buttonEnter.parentNode.removeChild(buttonEnter);

        uiDiv.style["background-color"] = "rgba(0, 0, 0, 0.0)";
        uiDiv.style["transition"] = "background-color 1000ms linear";
      };

      buttonEnter.addEventListener("touchstart", fadeIn);
      buttonEnter.addEventListener("mousedown", fadeIn);
    },
  });

  AFRAME.registerComponent("painting", {
    schema: {
      image: { type: "string" },
      info: { type: "string" },
    },

    init: function () {
      // Create the border
      const border = document.createElement("a-box");
      border.setAttribute("width", "0.25");
      border.setAttribute("height", "5.2");
      border.setAttribute("depth", "4.2");
      border.setAttribute("color", "#8f4924");
      border.setAttribute("opacity", "1");
      this.el.appendChild(border);

      // Create the painting
      const painting = document.createElement("a-box");
      painting.setAttribute("width", "0.3");
      painting.setAttribute("height", "5");
      painting.setAttribute("depth", "4");
      painting.setAttribute("material", `src: ${this.data.image};`);
      painting.setAttribute("class", "clickable");
      this.el.appendChild(painting);

      // Store the info text in the component for later use
      this.info = this.data.info;

      this.el.addEventListener("click", () => {
        this.showPaintingInfo();
      });
    },

    showPaintingInfo: function () {
      const infoDiv = document.getElementById("painting-info");
      infoDiv.innerHTML = this.info;
      infoDiv.style.display = "block";
    },
  });

  //varying paintings

  document.getElementById("starryNight").addEventListener("click", function () {
    const infoDiv = document.getElementById("painting-info");
    infoDiv.innerHTML = "'Starry Night' by Vincent van Gogh";
    infoDiv.style.display = "block";
  });

  document
    .getElementById("whistlersMother")
    .addEventListener("click", function () {
      const infoDiv = document.getElementById("painting-info");
      infoDiv.innerHTML = "'Whistlers Mother' by James Abbott McNeill";
      infoDiv.style.display = "block";
    });

  document
    .getElementById("compositionRed")
    .addEventListener("click", function () {
      const infoDiv = document.getElementById("painting-info");
      infoDiv.innerHTML =
        "'Composition with Red, Blue and Yellow' by Piet Mondrian";
      infoDiv.style.display = "block";
    });

  document.getElementById("impression").addEventListener("click", function () {
    const infoDiv = document.getElementById("painting-info");
    infoDiv.innerHTML = "'Impression, Sunrise' by Claude Monet";
    infoDiv.style.display = "block";
  });

  document.getElementById("lucifer").addEventListener("click", function () {
    const infoDiv = document.getElementById("painting-info");
    infoDiv.innerHTML = "'The Fallen Angel' by Alexandre Cabanel";
    infoDiv.style.display = "block";
  });

  document.getElementById("alps").addEventListener("click", function () {
    const infoDiv = document.getElementById("painting-info");
    infoDiv.innerHTML = "'Napoleon Crossing the Alps' by Jacques-Louis David";
    infoDiv.style.display = "block";
  });

  document.getElementById("blossom").addEventListener("click", function () {
    const infoDiv = document.getElementById("painting-info");
    infoDiv.innerHTML = "'Almond Blossom' by Vincent van Gogh";
    infoDiv.style.display = "block";
  });

  document.getElementById("meninas").addEventListener("click", function () {
    const infoDiv = document.getElementById("painting-info");
    infoDiv.innerHTML = "'Las Meninas' by  Diego Velázquez";
    infoDiv.style.display = "block";
  });

  document.getElementById("park").addEventListener("click", function () {
    const infoDiv = document.getElementById("painting-info");
    infoDiv.innerHTML = "'Wivenhoe Park' by John Constable";
    infoDiv.style.display = "block";
  });
});
