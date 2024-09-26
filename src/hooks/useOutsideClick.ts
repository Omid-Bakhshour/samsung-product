import { useEffect } from "react";

const useOutsideClick = (ref:React.RefObject<HTMLDivElement>, callback=(a?:any)=>{}, value: boolean = true) => {
  const handleClick = (e:any) => {
    if (ref.current && !ref.current.contains(e.target) && value) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  },[value]);
};

export default useOutsideClick