import React from 'react';
import { Link } from 'react-router-dom';

export const Header = props => <> 
    <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/">Dashboard</Link></li>
            <li className="breadcrumb-item active" aria-current="page">{props.name}</li>
        </ol>
    </nav>
</>