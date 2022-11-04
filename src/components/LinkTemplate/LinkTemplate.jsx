import { Link } from "react-router-dom";

// styles 
import "./LinkTemplate.css";

const LinkTemplate = ({ data }) => {
    const { linkValue, id, externalLink, anchor } = data;
    return (
        <>
            {anchor && (
                <a
                    href={externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={id}
                    className="link"
                >
                    {linkValue}
                </a>
            )}

            {!anchor && (
                <Link to={externalLink} className="link" id={id}>
                    {linkValue}
                </Link>
            )}
        </>
    );
};

export default LinkTemplate;