export interface IImage{
            id: number,
            title: string,
            brief: string,
            description: string,
            imageUrl: string
            labels: [], 
            likes: number,
            references: number,
            owner: {
                id: number,
                userName: string,
                thumbUrl: string
            },
            comments: [
                {
                    id: number,
                    userName: string,
                    thumbUrl: string,
                    comment: string,
                    createdAt: string
                }
            ],
            createdAt: string
        
}