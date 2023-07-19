interface PhotosProps {
    data: {
        id: number;
        url: string;
        title: string;
    }[];
}

export default function Photos({ data }: PhotosProps) {
    return (
        <>
            {
                data.filter(item => item.id <= 10).map(item => <img src={item.url} alt={item.title} key={item.id} />)
            }
        </>
    )
}