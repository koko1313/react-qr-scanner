import "./style.scss";

export default function MyComponent(props) {
    return (
        <div className="MyComponent">
            <h1>{props.title}</h1>
            <input type="text" placeholder={props.placeholder}/>
            <button>Push me</button>
        </div>
    );
}
