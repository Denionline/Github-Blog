import { PublicationContainer, StartInformations, ContentPublication } from "./style"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faArrowUpRightFromSquare, faCalendarDay, faComment } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { NavLink, useLocation } from "react-router-dom";
import { IssueType } from "../../context/GitContext";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export const Publication = () => {

    const issue : IssueType = useLocation().state
    const { title, body, comments, html_url, user } = issue;
    
    return (
        <PublicationContainer>
            <StartInformations>
                <div>
                    <NavLink to="/">
                        <FontAwesomeIcon icon={faChevronLeft} />
                        <span>Voltar</span>
                    </NavLink>
                    <NavLink to={html_url} target="_blank">
                        <span>Ver no Github</span>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </NavLink>
                </div>
                <h2>{title}</h2>
                <div>
                    <div>
                        <FontAwesomeIcon icon={faGithub}/>
                        <span>{user.login}</span>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faCalendarDay}/>
                        <span>
                            {formatDistanceToNow(new Date (issue.created_at), {
                                    addSuffix: true,
                                    locale: ptBR
                                })}
                        </span>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faComment}/>
                        <span>
                            {comments}
                            {comments === 1 ? ' comentário' : ' comentários'}
                        </span>
                    </div>
                </div>
            </StartInformations>
            <ContentPublication>
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {body}
                </ReactMarkdown>
            </ContentPublication>
        </PublicationContainer>
    )
}