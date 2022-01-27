import React from 'react';
import Card from 'react-bootstrap/Card';
import './Home.css';
import ReactTrapButton from '../../atom/react-trap-button/ReactTrapButton';
import { Link,useNavigate } from "react-router-dom";
import { GoogleLogin, GoogleLogout } from 'react-google-login';
const Home = ({ ...rest }) => {
    var history=useNavigate();
    var arg = { label: "Login", style: "HomeLoginButton" };
    const clientId = "283076070078-clm2l26cldbit1gl8fq77b3jtr1qne54.apps.googleusercontent.com";
    const responseGoogle = (response) => {
        console.log(response);
    }
    const LogoutSuccess = (response) => {
        //history('https://accounts.google.com/Logout?hl=vi&continue=https://www.google.com/search%3Fq%3Dgoogle%2Blogout%2Bdoesn%2527t%2Bwork%26sxsrf%3DAOaemvKTAml0PwEvSv89pVMu6P9U2AbGTA%253A1641118502035%26source%3Dhp%26ei%3DJXvRYafoPJmI4-EPk7GosA8%26iflsig%3DALs-wAMAAAAAYdGJNu1yiPmVl6flIJHGfHXr50e-C36_%26oq%3Dgoogle%2Blogout%2Bdoes%26gs_lcp%3DCgdnd3Mtd2l6EAMYADIHCCEQChCgATIHCCEQChCgATIHCCEQChCgAToECCMQJzoECAAQQzoKCC4QxwEQ0QMQQzoICAAQgAQQsQM6EQguEIAEELEDEIMBEMcBENEDOgcIIxCxAhAnOgwILhDHARDRAxAKEEM6CggAELEDEIMBEAo6BwgAELEDEAo6BAgAEAo6CwgAEIAEELEDEIMBOgUIABCABDoFCC4QgAQ6BQgAEMsBOgcIABAKEMsBOgYIABAWEB46BQghEKABOgQIIRAVUABY_i1gjDhoAXAAeACAAc4FiAGUHJIBCjAuMTUuMy42LTGYAQCgAQE%26sclient%3Dgws-wiz&timeStmp=1641118512&secTok=.AG5fkS-Ve9gUe2ABTFEEq8k0Jdam9H9Jsg&ec=GAdAAQ');
    }
    return (
        <div>
            <Card className="Homebody">
                <Card.Header className="HomeHeaderFooterColor">
                    Strategies For English Certification Exams
                </Card.Header>
                <Card.Body>
                    <Card.Title className="CardTitleColor">YOU MUST BE LOGGED IN</Card.Title>
                    <Card.Text>
                    <Link to="/Login">
                        <ReactTrapButton {...arg} />
                    </Link>
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="HomeHeaderFooterColor" style={{ "text-align": "center" }}>
                    @Copyright: Huy.NguyenHoangThanh - MEC.Software Engineering
                </Card.Footer>
            </Card>
        </div>
    );
}

export default Home;