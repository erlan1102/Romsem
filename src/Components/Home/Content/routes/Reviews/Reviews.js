import React, {useEffect, useState} from 'react';
import './Reviews.css'
import axios from "axios";
import {useForm} from 'react-hook-form';

const Reviews = () => {

    const {
        register,
        handleSubmit,
        formState: {
            errors
        },
        reset
    } = useForm({
        mode: "onBlue"
    });
    const [reviews,setReviews] = useState([]);
    const [add, setAdd] = useState(false);

    const toDate = (date) => {
        return new Intl.DateTimeFormat('ru-Ru', {
            day:'2-digit',
            month:'2-digit',
            year:'2-digit',
        }).format(new Date(date))
    };

    useEffect(()=> {
        axios('http://localhost:8080/reviews').then(({data})=> setReviews(data))
    },[add]);

    const addReviews = (data) => {
        axios.post('http://localhost:8080/reviews', data).then(({data})=> setAdd(!data));
        reset();
    };
    return (
        <div className='reviews'>
            <div className='reviews__header'>
                <h2 className='reviews__title'>Отзывы</h2>
                <button onClick={()=> setAdd(!add)} className='reviews__btn'>+ Добавить отзыв</button>
            </div>
            <form style={{display:`${add ? 'flex' : 'none'}`}} onSubmit={handleSubmit(addReviews)} className='reviews__form' action="http://localhost:8080/reviews">
                    <label className='reviews__form-Lbl'>
                        <input {...register("name",{
                            required: "Поле не заполнено",
                            minLength: {
                                value: 2,
                                message: "Минимум 2 символа"}})} placeholder='Ваше имя' className='reviews__form-input' type="text"/>
                                <br/>
                        <span>{errors?.name && errors?.name?.message}</span>
                    </label>
                <label className='reviews__form-Lbl'>
                    <textarea {...register("text",{
                        required: "Поле не заполнено",
                        minLength: {
                            value:5,
                            message:"Минимум 5 символов"
                        }
                    })} placeholder='Напишите отзыв' className='reviews__form-text'/>
                    <br/>
                    {errors?.text?.message}
                </label>
                <input {...register("date")} type="hidden" value={toDate(Date.now())}/>
                <div className='reviews__form-btns'>
                    <button className='reviews__form-btn' type='submit'>Добавить</button>
                    <button className='reviews__form-btn' type='reset' onClick={()=> setAdd(!add)}>Отмена</button>
                </div>
            </form>
            <ul className='reviews__list'>
                {reviews.map((item)=> (
                    <li key={item.id} className='reviews__list-item'>
                        <div className='reviews__item-header'>
                            <h3 className='reviews__item-name'>{item.name}</h3>
                            <span className='reviews__item-date'>{item.date}</span>
                        </div>
                        <p className='reviews__item-text'>{item.text}</p>
                    </li>
                ))}

            </ul>
        </div>
    );
};

export default Reviews;