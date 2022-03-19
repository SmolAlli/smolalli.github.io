window.addEventListener('hashchange', anchorClicked);

function anchorClicked() {
	showPage(window.location.hash);
}

function showPage(hash) {
	if (hash) {
		const page = document.getElementById(hash.slice(1).split('_')[0]);
		const slide = Number(hash.split('_')[1]);
		const openPage = document.getElementById('active-page');
		if (page) {
			const clone = document.createElement('section');
			clone.appendChild(document.importNode(page.content, true));
			clone.id = 'active-page';

			document.body.appendChild(clone);

			const elems = Array.from(clone.querySelectorAll('[data-src]'));
			hideMainArea();
		} else {
			showMainArea();
		}
		if (openPage) {
			openPage.remove();
		}
		window.scrollTo(0, 0);
	} else {
		try {
			const closingPage = document.getElementById('active-page');
			closingPage.parentNode.removeChild(closingPage);
			showMainArea();
		} catch (err) {}
	}
}

showPage(window.location.hash);

function hideMainArea() {
	const mainarea = document.getElementsByTagName('main')[0];
	mainarea.style.display = 'none';
}

function showMainArea() {
	const mainarea = document.getElementsByTagName('main')[0];
	mainarea.style.display = 'block';
}

waitForDocumentComplete();

function copyText(elem) {
	elem.select();
	elem.setSelectionRange(0, 99999);

	// Copy the text inside the text field
	navigator.clipboard.writeText(elem.value);
}

function changeActive(elem) {
	if (elem.classList.contains('active')) return;
	let ul = elem.parentElement.parentElement;
	let index = Array.from(ul.children).indexOf(elem.parentNode);

	for (
		let i = 0;
		i < ul.parentElement.nextElementSibling.children.length;
		i++
	) {
		elem.parentElement.parentElement.children[i].children[0].classList.remove(
			'active'
		);
		ul.parentElement.nextElementSibling.children[i].classList.remove('active');
	}

	let toActiveElem = ul.parentElement.nextElementSibling.children[index];

	elem.classList.add('active');
	toActiveElem.classList.add('active');
}
