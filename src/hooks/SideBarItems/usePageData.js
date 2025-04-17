import { useSelector } from 'react-redux';

const usePageData = () => {
  const page = useSelector((state) => state.PageChanger);
  const sectionData = useSelector((state) => state.Section);
  return { page, sectionData };
};

export default usePageData;