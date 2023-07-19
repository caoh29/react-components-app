import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Main from "./Main/Main";

export default function Page() {
    return (
        <>
            <Header title="Photos"/>
            <Main/>
            <Footer title="Photos">
                <p>CopyRight Camilo Ordonez 2023</p>
            </Footer>
        </>
    )
}
