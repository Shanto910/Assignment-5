// BUTTON SWITCH FUNCTIONS
const btnSwitch = document.querySelectorAll('.btn-inactive');
const btnDonation = document.querySelector('.btn-donation');
const btnHistory = document.querySelector('.btn-history');
const secDonation = document.querySelector('.section-donation');
const secHistory = document.querySelector('.section-history');

for (let i = 0; i < btnSwitch.length; i++) {
	btnSwitch[i].addEventListener('click', function () {
		if (btnSwitch[i].classList.contains('btn-active')) {
			return;
		}
		btnDonation.classList.toggle('btn-active');
		btnHistory.classList.toggle('btn-active');

		secDonation.classList.toggle('hidden');
		secHistory.classList.toggle('hidden');
	});
}

// HISTORY FUNCTIONS

function donationLog(amount, string) {
	const d = new Date();
	const historyDiv = document.createElement('div');
	historyDiv.classList.add('history-div');
	historyDiv.innerHTML = `
		<h2>${amount} Taka is Donated for ${string}, Bangladesh</h2>
		<p>Date : ${d}</p>
	`;

	secHistory.appendChild(historyDiv);
}

// MODAL FUNCTIONS

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const openModal = function () {
	modal.classList.remove('hidden');
	overlay.classList.remove('hidden');
};

const closeModal = function () {
	modal.classList.add('hidden');
	overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// ACCOUNT FUNCTIONS
const btnNoakhali = document.getElementById('donate-noakhali');
const btnFeni = document.getElementById('donate-feni');
const btnQuota = document.getElementById('donate-quota');

function reset() {
	document.getElementById('donation-amount-noakhali').value = '';
	document.getElementById('donation-amount-feni').value = '';
	document.getElementById('donation-amount-quota').value = '';
}

function getInputFieldValueById(id) {
	const inputValue = document.getElementById(id).value;
	const inputNumber = parseFloat(inputValue);
	return inputNumber;
}

function getTextFieldValueById(id) {
	const textValue = document.getElementById(id).innerText;
	const textNumber = parseFloat(textValue);
	return textNumber;
}

btnNoakhali.addEventListener('click', function (e) {
	e.preventDefault();

	const balance = getTextFieldValueById('account-balance');
	const donateMoneyNoakhali = getInputFieldValueById('donation-amount-noakhali');
	const totalDonationNoakhali = getTextFieldValueById('total-donation-noakhali');

	if (
		donateMoneyNoakhali > balance ||
		donateMoneyNoakhali <= 0 ||
		isNaN(donateMoneyNoakhali) ||
		typeof donateMoneyNoakhali !== 'number'
	) {
		reset();
		return alert('Invalid Input');
	}

	const newBalance = balance - donateMoneyNoakhali;
	const newTotalDonationNoakhali = totalDonationNoakhali + donateMoneyNoakhali;

	document.getElementById('account-balance').innerText = newBalance;
	document.getElementById('total-donation-noakhali').innerText = newTotalDonationNoakhali;

	donationLog(donateMoneyNoakhali, 'Flood Relief at Noakhali');
	reset();
	openModal();
});

btnFeni.addEventListener('click', function (e) {
	e.preventDefault();

	const balance = getTextFieldValueById('account-balance');
	const donateMoneyFeni = getInputFieldValueById('donation-amount-feni');
	const totalDonationFeni = getTextFieldValueById('total-donation-feni');

	if (
		donateMoneyFeni > balance ||
		donateMoneyFeni <= 0 ||
		isNaN(donateMoneyFeni) ||
		typeof donateMoneyFeni !== 'number'
	) {
		reset();
		return alert('Invalid Input');
	}

	const newBalance = balance - donateMoneyFeni;
	const newTotalDonationFeni = totalDonationFeni + donateMoneyFeni;

	document.getElementById('account-balance').innerText = newBalance;
	document.getElementById('total-donation-feni').innerText = newTotalDonationFeni;

	donationLog(donateMoneyFeni, 'Flood Relief at Feni');
	reset();
	openModal();
});

btnQuota.addEventListener('click', function (e) {
	e.preventDefault();

	const balance = getTextFieldValueById('account-balance');
	const donateMoneyQuota = getInputFieldValueById('donation-amount-quota');
	const totalDonationQuota = getTextFieldValueById('total-donation-quota');

	if (
		donateMoneyQuota > balance ||
		donateMoneyQuota <= 0 ||
		isNaN(donateMoneyQuota) ||
		typeof donateMoneyQuota !== 'number'
	) {
		reset();
		return alert('Invalid Input');
	}

	const newBalance = balance - donateMoneyQuota;
	const newTotalDonationQuota = totalDonationQuota + donateMoneyQuota;

	document.getElementById('account-balance').innerText = newBalance;
	document.getElementById('total-donation-quota').innerText = newTotalDonationQuota;

	donationLog(donateMoneyQuota, 'Aid for Injured in the Quota Movement');
	reset();
	openModal();
});
