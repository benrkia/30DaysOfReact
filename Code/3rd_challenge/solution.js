const items = [
    {title: 'item 1', url: 'https://google.com/'},
    {title: 'item 2', url: 'https://google.com/'},
    {title: 'item 3', url: 'https://google.com/'},
    {title: 'item 4', url: 'https://google.com/'},
    {title: 'item 5', url: 'https://google.com/'},
];

<<<<<<< HEAD
const Item = (props) => {
    const {item} = props;
    return (
        <li>
            {item.title} <a href={item.url}>visit</a>
        </li>
    );
}
=======
const itemsElements = items.map(item =>
    <li>
        {item.title} <a href={item.url}>visit</a>
    </li>
);
>>>>>>> a63dee88f1d3c4d1c79b173967891160d6be6936

const headerProps = {
    className: 'hidden',
    children: [
        <h1>Title goes here</h1>,
        <p>Description goes here</p>
    ],
}

const element = (
    <div>
        <header {...headerProps} className='container'  />
        <ul>
<<<<<<< HEAD
            {
                items.map(item => <Item item={item} /> )
            }
=======
            {itemsElements}
>>>>>>> a63dee88f1d3c4d1c79b173967891160d6be6936
        </ul>
    </div>
);

ReactDOM.render(element, document.getElementById('root'));