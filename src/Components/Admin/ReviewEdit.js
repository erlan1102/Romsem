import React from 'react';
import {Edit, SimpleForm, TextInput, DateInput} from 'react-admin';


const ReviewEdit = (props) => {
    return (
        <Edit title='Изменить отзыв' {...props}>
            <SimpleForm>
                <TextInput disabled source="id" />
                <TextInput source="name" />
                <TextInput multiline source="text" />
                <DateInput label="Publication date" source="published_at" />
            </SimpleForm>
        </Edit>
    );
};

export default ReviewEdit;