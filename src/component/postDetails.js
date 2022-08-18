import React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

const PostDetails = () => {
    let params = useParams();
    let [searchParams] = useSearchParams();
    console.log('search params', params, searchParams)
    return (
        <>
            <div className='panel panel-danger'>
                <div className='panel-heading'>{params.topic} postDetails</div>
                <div className='panel-body'>
                    {searchParams.getAll('page')} is a the Lorem ipsum filling text is used by graphic designers, programmers and printers with the aim of occupying the spaces of a website, an advertising product or an editorial production whose final text is not yet ready.
                    This expedient serves to get an idea of the finished product that will soon be printed or disseminated via digital channels.
                    In order to have a result that is more in keeping with the final result, the graphic designers, designers or typographers report the Lorem ipsum text in respect of two fundamental aspects, namely readability and editorial requirements.

                </div>
                <div>
                </div>
            </div>

        </>
    )
}

export default PostDetails;