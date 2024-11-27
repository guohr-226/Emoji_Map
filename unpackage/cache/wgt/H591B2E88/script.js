document.addEventListener("DOMContentLoaded", () => {
    const fileInput = document.getElementById("fileInput");
    const gallery = document.getElementById("gallery");

    fileInput.addEventListener("change", (event) => {
        const files = Array.from(event.target.files); // 获取用户选择的文件

        gallery.innerHTML = ""; // 清空当前图库

        files.forEach((file) => {
            const reader = new FileReader(); // 用于读取本地文件

            reader.onload = (e) => {
                const gridItem = document.createElement("div");
                gridItem.classList.add("grid-item");

                const img = document.createElement("img");
                img.src = e.target.result; // 显示文件内容
                img.alt = file.name;

                gridItem.appendChild(img);
                gallery.appendChild(gridItem);
            };

            reader.readAsDataURL(file); // 将文件读取为 Data URL
        });
    });
});
