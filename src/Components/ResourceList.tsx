import React from 'react';
import ResourceCard from './ResourceCard';
import { IRecommendations } from './ResourceApp'
import './ResourceList.css'



interface IMappedResourceCard {
    listResources: IRecommendations[]
};

function ResourceList(props: IMappedResourceCard) {
    const { listResources } = props;
    const mappedResources = <ul>
        {listResources.map((item) => <li key={item.id}><ResourceCard singularResourceCard={item} /></li>)}
        </ul>
    return <div>
        {mappedResources}
    </div>
};

export default ResourceList