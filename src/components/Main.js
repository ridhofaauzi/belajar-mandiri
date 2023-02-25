import Hello from "./Hello.js";

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

export default Main;