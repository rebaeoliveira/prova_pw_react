import { OrdersBoard } from "../OrdersBoard";
import { Container } from "./styles";

export function Orders() {
    return (
        <Container>
            <OrdersBoard
            icon="📰"
            title="Notícia"/>
            <OrdersBoard
            icon="ℹ️"
            title="Informações"/>
            <OrdersBoard
            icon="📻"
            title="Matérias"/>
            <OrdersBoard
            icon="📡"
            title="Feed"/>
        </Container>
    )
}