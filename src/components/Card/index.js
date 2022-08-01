import React from 'react';
import './card.scss'

/*
    This component has a lot of nested div's it would be wise to break into smaller components
*/

/*
    It's also wise to setup snapshots and unit testing to every component
    but due to time limitations I'll just skip it  here
    but if I would do it, I would set up test to check if every interation with the component
    produces the desired ui and also test the logic functions
*/

export default function Card({ movie }){
    return (
        <>
            <div className={'cardbox'}>
                <img src="images/Colour Swatch.png" className={'cardImage'} alt={"Movie image"}/>
                <div className='cardContent'>
                    <div className='cardHeaderBox'>
                        <h1 className='contentTitle'>{movie.name}</h1>
                        <div className='movieDurationBox'>
                            <h6 className='movieDuration'>{movie.runtimeInMinutes}</h6>
                        </div>
                    </div>
                    <div className='awardsAndNominationBox'>
                        <img src='images/Academy award.svg' className='awardsAndNominationIcon' alt="Awards and nomination"/>
                        <p className='awardsAndNominationText'>{`Wins ${movie.academyAwardWins} & Nominations ${movie.academyAwardNominations}`}</p>
                    </div>
                    <div className='budgetBox'>
                        <div className='budget'>
                            <h5 className='budgetHeader'>
                                Revenue
                            </h5>
                            <p className='budgetText'>
                                {`${movie.boxOfficeRevenueInMillions} M`}
                            </p>
                        </div>
                        <div className='revenue'>
                            <h5 className='budgetHeader'>
                                Budget
                            </h5>
                            <p className='budgetText'>
                                {`${movie.budgetInMillions} M`}
                            </p>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}