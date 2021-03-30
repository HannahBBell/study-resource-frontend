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



export default ResourceCard