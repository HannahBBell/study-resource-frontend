import { IRecommendations } from '../App'


interface IResourceCardProps {
    singularResourceCard: IRecommendations,
};

function ResourceCard(props: IResourceCardProps) {
    const {singularResourceCard} = props;
    return (
        <div>
        <h1>{singularResourceCard.resource_name}</h1>
        <p>{singularResourceCard.category}</p>
        <p>{`Faculty is ${singularResourceCard.is_faculty}`}</p>
        </div>
    );
};

interface IMappedResourceCard {
    listResources: IRecommendations[]
};



function ResourceList(props: IMappedResourceCard) {
    const {listResources} = props;
    return <div>
        {listResources.map((item) => <ResourceCard singularResourceCard={item}/>)}
        </div>
};


export default ResourceList