import { Link } from 'react-router-dom';
import '../scss/footer.scss'

function Footer() {

    return (
        <footer>
            <div className="description"><Link></Link></div>
            <div className="media"><Link></Link></div>
            <div className="copyright"><Link></Link></div>
        </footer>
    );
};

export default Footer;