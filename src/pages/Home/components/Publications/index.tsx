import { useForm } from "react-hook-form"
import { PublicationsContainer, CardGrid, Card } from "./style"
import { useContext } from "react";
import { GitContext } from "../../../../context/GitContext";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import * as z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { NavLink } from "react-router-dom";

const searchFormSchema = z.object({
    query: z.string(),
})

export type SearchFormType = z.infer<typeof searchFormSchema>

export const Publications = () => {

    const { issues, fetchGitIssues } = useContext(GitContext);
    
    const { register, handleSubmit } = useForm<SearchFormType>({
        resolver: zodResolver(searchFormSchema)
    });

    async function handleSearchOnInput (data: SearchFormType) {
        await fetchGitIssues(data.query);
    }

    return (
         <PublicationsContainer>
            <div>
                <h3>Publicações</h3>
                <span>
                    {issues.total_count}
                    {issues.total_count === 1 ? ' publicação' : ' publicaçôes'}
                </span>
            </div>
            <form onSubmit={handleSubmit(handleSearchOnInput)}>
                <input type="text" placeholder="Buscar conteúdo" {...register('query')} />
            </form>
            <CardGrid>
                {issues.items.map(issue => {
                    return (
                        <NavLink to="/Publication" state={issue}>
                            <Card key={issue.id}>
                                <div>
                                    <h3>{issue.title}</h3>
                                    <span>
                                        {formatDistanceToNow(new Date (issue.created_at), {
                                            addSuffix: true,
                                            locale: ptBR
                                        })}
                                    </span>
                                </div>
                                <p>{issue.body}</p>
                            </Card>
                        </NavLink>
                    )
                })}
            </CardGrid>
         </PublicationsContainer>
    )
}