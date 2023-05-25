fetch("https://picsum.photos/v2/list")
	.then(res => res.json())
	.then(data => {
		console.log(data);
		data.forEach(imgElm => {
			const photographer = imgElm.author;
			const image = imgElm.download_url;
			const id = imgElm.id;

			let imageFigure = document.createElement("figure");

			let imageOfFigure = document.createElement("img");
			imageOfFigure.setAttribute("src", image);
			imageOfFigure.setAttribute("alt", `a photoraph taken by ${photographer}`);
			imageFigure.appendChild(imageOfFigure);

			let figcaption = document.createElement("figcaption");
			figcaption.textContent = photographer;
			imageFigure.appendChild(figcaption);

			document.querySelector("section").appendChild(imageFigure);
		});
	})
	.catch(err => {
		console.log("Fehler: ", err);
	});
