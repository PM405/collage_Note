document.getElementById("upload-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(this);

    fetch("upload.php", {
        method: "POST",
        body: formData,
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.success) {
                const listItem = document.createElement("li");
                const link = document.createElement("a");
                link.href = "uploads/" + data.filename;
                link.textContent = data.filename;
                link.setAttribute("download", data.filename);
                listItem.appendChild(link);

                document.getElementById("notes-list").appendChild(listItem.cloneNode(true));
                document.getElementById("assignments-list").appendChild(listItem);
                document.getElementById("fileInput").value = "";
            } else {
                alert("Upload failed: " + data.error);
            }
        })
        .catch((err) => alert("Something went wrong: " + err));
});
