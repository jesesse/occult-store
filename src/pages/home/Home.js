import '../../assets/styles/home.css'
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="home-page">
            <div className="home-hero">
                <h1> WELCOME</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, reprehenderit. Harum, et voluptatibus consequatur fuga ipsam magni omnis repellendus ipsa, tempore veritatis, eum ut officiis debitis quod aut praesentium quidem non totam provident deleniti reprehenderit doloremque quam.</p>
                <p> Adipisci, incidunt itaque. Eveniet earum aspernatur non, nisi veniam mollitia illo corrupti architecto voluptatibus, doloribus unde dolorem debitis ullam magni. Dolor, error commodi ad expedita molestiae, eligendi quaerat nihil officiis totam laboriosam cum suscipit vero sapiente cupiditate illo quas maxime dolore molestias voluptatibus iusto reiciendis. Excepturi, officiis fuga ipsa magnam assumenda, rerum neque quidem, vel eaque quod sequi. Ad odio, eum qui possimus illum accusamus autem esse quaerat earum similique nobis nemo corrupti iure quibusdam dolores non exercitationem saepe magnam delectus perspiciatis? Nihil, iure blanditiis, molestias placeat molestiae itaque at cumque debitis quia nobis omnis reiciendis animi accusantium maiores perspiciatis veritatis repudiandae fuga dolor doloribus non ducimus. Minus aperiam ut eum quia dolores!</p>
                <Link to="/shop">
                    <h2>ENTER SHOP</h2>
                </Link>
            </div>
        </div>
    )
}

export default Home;