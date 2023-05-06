import {useState} from "react";
import {ApiService} from "@/data/services/ApiService";

export default function useIndexPage(){
    const [isLoadingLocations, setIsLoadingLocations] = useState<boolean>(false);
    const [isLoadingServers, setIsLoadingServers] = useState<boolean>(false);
    const [servers, setServers] = useState([]);
    const [locations, setLocations] = useState<string[]>([]);

    async function onSubmit() {
        setIsLoadingServers(true);

        return await ApiService
            .get('/servers')
            .then((response) => {
                setIsLoadingServers(false)
                setServers(response.data);
            }).catch((error) => {
                setIsLoadingServers(false);
                setServers([]);
            });
    }

    async function getLocations() {
        setIsLoadingLocations(true);
        return await ApiService
            .get('/servers/locations')
            .then((response) => {
                const { data } = response.data;
                setIsLoadingLocations(false)
                setLocations(data);
            }).catch((error) => {
                setIsLoadingLocations(false);
                setLocations([]);
            });
    }

    return {
        isLoadingLocations,
        isLoadingServers,
        servers,
        locations,
        getLocations,
        onSubmit
    }
}