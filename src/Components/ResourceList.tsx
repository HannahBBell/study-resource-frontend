import React from 'react';
import ResourceCard from './ResourceCard';
import { IRecommendations } from '../App'


interface IMappedResourceCard {
    listResources: IRecommendations[]
};

function ResourceList(props: IMappedResourceCard) {
    const { listResources } = props;
    const mappedResources = listResources.map((item) => <ResourceCard singularResourceCard={item} />)
    return <div>
        {mappedResources}
    </div>
};

export default ResourceList