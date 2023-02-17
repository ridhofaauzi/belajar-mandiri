/**
 * membuat component hello
 * component hello mencetak UI (elements)
 */

// ini adalah component
function Hello(props){
    console.log(props);

    // melakukan destructing props
    const {name} = props;
    return (
        // jika didalam return ini merupakan JSX
        <div className="hello">
            <h2>Hello React</h2>
            <p>Saya {name} -  Front end Engineer</p>
        </div>
    );
}

/**
 * membuat component header
 * component header menampilkan navigasi
 */

function Header(){
    return (
        <nav>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}

/**
 * membuat component main
 * component main menampung konten utama
 */

function Main(){
    // mengirim props name ke component Hello
    return (
        <main>
            <Hello name="Aufa"/>
            <Hello name="Jonas"/>
            <Hello name="Hannah"/>
            <Hello name="Mikel"/>
            <Hello name="Martha"/>
        </main>
    );
}

/**
 * membuat component footer
 * component footer menampilkan footer
 */

function Footer(){
    return (
        <footer>
            <h2>Copyright @ridhofaauzi</h2>
            <p>Created by React Js</p>
        </footer>
    );
}

/**
 * membuat component app
 * component utama yang menampung component lain
 */

function App(){
    return (
        <div>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    )
}

// ini adalah element
const name = "Ridho Fauzi"
const title = <h1>Hello React - {name}</h1>

/**
 * Render component hello ke div dengan ID Root
 */
ReactDOM.render(<App/>, document.getElementById("root"));