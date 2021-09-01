import { useRoute } from "@react-navigation/native";

export const useDetails = () => {
    const { params: { price, description } } = useRoute();

    return { price, description };
}