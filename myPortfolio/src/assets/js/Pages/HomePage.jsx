import '../../scss/Pages/HomePage.scss'

function Home() {

    return(
        <div className='main'>
            <div className="text">
                <h1 className="title">Hi! My name is &#60;<span>Alex</span>&#47;&#62;</h1>
                <h2 className='title-desc'>i’m frontend developer</h2>
                <div className='citat'>
                    <p className='citat-text'>&ldquo; A careful programmer is a fast programmer.	&bdquo;</p>
                    <p className='Name'>&mdash; Bill Gates</p>
                </div>
            </div>
            <button className="download-cv">.download-CV</button>
        </div>
    )
}

export default Home;