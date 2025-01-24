// Meta.js
import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

function Meta() {
    const location = useLocation();

    const getTitle = () => {
        switch (location.pathname) {
            case '/':
                return 'Home - Saraswathy Kala Kendra';
            case '/aboutskk':
                return 'About - Saraswathy Kala Kendra';
            case '/gallery':
                return 'Gallery - Saraswathy Kala Kendra';
            case '/courses':
                return 'Courses - Saraswathy Kala Kendra';
            case '/events':
                return 'Events - Saraswathy Kala Kendra';
            case '/blogs':
                return 'Blogs - Saraswathy Kala Kendra';
            case '/faq':
                return 'FAQ - Saraswathy Kala Kendra';
            default:
                return 'Saraswathy Kala Kendra';
        }
    };

    const title = getTitle();

    return (
        <Helmet>
            <title>{title}</title>
            <meta property="og:title" content={title} />
            <meta property="og:description" content={`${title} page of Saraswathy Kala Kendra`} />
        </Helmet>
    );
}

export default Meta;
