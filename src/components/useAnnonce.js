import { useParams } from 'react-router-dom';
import annonces from '../annonces.json';

const useAnnonce = () => {
    const { id } = useParams();
    const annonce = annonces.find((item) => item.id === id)
    return annonce;
};

export default useAnnonce;