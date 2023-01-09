import React from 'react';
import MetaTags from 'react-meta-tags';
import { Col, Container, Row } from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"
import LeftSidebarProfile from './LeftSidebarProfile';
import ProfileTab from './ProfileTab';

const Profile = props => {
    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title>Profile Page | Samply - React Admin & Dashboard Template</title>
                </MetaTags>
                <Container fluid>
                    {/* Render Breadcrumbs */}
                    <Breadcrumbs title="Pages" breadcrumbItem="Profile" />

                    <Row className="mb-4">
                        <Col xl={4}>
                            <LeftSidebarProfile />
                        </Col>
                        <Col xl={8}>
                            <ProfileTab />
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
}

export default Profile;