const Header = () => {
    return (
        <header>
            <div className="container p-20">
                <div className="d-flex align-center">
                    <div className="col-20">
                        <figure>
                            <img className="img-fluid" src="../src/assets/img/dc-logo.png" alt="Dc Comics" />
                        </figure>
                    </div>
                    <div className="col-80">
                        <nav>
                            <ul className="d-flex justify-end">
                                <li><a href="#">characters</a></li>
                                <li><a href="#">comics</a></li>
                                <li><a href="#">movies</a></li>
                                <li><a href="#">tv</a></li>
                                <li><a href="#">games</a></li>
                                <li><a href="#">collectibles</a></li>
                                <li><a href="#">videos</a></li>
                                <li><a href="#">fans</a></li>
                                <li><a href="#">news</a></li>
                                <li><a href="#">shop</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;