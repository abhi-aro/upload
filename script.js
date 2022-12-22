const dragNdrop = (event) => {
	let fileName = URL.createObjectURL(event.target.files[0]);

	let preview = document.getElementById("output");
	let previewImg = document.createElement("img");

	previewImg.setAttribute("src", fileName);
	previewImg.setAttribute("alt", event.target.files[0].name);

	preview.innerHTML = "";
	preview.appendChild(previewImg);
};

const dragOver = () => {
	document.getElementById("input").classList.add("dragOver");
	document.getElementById("uploadFile").classList.add("dragOver");
};

const dragLeave = () => {
	document.getElementById("input").classList.remove("dragOver");
	document.getElementById("uploadFile").classList.remove("dragOver");
};