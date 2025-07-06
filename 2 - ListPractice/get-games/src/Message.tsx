//PascalCasing is used for React components
// and camelCasing for functions and variables 
function Message()
{
    const name = 'Moshiko';
    //JSX = JavaScript XML
    //JSX is a syntax extension for JavaScript that looks similar to XML or HTML
    return <h1>Hello, World! {name}</h1>;
}
//babel is a JavaScript compiler that transforms modern JavaScript code into a version that is compatible with older browsers
//Babel is used to compile JSX into JavaScript
export default Message;