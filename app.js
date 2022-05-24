const image = document.getElementById("bulb");

image?.addEventListener("click", () => {
  if (image.src.includes("pic_bulboff.gif")) {
    image.src = "pic_bulbon.gif";
    console.log("hiii");
  } else {
    image.src = "pic_bulboff.gif";
  }
});
