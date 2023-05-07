export interface IServerResponse {
    data?: IServers[],
    current_page?: number;
    per_page?: number;
    to?: number;
    total?: number;
    last_page?: number;
}

export interface IServers {
    id: number;
    model: string,
    original_ram: string;
    ram: string;
    ram_type: string;
    storage: string;
    location: string;
    price: string;
    converted_storage_gb: number;
    converted_storage_unity: string;
    storage_type: string;
}