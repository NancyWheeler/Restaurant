const createRestaurantHomePage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    const title = document.createElement('h1');
    title.innerHTML = 'BREW';
    title.classList.add('page-title');
    pageContent.appendChild(title);

    const image = document.createElement('img');
    image.src = 'https://i.pinimg.com/564x/67/cd/c1/67cdc1683f91f9916de003ca3c94ef57.jpg';
    image.height = '400';
    pageContent.appendChild(image);

    const para = document.createElement('p');
    para.innerHTML = 'We serve the best coffee, come give it a try!';
    pageContent.appendChild(para);

    content.appendChild(pageContent);
}

export default createRestaurantHomePage;