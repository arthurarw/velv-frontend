import {useCallback, useState} from "react";
import {IPagination} from "@/data/interfaces/IPagination";

export type PageParams = {
    page: number;
    perPage: number;
};
const usePagination = (
    initialPerPage: 10,
    initialPage = 1,
    callBackPageChange?: (pageParams: PageParams) => void
): IPagination => {
    const [perPage, setPerPage] = useState<number>(initialPerPage);
    const [page, setPage] = useState<number>(initialPage);
    const [arrayPage, setArrayPage] = useState<number>(page - 1);

    const changePage = useCallback(
        (page: number) => {
            setPage(page);
            setArrayPage(page - 1);
            callBackPageChange && callBackPageChange({page, perPage});
        },
        [callBackPageChange, perPage]
    );

    const changePerPage = useCallback(
        (perPage: number) => {
            setPerPage(perPage);
            setPage(1);
            setArrayPage(0);
            callBackPageChange && callBackPageChange({page: 1, perPage});
        },
        [callBackPageChange]
    );

    const setPagination = useCallback((page: number, perPage?: number) => {
        setPage(page);
        setArrayPage(page - 1);
        perPage && setPerPage(perPage);
    }, []);

    return { page, changePage, perPage, changePerPage, arrayPage, setPagination, pageParams: { page, perPage } };
};

export default usePagination;