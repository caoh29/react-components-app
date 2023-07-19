import { useEffect, useState } from "react";
import Photos from "../Photos/Photos";

import styles from "./Main.module.css";

export default function Main() {

    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/photos");
                const data = await response.json();
                setData(data);
            } catch (error) {
                console.log("error", error);
            }
        }
        fetchData();
    }, []);

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <main className={styles.main}>
            <Photos data={data} />
        </main>
    )
}
