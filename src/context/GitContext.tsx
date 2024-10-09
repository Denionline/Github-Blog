import { createContext, ReactNode } from "react";
import { useEffect, useState } from "react";
import { apiIssues, apiUser } from "../lib/axios";

export interface gitUserType {
    login: string;
    avatar_url: string;
    html_url: string;
    name: string;
    company: string;
    bio: string;
    followers: number;
}

export interface IssueType {
    html_url: string;
    id: number;
    title: string;
    comments: number;
    created_at: string;
    body: string;
    user: gitUserType;
}

interface gitIssuesType {
    total_count: number
    incomplete_results: boolean;
    items: IssueType[]
}

interface GitContextType {
    gitUser: gitUserType;
    issues: gitIssuesType;
    openedIssue: IssueType | undefined;
    openIssue: (issueToOpen: IssueType) => void;
    fetchGitIssues: (query?:string) => Promise<void>;
}

export const GitContext = createContext({} as GitContextType);

interface GitContextProviderProps{
    children: ReactNode;
}

export const GitContextProvider = ({children}:GitContextProviderProps) => {

    const dataToBlog = {
        user: 'denionline',
        repo: 'Github-Blog'
    }

    const [gitUser, setGitUser] = useState<gitUserType>();

    const [issues, setIssues] = useState<gitIssuesType>();

    const [openedIssue, setOpenedIssue] = useState<IssueType>();

    async function fetchGitUser () {
        const response = await apiUser.get(dataToBlog.user);
        setGitUser(response.data);
    }

    async function fetchGitIssues () {
        const response = await apiIssues
            .get('issues', {
                params: {
                    q: `repo:${dataToBlog.user}/${dataToBlog.repo}`,

                }
            });
        setIssues(response.data);
    }

    useEffect(() => {
        fetchGitUser();
        fetchGitIssues();
    }, [])

    function openIssue(issueToOpen:IssueType) {
        setOpenedIssue(issueToOpen);
    }

    if(!gitUser){
        return
    }

    if(!issues){
        return
    }

    return (
        <GitContext.Provider value={{
            gitUser,
            issues,
            openedIssue,
            openIssue,
            fetchGitIssues
        }}>
            {children}
        </GitContext.Provider>
    )
}