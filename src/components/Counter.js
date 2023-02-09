import Button from "./Button";

function Counter (props){
    return (
        <div>
            <Button buttonLabel='-' buttonHandler={props.minus}/>
            {props.count}
            <Button buttonLabel='+' buttonHandler={props.plus} />

        </div>
    )
}
export default Counter;