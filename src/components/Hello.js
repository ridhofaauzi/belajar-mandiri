/**
 * membuat component hello
 * component hello mencetak UI (elements)
 */

// ini adalah component
function Hello(props){

    // melakukan destructing props
    const {name} = props;
    return (
        // jika didalam return ini merupakan JSX
        <div className="hello">
            <h2>Hello React</h2>
            <p>Saya {name} -  Front end Engineer</p>
        </div>
    )
}
export default Hello;