import { useEffect } from "react";
import useStore from "@/app/store/store";

const withDataPreload = (WrappedComponent) => {
  return function WithDataPreload(props) {
    const fetchStations = useStore((state) => state.fetchStations);
    const fetchSortingSections = useStore(
      (state) => state.fetchSortingSections
    );

    useEffect(() => {
      fetchStations();
      fetchSortingSections();
    }, [fetchStations, fetchSortingSections]);

    return <WrappedComponent {...props} />;
  };
};

export default withDataPreload;
