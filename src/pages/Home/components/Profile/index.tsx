import { NameOfGit, OthersInformations, ProfileContainer } from "./style"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBuilding, faUserGroup, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { GitContext } from "../../../../context/GitContext";


export const Profile = () => {

    const { gitUser } = useContext(GitContext);

    const { 
        avatar_url,
        bio,
        company,
        followers,
        html_url,
        login,
        name
    } = gitUser;

    return (
        <ProfileContainer>
            <img src={avatar_url} alt="" />
            <div>
                <NameOfGit>
                    <h3>{name}</h3>
                    <NavLink to={html_url} target="_blank">
                        <span>GITHUB</span>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </NavLink>
                </NameOfGit>
                <p>{bio}</p>
                <OthersInformations>
                    <div>
                        <FontAwesomeIcon icon={faGithub}/>
                        <span>{login}</span>
                    </div>
                    {company && (
                        <div>
                            <FontAwesomeIcon icon={faBuilding}/>
                            <span>{company}</span>
                        </div>
                    )}
                    <div>
                        <FontAwesomeIcon icon={faUserGroup}/>
                        <span>
                            {followers}
                            {followers === 1 ? ' seguidor' : ' seguidores'}
                            </span>
                    </div>
                </OthersInformations>
            </div>                
        </ProfileContainer>
    )
}