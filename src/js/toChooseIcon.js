export default function toChooseIcon(paymentSystem) {
  const icons = document.querySelectorAll('.cards-icon');
  icons.forEach((el) => el.classList.add('disabled'));
  if (paymentSystem) {
    const active = document.getElementById(paymentSystem);
    active.classList.remove('disabled');
    active.classList.add('active');
  } else if (paymentSystem === undefined) {
    const active = document.getElementById(paymentSystem);
    active.classList.remove('active');
    active.classList.add('disabled');
  }
}
