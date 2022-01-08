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
                        </ul>
                    </li>
                    <li>
                        Create your guests's category. So you can map your guests based on category
                        <ul>
                            <li>Add Category</li>
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