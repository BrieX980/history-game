import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
         <table>
                <tr>
                    <td>
                        <Link to="/">Home</Link>
                    </td>
                    <td>
                        <Link to="/quiz">Quiz</Link>
                    </td>
                    <td>
                        <Link to="/contact">Contact</Link>
                    </td>
                </tr>
            </table>

            <Outlet />   
        </>
    )
};

export default Layout;