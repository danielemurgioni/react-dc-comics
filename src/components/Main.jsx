const Main = () => {
    return (
        <main>
            <div className=" h-200 bg-black">
                <div className="container">
                    <h3>Content goes here</h3>
                </div>
            </div>
            <div className="bg-blue">
                <div className="container">
                    <div className="d-flex">
                        <div className="d-flex p-20">
                            {/* img1 */}
                            <div>
                                <img src="src/assets/img/buy-comics-digital-comics.png" /><a href="#">digital comics</a>
                            </div>
                            {/* img2 */}
                            <div>
                                <img src="src/assets/img/buy-comics-merchandise.png" /><a href="#">dc merchandise</a>
                            </div>
                            {/* img3 */}
                            <div>
                                <img src="src/assets/img/buy-comics-subscriptions.png" /><a href="#">subscription</a>
                            </div>
                            {/* img4 */}
                            <div>
                                <img src="src/assets/img/buy-comics-shop-locator.png" /><a href="#">comic shop locator</a>
                            </div>
                            {/* img5 */}
                            <div>
                                <img src="src/assets/img/buy-dc-power-visa.svg" /><a href="#">dc power visa</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Main;