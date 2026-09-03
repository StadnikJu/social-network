import { getPaginationPages } from "@/common/utils";
import s from "./PaginationControls.module.css";
import { Button } from "../../Button";

type Props = {
  setCurrentPage: (page: number) => void;
  currentPage: number;
  pagesCount: number;
};

export const PaginationControls = ({setCurrentPage, currentPage, pagesCount}: Props) => {
  const pages = getPaginationPages(currentPage, pagesCount);
  return (
    <div className={s.pagination}>
      {pages.map((page, idx) =>
        page === "..." ? (
          <span className={s.ellipsis} key={`ellipsis-${idx}`}>
            ...
          </span>
        ) : (
          <Button 
            key={page} 
            text={page} 
            onClick={() => page !== currentPage && setCurrentPage(Number(page))}
            variant={Number(page) === currentPage ? "subscribed" : "default"}
            type="button"
          />
        ),
      )}
    </div>
  );
};
