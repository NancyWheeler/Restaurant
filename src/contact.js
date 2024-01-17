const createContactPage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    const title = document.createElement('h1');
    title.textContent = 'Contact';
    pageContent.appendChild(title);

    const para = document.createElement('p');
    para.textContent = 'brew@coffee.com';
    pageContent.appendChild(para);

    const contactForm = document.createElement('form');
    contactForm.classList.add('contact-form');
    const label = document.createElement('label');
    label.textContent = 'Name';
    label.setAttribute('for', 'name');
    contactForm.appendChild(label);
    
    const input = document.createElement('input');
    input.type = 'text';
    input.name = 'name';
    contactForm.appendChild(input);
    
    const message = document.createElement('textarea');
    message.setAttribute('cols', '40');
    message.setAttribute('rows', '7');
    message.setAttribute('placeholder', 'Enter message here...');
    contactForm.appendChild(message);
    
    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.textContent = 'Submit';
    contactForm.appendChild(submitBtn);

    pageContent.appendChild(contactForm);
    content.appendChild(pageContent);
}

export default createContactPage;