const NewsLetter = () => {
    return (
        <>
            <div className="newsletterSec">
                <img src="newsletter image.jpg" alt="" />
                <div className="newletterInfo">
                    <h1>Subscribe To Our Newsletter</h1>
                    <h3>Want to get special offers before they run out? Subscribe to our email to get exlusive discounts and offers.</h3>
                    <div className="inputEmail">
                        <input type="text" placeholder="Your Email Address" />
                        <button className="newsButton">Subscribe</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewsLetter