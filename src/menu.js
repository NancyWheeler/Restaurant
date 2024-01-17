const createMenuPage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    const title = document.createElement('h1');
    title.textContent = 'Menu';
    pageContent.appendChild(title);

    const menuList = document.createElement('ul');
    menuList.classList.add('menu-list');
    const item1 = document.createElement('li');
    item1.textContent = '- Black Coffee -';
    const item2 = document.createElement('li');
    item2.textContent = '- Latte -';
    const item3 = document.createElement('li');
    item3.textContent = '- Cappuccino -';

    menuList.appendChild(item1);
    menuList.appendChild(item2);
    menuList.appendChild(item3);
    pageContent.appendChild(menuList);

    content.appendChild(pageContent);
}

export default createMenuPage;