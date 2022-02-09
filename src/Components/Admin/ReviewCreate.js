import React from 'react';
import {Create, SimpleForm, TextInput, DateInput} from 'react-admin';


const ReviewCreate = (props) => {
    return (
        <Create title="Create a Review" {...props}>
            <SimpleForm>
                <TextInput source="name" />
                <TextInput multiline source="text" />
                <DateInput label="Publication date" source="published_at" />
            </SimpleForm>
        </Create>
    );
};

export default ReviewCreate;