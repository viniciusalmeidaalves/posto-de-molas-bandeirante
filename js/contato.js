const contactForm = document.getElementById('contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const message = [
      `Nome: ${formData.get('nome')}`,
      `E-mail: ${formData.get('email')}`,
      `Telefone: ${formData.get('telefone') || 'Não informado'}`,
      `Assunto: ${formData.get('assunto')}`,
      `Mensagem: ${formData.get('mensagem')}`
    ].join('\n');

    const whatsappUrl = `https://wa.me/5516997717465?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  });
}