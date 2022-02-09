import React from 'react';
import {List, Datagrid, DateField, TextField, EditButton, DeleteButton} from 'react-admin';

const WokList = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source="id" />
                <TextField source="title" />
                <TextField source="price" />
                <TextField source="imageUrl" />
                <TextField source="ingredients" />
                <EditButton basePath="/wok"/>
                <DeleteButton basePath="/wok"/>
            </Datagrid>
        </List>
    );
};

export default WokList;