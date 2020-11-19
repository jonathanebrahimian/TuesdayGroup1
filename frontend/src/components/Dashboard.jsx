import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { PersonnelManagement } from './PersonnelManagement';
import { AuthorizationCheck } from '../utils/AuthorizationCheck'; 
import { Header } from './Header';



export class Dashboard extends React.Component {
    componentDidMount() {
        
    }
    authorizationCheck = new AuthorizationCheck();
    

    // addReview(review){
    //     console.log("inside")
    //     debugger;
    //     var product = this.state.product;
    //     product.reviews.push(review);
    //     this.setState({
    //         product
    // 	});
    // }

    render() {
        
        let extraTab = <></>;
        if(this.authorizationCheck.checkAuthLevel()){
            debugger;
            console.log("inside");
            extraTab = (
                <li key='personelManagement' className="list-group-item border-0 col-4 float-left">
                    <Link to='/personelManagement'>
                        <div className="card bg-light block">
                            <div className="card-body bg-light">
                            <p className="bold">Personel Management</p>
                            </div>
                        </div>
                    </Link>
                </li>
            )
        }
        return  <>
            {this.authorizationCheck.redirectToLogin()}
            <Header />
            <ul>
                <li key='soldiers' className="list-group-item border-0 col-4 float-left">
                    <Link to='/soldiers'>
                        <div className="card bg-light block">
                            <div className="card-body bg-light">
                            <p className="bold">Soldiers</p>
                            </div>
                        </div>
                    </Link>
                </li>
                <li key='infromationRequest' className="list-group-item border-0 col-4 float-left">
                    <Link to='/infromationRequest'>
                        <div className="card bg-light block">
                            <div className="card-body bg-light">
                            <p className="bold">Information Request</p>
                            </div>
                        </div>
                    </Link>
                </li>
                <li key='notifications' className="list-group-item border-0 col-4 float-left">
                    <Link to='/notifications'>
                        <div className="card bg-light block">
                            <div className="card-body bg-light">
                            <p className="bold">Notifications</p>
                            </div>
                        </div>
                    </Link>
                </li>
                {extraTab}
                <li key='Profile' className="list-group-item border-0 col-4 float-left">
                    <Link to='/profile'>
                        <div className="card bg-light block">
                            <div className="card-body bg-light">
                            <p className="bold">Profile</p>
                            </div>
                        </div>
                    </Link>
                </li>
            </ul>
            <div className="clear-fix"></div>
            
        </>
    }
}