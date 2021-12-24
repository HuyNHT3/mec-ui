import React from 'react';
import Banner from '../../ui/atom/banner/Banner';
import Footer from '../../ui/atom/footer/Footer';
import ListOfServices from '../../ui/organism/list-of-services/ListOfServices';
import './ServiceStation.css';
const ServiceStation = ({ ...rest }) => {
    const serviceData = [
        {
            header: "GOOGLE DRIVE",
            image: "GoogleDrive.png"
        },
        {
            header: "Goole Class",
            image: "GoogleClass.png"
        },
        {
            header: "STUDY ENGLISH",
            image: "English.png"
        }
    ];
    return (
        <div className="ServiceStationBackColor">
            <Banner />
            <div className="ServiceStationBody">
                <div className="ServiceContent">
                    <ListOfServices serviceData={serviceData} />
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default ServiceStation;