const preLoadedDiv = document.getElementById("pre-loaded");
const postLoadedDiv = document.getElementById("post-loaded");
const submitBtn = document.getElementById("generate-btn");
const resetBtn = document.getElementById("reset-btn");
const copyBtn = document.getElementById("copy-btn");
const tooltip = document.getElementById("myTooltip");

submitBtn.onclick = () => {
  submitBtn.classList.add("is-loading");
  fetch("/api", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      longUrl: document.getElementById("long-url").value,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      submitBtn.classList.remove("is-loading");
      preLoadedDiv.style.display = "none";
      postLoadedDiv.style.display = "unset";
      document.getElementById("short-url").value = data.shortUrl;
    })
    .catch((err) => console.error(err));
};

resetBtn.onclick = () => {
  postLoadedDiv.style.display = "none";
  preLoadedDiv.style.display = "unset";
};

copyBtn.onclick = () => {
  document.getElementById("short-url").select();
  document.execCommand("copy");
  tooltip.innerHTML = `Copied To Clipboard`;
};
