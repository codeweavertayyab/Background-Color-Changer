let color = "";

const handleColorChange = () => {
  color = document.getElementById("colorPicker").value;
  document.getElementById("colorCode").innerHTML = color;
  document.body.style.backgroundColor = color;
};

const copyColorCode = () => {
  const colorCode = document.getElementById("colorCode").innerText;
  navigator.clipboard
    .writeText(colorCode)
    .then(() => {
      const copyButton = document.getElementById("btn-copy");
      copyButton.innerHTML = "Copied<i class='fa-solid fa-check'></i>";
      setTimeout(() => {
        copyButton.innerHTML = "Copy <i class='fa-regular fa-clipboard'></i>";
      }, 3000);
      console.log("Color Copied");
    })
    .catch((error) => {
      console.error(error);
    });
};
