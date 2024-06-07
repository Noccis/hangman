import "../style/hangmanDrawing.css"

// The different components of the body that will be visible when user guesses the wrong letter
const HEAD = (
    <div id="head"/>
)
const BODY = (
    <div id="body"/>
)
const RIGHT_ARM = (
    <div id="right-arm"/>
)
const LEFT_ARM = (
    <div id="left-arm"/>
)
const RIGHT_LEG = (
    <div id="right-leg"/>
)
const LEFT_LEG = (
    <div id="left-leg"/>
)

export function HangmanDrawing(){
    return <div id="image-container">
        {HEAD}
        {BODY}
        {RIGHT_ARM}
        {LEFT_ARM}
        {RIGHT_LEG}
        {LEFT_LEG}
        <div id="pole-tip"/>
        <div id="pole-top"/>
        <div id="pole-middle"/>
        <div id="pole-bottom"/>
    </div>
}