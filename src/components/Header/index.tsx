import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import logoImg from '../../assets/ignite.svg';
import * as Dialog from "@radix-ui/react-dialog";
import { NewTransactionModal } from "../NewTransactionModal";

// asChild: Aproveita o mesmo botão existente, sem criar um outro.

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logoImg} alt="" />
                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <NewTransactionButton>Nova transação</NewTransactionButton>
                    </Dialog.Trigger>
                    <NewTransactionModal />
                </Dialog.Root>
            </HeaderContent>
        </HeaderContainer>
    )
}