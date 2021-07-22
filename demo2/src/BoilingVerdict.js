function BoilingVerdict(props) {
    if (props.temp >= 100)
        return (<h1>Water is boiling its {props.temp}<sup>o</sup>C</h1>)
    else
        return (<h1>Water is not boiling its {props.temp}<sup>o</sup>C</h1>)
}

export default BoilingVerdict;