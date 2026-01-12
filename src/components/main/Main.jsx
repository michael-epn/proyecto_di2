import './Main.css'
import Features from '../features/Features.jsx'
import Solution from '../solution/Solution.jsx'
import Steps from '../steps/Steps.jsx'
import Appdownload from '../appdownload/Appdownload.jsx'
import Gallery from '../gallery/Gallery.jsx'
import Contact from '../contact/Contact.jsx'

const Main = () => {
  return (
    <main>
        <Features />
        <Solution />
        <Steps />
        <Appdownload />
        <Gallery />
        <Contact />
    </main>
  )
}

export default Main
