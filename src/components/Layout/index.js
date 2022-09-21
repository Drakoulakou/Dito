import Header from './components/Header'
import Footer from './components/Footer'

function Layout(props) {

    return (
        <div>
            <Header />
            <main>
                {props.children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout