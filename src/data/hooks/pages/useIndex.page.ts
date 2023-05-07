import {useState} from "react";
import {ApiService} from "@/data/services/ApiService";
import {ISearchForm} from "@/data/interfaces/ISearchForm";
import {IServerResponse} from "@/data/interfaces/IResponse";

export default function useIndexPage(){
    const [isLoadingLocations, setIsLoadingLocations] = useState<boolean>(false);
    const [isLoadingServers, setIsLoadingServers] = useState<boolean>(false);
    const [servers, setServers] = useState<IServerResponse>({
        data: []
    });
    const [locations, setLocations] = useState<string[]>([]);

    async function onSubmit(data: ISearchForm) {
        setIsLoadingServers(true);

        let ram = data?.ram ? data?.ram.join(',') : '';
        const request = {
            ram: ram,
            location: data?.location,
            storage: data?.storage == 0 ? null : data.storage,
            hard_disk_type: data?.hard_disk_type,
            page: data?.page ?? 1,
            per_page: data?.per_page ?? 10
        }

        return await ApiService
            .get('/servers', {
                params: request
            })
            .then((response) => {
                setIsLoadingServers(false)
                setServers(response.data);
            }).catch((error) => {
                setIsLoadingServers(false);
                setServers({ data: [] });
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