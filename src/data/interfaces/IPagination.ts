import {PageParams} from "@/data/hooks/pages/usePagination";

export interface IPagination {
    page: number;
    perPage: number;
    arrayPage: number;
    changePage(page: number): void;
    changePerPage(perPage: number): void;
    setPagination(page: number, perPage?: number): void;
    pageParams: PageParams;
}