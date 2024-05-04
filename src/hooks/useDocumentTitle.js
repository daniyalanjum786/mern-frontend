import { useEffect } from "react";

// Custom hook to set the document title
function useDocumentTitle(title) {
  useEffect(() => {
    document.title = `E-Commerce - ${title}`;
  }, [title]);
}

export default useDocumentTitle;
