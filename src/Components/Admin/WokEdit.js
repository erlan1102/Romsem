import React from 'react';
import {Edit, SimpleForm, TextInput, NumberInput} from 'react-admin';


const WokEdit = (props) => {
    return (
        <Edit title='Изменить ресурсы' {...props}>
            <SimpleForm>
                <TextInput disabled source="id" />
                <TextInput disabled source="categories" />
                <TextInput source="title" />
                <NumberInput source="price" />
                <TextInput source="imageUrl" />
                <TextInput source="youtube" />
                <TextInput multiline source="ingredients" />
            </SimpleForm>
        </Edit>
    );
};

export default WokEdit;