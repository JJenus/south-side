function download() {
  let img = document.querySelector("#img");
  html2canvas(img).then((canvas) => {
    let imgageData = canvas.toDataURL("image/png");
    let a = document.createElement("a");
    a.href = imgageData; //Image Base64 Goes here
    a.download = "Image.png"; //File name Here
    a.click(); //Downloaded file
  });
}

function hide(){
  console.log("hide")
  document.querySelector("#south").classList.add("d-none");
}

function unhide(){
  console.log("show")
  document.querySelector("#south").classList.remove("d-none");
}