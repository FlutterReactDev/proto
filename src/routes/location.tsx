import { BackPage } from "@/components/organisms/back-page";
import { LocationPage } from "@/pages/location-page";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/location")({
    component: () => (
        <BackPage originUrl="/profile">
            <LocationPage />
        </BackPage>
    ),
});
