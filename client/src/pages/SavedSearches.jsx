import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

const SavedSearches = () => {
    return (
        <div className="container">
            <h2>Favorites</h2>
            <div className="flex-row">
                <div className="col-12 mb-3">
                    <h3 className="bg-dark text-secondary p-3 display-inline-block">
                        
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default SavedSearches;