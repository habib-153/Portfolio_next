export type TProject = {
    incomplete?: boolean;
    featured: boolean;
    type: string;
    title: string;
    description: string;
    githubUrl: string[]
    images: string[];
    liveUrl: string;
    published: Date;
    tags: string[];
}