import React, { useContext } from 'react'
import NoImagen from '../images/no-imagen.jpg'
import { AiFillHeart } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { Context } from '../context/AppContext'

const PeopleCard = ({ index, character }) => {

    const { store, actions } = useContext(Context)

    return (
        <div className="card-dark border border-3 my-4" style={{ width: "18rem" }}>
            <img src={NoImagen} className="card-img-top" alt="..." />
            <div className="card-body d-flex flex-column text-center mt-2">
                <h5 className="card-title">{character.name}</h5>
            </div>
            <div className="card-body my-3">
                <Link to={`/people/${index}`}>
                    <button className="btn btn-primary fs-5 col-7 offset-1">Learn More</button>
                </Link>
                <button
                    className={store.favorites.includes(character.name) ? "btn btn-warning fs-5 col-2 offset-1 text-danger" : "btn btn-warning fs-5 col-2 offset-1"}
                    onClick={() => { actions.addFavorite(character.name) }} ><AiFillHeart />
                </button>
            </div>
        </div>
    )
}

export default PeopleCard