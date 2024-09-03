const btns = document.querySelectorAll('.question-btn');

btns.forEach(function (btn) {
	btn.addEventListener('click', function (e) {
		// First, remove 'show-text' class from all questions
		btns.forEach(function (btn) {
			const question = btn.parentElement.parentElement;
			question.classList.remove('show-text');
		});

		// Then, toggle the 'show-text' class on the clicked question
		const question = e.currentTarget.parentElement.parentElement;
		question.classList.toggle('show-text');
	});
});
