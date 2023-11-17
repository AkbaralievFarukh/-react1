import Card from "./components/Card";

const App = () => {
    return (
        <div>
            <div className="container">
                <h1>Shop Iphone</h1>
                <div className="row">
                    <div className="col-2">
                        <div className="box">
                            <Card />
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="box">
                            <Card />
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="box">
                            <Card />
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="box">
                            <Card />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App