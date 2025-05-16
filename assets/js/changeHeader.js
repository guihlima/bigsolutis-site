document.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  const sectionServices = document.getElementById('sectionServices');
  const sectionContact = document.getElementById('sectionContact');

  function checarScroll() {
    const scrollY = window.scrollY;

    if (sectionServices && sectionContact) {
      const topoServices = sectionServices.offsetTop - 70;
      const topoContact = sectionContact.offsetTop - 70;

      if (scrollY >= topoServices && scrollY < topoContact) {
        header.classList.add('rolado');
      } else {
        header.classList.remove('rolado');
      }
    }
  }

  window.addEventListener('scroll', checarScroll);
});