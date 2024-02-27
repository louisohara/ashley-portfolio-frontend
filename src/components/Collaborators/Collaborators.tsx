import { CollaboratorsObject } from "../../types/interfaces/interfaces";
import "./Collaborators.scss";

interface CollaboratorsProps {
  collaborators: Array<CollaboratorsObject>;
}

export default function Collaborators({ collaborators }: CollaboratorsProps) {
  const renderCollaborators = () => {
    if (collaborators.length > 0) {
      return collaborators.map((collaborator) => {
        return (
          <div
            className={
              collaborators.length > 8
                ? "collaborator collaborator--long"
                : "collaborator"
            }
            key={collaborator.id}
          >
            <span className="collaborator__title">{collaborator.title}: </span>
            {collaborator.collaborator.split(",").map((word, index, array) => (
              <span key={index} className="collaborator__name">
                {word}
                {index < array.length - 1 && ","}
              </span>
            ))}
          </div>
        );
      });
    }
  };
  return (
    <div className="carousel__slide">
      <article className="carousel__content carousel__content--collaborators">
        <h3 className="collaborator__credits">CREDITS</h3>
        {renderCollaborators()}
      </article>
    </div>
  );
}
