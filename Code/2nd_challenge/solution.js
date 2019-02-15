const colors = ['red', 'green', 'black', 'blue', 'brown'];
const colorsLength = colors.length;
let i = 0;

function tick(colors) {
    let class_name="circle "+colors[i%colorsLength];
    const element = (<div className={class_name} />);
    ReactDOM.render(element, document.getElementById('root'));
    i++;
}

setInterval(tick, 1000, colors);