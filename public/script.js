const preLoadedDiv = document.getElementById("pre-loaded");
const postLoadedDiv = document.getElementById("post-loaded");
const submitBtn = document.getElementById("generate-btn");
const resetBtn = document.getElementById("reset-btn");
const copyBtn = document.getElementById("copy-btn");
const tooltip = document.getElementById("myTooltip");
const shortUrl = document.getElementById("short-url");
const longUrl = document.getElementById("long-url");
const errorText = document.getElementById("error");

submitBtn.onclick = async () => {
  submitBtn.classList.add("is-loading");
  const res = await fetch("/", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      longUrl: longUrl.value,
    }),
  });
  const data = await res.json();
  submitBtn.classList.remove("is-loading");
  if (res.status === 400) {
    longUrl.classList.add("is-danger");
    errorText.textContent = data.message;
    return;
  }
  preLoadedDiv.style.display = "none";
  postLoadedDiv.style.display = "unset";
  shortUrl.value = data.shortUrl;
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
