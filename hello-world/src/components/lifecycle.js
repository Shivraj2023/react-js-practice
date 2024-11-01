
import React from "react";

/* function MyComponent() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Count updated to:", count);
    }, [count]);  // Effect runs whenever `count` changes

    return <button onClick={() => setCount(count + 1)}>Increment</button>;
}
export default MyComponent; */

class MyComponent extends React.Component {
    state = { data: null };

    componentDidMount() {
        fetch("https://api.example.com/data")
            .then(response => response.json())
            .then(data => this.setState({ data }));
    }

    render() {
        return <div>Data: {this.state.data}</div>;
    }
}
export default MyComponent;
