function formatText(command, btn) {
  document.execCommand(command, false, null);

  // Toggle "active" for the clicked button
  btn.classList.toggle("active");
}

document.getElementById("mentionBtn").addEventListener("click", () => {
  const editable = document.getElementById("commentText");
  editable.focus();
  document.execCommand("insertText", false, "@");
});

document.getElementById("submitBtn").addEventListener("click", () => {
  const text = document.getElementById("commentText").innerHTML.trim();
  if (text) {
    const div = document.createElement("div");
    div.className = "comment";
    div.innerHTML = text;
    document.getElementById("commentsSection").appendChild(div);

    // Reset input field
    document.getElementById("commentText").innerHTML = "";

    // Reset active states of formatting buttons
    document.querySelectorAll(".toolbar button.active").forEach((btn) => {
      btn.classList.remove("active");
    });
  }
});

// Insert uploaded file link
document.getElementById("fileUpload").addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (file) {
    const editable = document.getElementById("commentText");
    editable.focus();
    const fileURL = URL.createObjectURL(file);
    document.execCommand(
      "insertHTML",
      false,
      `<a href="${fileURL}" target="_blank">${file.name}</a> `
    );
  }
});

// Insert uploaded image
document.getElementById("imageUpload").addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (file && file.type.startsWith("image/")) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const editable = document.getElementById("commentText");
      editable.focus();
      document.execCommand(
        "insertHTML",
        false,
        `<img src="${e.target.result}" style="max-width:150px; border-radius:6px; margin:5px 0;">`
      );
    };
    reader.readAsDataURL(file);
  }
});
