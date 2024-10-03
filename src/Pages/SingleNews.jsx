import { useQuery, useQueryClient } from "@tanstack/react-query";
import request from "graphql-request";


export const SingleNews = () => {
    const QueryClient = useQueryClient();
    const navigate = useNavigate();
    const { newsslug } = useParams();
    
}