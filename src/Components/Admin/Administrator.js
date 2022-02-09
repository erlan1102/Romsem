import React from 'react';
import { Admin, Resource} from 'react-admin';
import ReviewList from "./ReviewList";
import WokList from "./WokList";
import ReviewEdit from "./ReviewEdit";
import WokEdit from "./WokEdit";
import ReviewCreate from "./ReviewCreate";
import authProvider from "./AuthProvider";
import restProvider from 'ra-data-simple-rest';

const Administrator = () => {
    return (
        <div>

            <Admin
                dataProvider={restProvider('http://localhost:3000')}
                authProvider={authProvider}
            >
                <Resource name="reviews" list={ReviewList} edit={ReviewEdit} create={ReviewCreate}/>
                <Resource name="wok" list={WokList} edit={WokEdit} create={ReviewCreate}/>
            </Admin>
        </div>

    );
};

export default Administrator;