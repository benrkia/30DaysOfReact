const items = [
    {title: 'item 1', url: 'https://google.com/'},
    {title: 'item 2', url: 'https://google.com/'},
    {title: 'item 3', url: 'https://google.com/'},
    {title: 'item 4', url: 'https://google.com/'},
    {title: 'item 5', url: 'https://google.com/'},
];

const Item = (props) => {
    const {item} = props;
    return (
        <li>
            {item.title} <a href={item.url}>visit</a>
        </li>
    );
}

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
            {
                items.map(item => <Item item={item} /> )
            }
        </ul>
    </div>
);

ReactDOM.render(element, document.getElementById('root'));