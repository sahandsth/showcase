import LayoutWrapper from "../../../components/LayoutWrapper";
import { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

export default function FormLayout({ children }: Props) {
    return (
        <LayoutWrapper>
            {children}
        </LayoutWrapper>
    );
}