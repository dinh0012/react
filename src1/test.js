class App {
    constructor(props) {
        this.state = {value: ""}
        this.handleChange = this.handleChange.bind(this)
        this.setState = this.setState.bind(this)
    }
    setState(value) {
        this.state = {...this.state, ...value}
    }
    handleChange(e) {
        this.setState({value: e.target.value})
        console.log(this)
    }

    render() {
        return (
            <>
                <input type="text" onChange={this.handleChange}/>
                <h2>{this.state.value}</h2>
            </>
        )
    }
}

const B = (props) => {
    return (
        <div>
            aaaaaaaaaaaaa
        </div>
    )
}

const f = (
    <div>
        <App id={1}/>
        <B id={1}/>
    </div>
);


const g = (
    <ul>
        <li>item 122</li>
        <li>item2</li>
    </ul>
);
const a = () => {
    const $root = document.getElementById('root');
    const $reload = document.getElementById('reload');

    updateElement($root, f);
    $reload.addEventListener('click', () => {
        updateElement($root, g, f);
    });

}
a();
