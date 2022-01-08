const Home = () => {
    return (
        <div className="home">
            <header className="home--header">
                <h2>Welcome to Invitable!</h2>
            </header>

            <fieldset>
                <legend>List Feature</legend>

                <ul>
                    <li>
                        Input users. Dont worry, it will avoid duplicate user!
                        <ul>
                            <li>Add Guest</li>
                            <li>You can also add your guests list with *.xls file (if you have any). <a href="#">Download template</a></li>
                        </ul>
                    </li>
                    <li>
                        Create your guests's category. So you can map your guests based on category
                        <ul>
                            <li>Add Category</li>
                            <li>strong  You can also add your category include with the related guests. <a href="#">Download template</a> <strong>[BETA]</strong></li>
                        </ul>
                    </li>
                    <li>
                        Choose your borders
                        <ul>
                            <li>With this, you can print your tag and put it into your invitation! We have a tons of border that  you can choose and ITS FREE!</li>
                        </ul>
                    </li>
                </ul>
            </fieldset>
        </div>
    )
}

export default Home