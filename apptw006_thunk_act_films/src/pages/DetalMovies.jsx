import React from "react";
import {  useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const DetalMovies = () => {

    const { id } = useParams();
    const movies = useSelector(state => state.ReducerMovies.items);
    let thisMovie = {};
    if(movies.length){thisMovie = movies.find(m => m.id == id);}
     

    return (
        <>
            <main className="main">
                <div className="wrp1024">
                    <h1>{Object.keys(thisMovie).length ? thisMovie.name : null}</h1>
                    <div className="dm_content">
                        <div className="dm_left">
                            <img src={
                                (thisMovie.image) ? thisMovie.image.medium : null
                            } alt="thisMovie.name" />
                        </div>
                        <div className="dm_rigth">
                            <p>{`Дата премьеры: ${thisMovie.premiered }`}</p>
                            <p>{`Жанр: ${(Object.keys(thisMovie).length) ? thisMovie.genres.join(', ') : null}`}</p>
                            <p>{`Продолжительность: ${(Object.keys(thisMovie).length) ? thisMovie.runtime : null} мин.`}</p>
                            <p contentEditable='true' dangerouslySetInnerHTML={{ __html: (Object.keys(thisMovie).length) ? thisMovie.summary : null }} ></p>
                        </div>
                    </div>

                    <Link to='/movies' className='btn dm_btn' >Вернуться назад</Link>
                </div>
            </main>

        </>
    );
}

export default DetalMovies;